# Home v3 · top slot, suggestions and the accounts prompt

Full v3 rules, built on `home-v2/suggestion-rules.md`. Board: `home-v3/Home v3.dc.html` (HV3.1, HV3.3); the Get started and suggestion cards are unchanged from `home-v2/Home v2.dc.html` HV2.2 to HV2.4. Applies to the Home v3 cohort only (`homeLayout == v3`, see widget-inventory.md). Short keys like `gsActImport` are unchanged v2 strings (`homeV2_` prefix, home-v2/copy.md); `homeV3_` keys are new (home-v3/copy.md). Paragraphs marked **v3 wins over v2** replace the v2 rule. Change IDs (V3-xx) point to changelog.md.

Definitions used below:
- **Day**: device-local calendar day, boundary 00:00.
- **Session**: from cold start or from returning to the foreground after at least 30 minutes in the background, until the next one starts.
- **Transactions**: non-deleted transactions of any source and type, transfers included.

## 1. The top slot

- One slot between the greeting and the first widget. It holds at most one card: Get started, or one suggestion.
- On day 1 the slot is the only thing on Home unless a welcome choice turned widgets on (V3-02). The accounts-from-SMS prompt (§7) is a bottom sheet and never uses the slot.
- Priority: Get started > promo banner > suggestion.
- While Get started is eligible, the promo banner (`HomePromoBanner`) is hidden.
- After graduation, if the promo banner is visible this session, no suggestion is shown. That session does not count as a showing.
- The card chosen at the first Home build of a session stays for that session, except for the transitions in §4.

## 2. Get started

### Eligibility
Shown when all are true: cohort v3, not graduated, setting `setGsTitle` on (default on).

### Steps (max 3)
| Step | Done when |
|---|---|
| `gsStep1` | At least 1 transaction with source SMS (list import or paste) |
| `gsStep2` | At least 1 transaction with source manual or Quick Add |
| `gsStep3` | Any account's opening balance has been set by the user (edited, even to 0) |

Progress eyebrow `gsProgress` = number of steps done.

### Actions
| Card state | Hero (filled) | Secondary (outlined) |
|---|---|---|
| fresh (0 done) | `gsActImport` | `gsActAdd`, `gsActQuick` |
| step 2 next | `gsActAdd` | `gsActQuick` |
| step 3 next | `gsActBalance` | none |
| denied | `gsActAllow` | `gsActPaste`, `gsActAdd` |
| blocked | `gsActSettings` | `gsActPaste`, `gsActAdd` |
| limit | as for the next step | as for the next step; tile with `gsActPro` |

If step 1 is not done but step 2 is, the hero stays `gsActImport` (first incomplete step wins).

### State resolution (evaluated in this order)
1. Graduating this build → **complete**.
2. Step 1 not done and SMS permission `permanentlyDenied` → **blocked**.
3. Step 1 not done and SMS permission `denied` after at least one request → **denied**. Before the first request the state is fresh; the hero asks for permission and then opens SMS import.
4. Free tier (`!hasProAccess`), weekly allowance remaining = 0, and staged SMS > 0 → **limit**. Body count = staged SMS; reset date = `sms_import_window_start + 7 days`. Limit: `smsImportFreeWeeklyLimit = 5` (existing).
5. Otherwise by steps done: fresh / 1 of 3 / 2 of 3.

### Graduation (permanent; store `graduatedAt` and `graduationReason`)
| Reason | Rule | Success state |
|---|---|---|
| `completed` | All 3 steps done | Yes |
| `transactions` | Transactions ≥ 10 | Yes |
| `dismissed` | Close tapped and the Undo timer ran out | No |
| `timeout` | 14 days since the card was first shown AND transactions ≥ 1 | No |

- Success state: shown at the next Home build after graduation, held 3000 ms or until the user scrolls, then it collapses (230 ms, easeOutCubic). Shown once.
- Close: collapse plus `gsClosedSnack` with `actUndo` (existing timed snackbar). Undo restores the card and clears graduation.
- **Graduation turns on the After setup widgets** (Quick Add, SMS Import), once and for good (V3-04, V3-05). Closing the card counts. Undo within the snackbar timer hides them again. v3 wins over v2, where they were on from day 1.
- Settings row `setGsTitle` (Settings › Widgets) shows for 30 days after install. Turning it on clears graduation; the card returns with the current progress, and if all steps are done it shows the success state again and re-graduates. Turning it off counts as `dismissed`.

## 3. Suggestions

### Global eligibility (all must be true)
1. Cohort v3.
2. Get started graduated at least 24 hours ago.
3. Setting `setSgTitle` on (default on). One stored value, shown in two places: Settings › Widgets and the pinned Suggestions row in Edit Home Widgets. The editor row applies on Save changes, like the other rows; the Settings row applies right away.
4. No promo banner visible this session.
5. No Not now or dismiss has happened in this session.

### Selection, at the first Home build of a session
1. If an **active** suggestion exists (shown before, not resolved, not expired, trigger still true), show it. This is not a new suggestion.
2. Else if a new suggestion was already shown today (`lastNewShownDay == today`), show nothing.
3. Else build the candidate list: instances whose trigger is true and state is `candidate`, or `snoozed` with `snoozedUntil <= now`. Remove instances of a suppressed type.
4. Sort data candidates by priority number, but put every type that matches a welcome choice after all types that do not (§6, V3-18). Pick the first. If there is none, pick the discovery candidate the same way. Ties are broken by the rule in the table. **v3 wins over v2**, which used the priority number alone.
5. Mark it `active`, set `firstShownAt` if empty, set `lastNewShownDay = today`, add today to `shownDays`.

### Priorities, triggers and thresholds

Merchant key: payee name lowercased, digits and punctuation stripped, UPI handle reduced to the payee name. Look-back windows are counted back from now.

| P | Type | Instance key | Trigger (all conditions) | Tie-break |
|---|---|---|---|---|
| 1 | Loans | `loans` | (≥ 1 transaction tagged EMI by the SMS parser or in a Loan/EMI category in the last 60 days, OR ≥ 1 staged SMS classified EMI in the last 60 days) AND 0 loans | n/a |
| 2 | Credit card | `cc:<accountId>` | Account type credit card AND ≥ 1 credit card SMS matched to it in the last 60 days AND `billingCycleDay == null` | Most recent SMS |
| 3 | Recurring | `recurring:<merchantKey>` | Expense to the same merchant key in each of 3 consecutive calendar months, the latest within the last 40 days; every amount within ±10% of the median or ±₹20, whichever is larger; every day-of-month within ±3 days of the median (month-end clamped); median ≥ ₹50; no active recurring rule with that merchant key, or with the same category and an amount within ±10% | Highest median amount |
| 4 | Investments | `investments` | (≥ 1 transaction or staged SMS classified SIP or mutual fund in the last 60 days: keywords SIP, mutual fund, NACH to a known AMC) AND 0 investments | n/a |
| 5 | Budget | `budget:<categoryId>` | Expense category, excluding transfer, Loan/EMI, investment and rent categories; ≥ 4 transactions in the last 30 days across ≥ 3 distinct ISO weeks; 30-day total ≥ ₹1,000; no active budget for that category | Highest 30-day total |
| 6 | Lend and borrow | `ledger` | 0 ledger entries AND (transfers or UPI payments to the same person payee, i.e. a payee not classified as a merchant, totalling ≥ ₹1,000 in the last 30 days; OR a note or transaction note from the last 30 days containing a keyword from the localized list: lent, borrowed, gave, owe, udhaar, उधार, plus the equivalents for each shipped language) | Transfer variant before note variant; then the largest amount |
| D1 | Ask Kuber | `ask_kuber` | Transactions ≥ 20 AND Ask Kuber never opened. This is the only way Ask Kuber reaches Home in v3 (V3-11) | n/a |
| D2 | Quick Add voice | `voice` | Transactions ≥ 10 AND Quick Add widget on Home AND voice entry never used AND a speech recognizer is available | n/a |
| D3 | Home screen widgets | `home_widget` | Android AND `isRequestPinAppWidgetSupported` AND no Kuber app widget placed AND install age ≥ 7 days AND transactions ≥ 15 | n/a |
| D4 | Kuber Cards | `kuber_cards` | ≥ 1 bank or credit card account AND 0 Kuber Cards AND setup never started AND install age ≥ 14 days | n/a |

Discovery types (D) are only candidates when no data type (1 to 6) is a candidate (unchanged; see open-decisions 10 for Ask Kuber).

Credit card (P2): a card whose billing date was saved in the accounts follow-up (§7) has `billingCycleDay` set, so P2 never triggers for it. Skip for now in the follow-up leaves P2 free to trigger later.

### Prefills for the main action
| Type | Opens | Prefill |
|---|---|---|
| Loans | Add loan | Lender from the SMS sender, EMI amount, EMI day |
| Credit card | Account editor, billing cycle field | Statement day from the SMS if parsed |
| Recurring | Add recurring | Merchant, median amount, monthly, next date = last charge + 1 month, account, category |
| Investments | Add investment | Type SIP, amount, AMC if parsed, SIP day |
| Budget | Add budget | Category, monthly, amount = 30-day total rounded up to the next ₹500 |
| Lend and borrow | New ledger entry | Person, amount, type Lent |
| Ask Kuber | Ask Kuber | The sample question in the input, not sent |
| Quick Add voice | Quick Add full screen | Mic listening |
| Home screen widgets | `requestPinAppWidget` | Default widget |
| Kuber Cards | Kuber Cards setup | none |

### Instance lifecycle
| Event | Result |
|---|---|
| Main action, flow saved (data types) | `accepted`. In-card success (`sg*Done`) for 1600 ms, then collapse. Never shown again. |
| Main action, flow left without saving | No change. The card stays active. |
| Main action (discovery types) | `accepted` on tap. Collapse when the user comes back to Home. |
| Not now | `snoozed`, `snoozeCount += 1`. `snoozedUntil` = now + 14 days (1st), + 30 days (2nd). The 3rd Not now becomes `dismissed`. Session lock on. |
| Dismiss (close icon) | `dismissed`, permanent for the instance. `sgDismissedSnack` with `actUndo`. Session lock on. `lastDismissAt = now`. |
| Shown on 3 different days with no interaction | Treated as one Not now (no session lock). |
| Trigger becomes false while active | Removed at the next Home build. If it is on screen, it stays until the session ends. |

### Frequency caps and cooldowns
- At most 1 suggestion visible.
- At most 1 new suggestion per day (re-showing the active one does not count).
- No suggestion for the rest of a session after Not now or dismiss.
- After a dismiss, no new suggestion until 2 days later (`lastDismissAt` day + 2).
- Type suppression: 2 dismissed instances of the same type within 90 days suppress that type for 90 days from the second dismiss.
- Undo on dismiss restores the instance to `active` and clears the session lock and `lastDismissAt`.

## 4. Transitions (motion tokens from tokens.md §8)
| Moment | Motion |
|---|---|
| Card present at the first Home build | No animation; it is part of the first layout |
| Card inserted while Home is on screen (Undo, or next suggestion) | Expand 240 ms easeOutCubic + fade in 150 ms |
| Accepted | Success content cross-fades in 150 ms, holds 1600 ms, then collapse |
| Collapse (accept, Not now, dismiss, Get started close or complete) | Height and opacity to 0 in 230 ms easeOutCubic; widgets below move up in the same 230 ms |
| Next suggestion after accept | Only if today's new allowance is unused (the accepted one was carried over from an earlier day): enters 600 ms after the collapse ends. Otherwise the slot stays empty until the next eligible session |
| Reduced motion | Every step is a 90 ms cross-fade |

## 5. Storage
- Isar `HomeSuggestionState`: `key`, `type`, `state` (candidate | active | snoozed | accepted | dismissed), `snoozeCount`, `snoozedUntil`, `firstShownAt`, `shownDays` (list of day stamps), `resolvedAt`.
- Prefs: `homeLayout` (now also `v3`), `homeV3.trackingChoices`, `homeV3.trackingAnswer`, `homeV3.smsAccountPromptHandled` (set of detected keys), `homeV3.smsAccountPromptLastSession`, `gsGraduatedAt`, `gsGraduationReason`, `gsFirstShownAt`, `sgLastNewShownDay`, `sgLastDismissAt`, `sgTypeSuppressedUntil.<type>`, `setting.homeGetStarted`, `setting.homeSuggestions`.
- In memory: `sessionLocked`, `sessionCardKey`.
- Trigger checks run on a background isolate after the first Home frame (same rule as stories: strictly after first paint), at most once per session, and again after an SMS scan finishes.

## 6. Welcome choices and suggestion order (V3-14, V3-18)

A welcome choice means the user already knows about that part of Kuber, so its suggestions wait behind the rest. They are not removed.

| Welcome choice | Suggestion types moved back |
|---|---|
| Daily spending | Budget (5), Quick Add voice (D2) |
| Loans and EMIs | Loans (1) |
| Investments and SIPs | Investments (4) |
| Money lent or borrowed | Lend and borrow (6) |
| Subscriptions | Recurring (3) |

- Example: choices Loans and EMIs + Subscriptions; candidates Loans, Recurring, Budget. Order: Budget, Loans, Recurring.
- A moved-back data type still comes before every discovery type.
- Choices are read at selection time, so an edit in Edit Home Widgets applies from the next session. Skipped means no change from v2 order.
- Triggers, thresholds, caps, cooldowns and the lifecycle are unchanged.

## 7. Accounts from SMS prompt (V3-16, V3-17)

New in v3. SMS import today never creates accounts: `AccountMatcher` (`lib/features/sms_import/engine/account_matcher.dart`) only matches a message to an existing account by suffix, learned sender, or bank name, and the batch sheet asks for a common account when there is no match. There is no flow to restyle, so this is a new one. It applies to the v3 cohort only.

### Detection (after every scan, on the scan isolate)
- Unit = one detected account: `bankKey` from the sender table (`sender_ids.dart`), `kind` = card when the sender or the matched pattern is a credit card one, else bank, and `last4` = `accountSuffix` when parsed.
- Key = `bankKey:kind:last4` (`last4` empty when not parsed). Rows with the same key merge.
- Drop a unit when it already has an account: `AccountMatcher.match` returns an account by suffix or name for any of its messages, or an enabled account of the same kind has the same `last4`.
- Drop units whose key is in `smsAccountPromptHandled`, units with an unknown sender, and units with fewer than 1 parsed transaction message.

### When it shows
- On the first Home build after the user leaves SMS import (scan, review or paste), if at least 1 unit is left. At most once per session (`smsAccountPromptLastSession`).
- Not shown while another sheet or dialog is open; it waits for the next Home build in the same session.
- 0 units, including "all already added": nothing is shown.

### Content (HV3.3)
| Units | Title | Rows |
|---|---|---|
| 1 | `accFoundOne` | 1 row, no checkbox. Button `accAdd` (count 1) |
| 2 or more, exactly 2 distinct banks | `accFoundTwo` with both short names | 1 row per unit, checkbox, all selected |
| 2 or more, 1 bank or 3 or more banks | `accFoundMany` with the unit count | Same |

- Row: category tile (bank or card), title = new account name (bank display name, or `accNameCard` for cards), subtitle `accRowBank` / `accRowCard` (or the `NoNum` variants).
- `accMoveNote`: count of already imported transactions that will move (see below), selected rows only. Hidden at 0.
- `accAdd` count = selected rows; disabled at 0. `sgNotNow` closes the sheet.

### Add
1. Create one account per selected unit: type bank or credit card, name as shown, `last4`, opening balance 0. This counts as **first data** (widget-inventory.md).
2. Write a learned sender mapping for each unit's senders, so later scans auto-match.
3. Re-run matching on staged (unreviewed) SMS from those senders.
4. Move already imported transactions that came from those senders AND sit in a seeded account the user never edited (Cash, Bank, Credit Card from `seededAccountIds`) to the new account (open-decisions 11).
5. Snackbar `accAddedSnack`. Then, for each new credit card in list order, the billing date sheet.

### Credit card billing date (follow-up)
- Title `sgCcTitle`, body `sgCcBody` (v2 strings), eyebrow `ccProgress` when 2 or more cards.
- Day grid 1 to 31. Prefilled when the statement day was parsed from SMS, with `ccFromSms` under it. Days 29 to 31 clamp to the month end, as the account editor does today.
- Save writes `billingCycleDay` and opens the next card. `ccSkip` moves to the next card without saving. System back = Skip for all remaining cards.

### Not now and Undo
- Not now: add every shown key to `smsAccountPromptHandled`. Those units are never offered again; they can still be added from Accounts. New units found later can prompt again (open-decisions 12).
- Deselected rows when Add is tapped: also added to `smsAccountPromptHandled`.
- No Undo on Add; the accounts can be deleted from Accounts as today.
