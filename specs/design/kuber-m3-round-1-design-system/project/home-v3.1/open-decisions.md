# Home v3.1 · open decisions

Each item has a proposed default; the specs follow the default.

1. **Optional "Take a tour" entry later.** Default: no. The Welcome flow stays 3 screens, and App Tutorial stays in More for anyone who wants it.
2. **"Just so you know" sheet after onboarding.** Default: removed. It adds a second card to day-1 Home next to Get started and points to something More already holds. Alternative: keep it, shown after the first Home session instead of the first launch.
3. **Replaying the Purpose animation.** Default: plays once per onboarding run; swiping back shows the rest frame. Alternative: replay every time the page becomes visible.
4. **Welcome coin animation loops.** The orbiting coin on page 1 repeats every 7 s forever (`..repeat()`). The no-loop rule is written for Purpose. Default: leave page 1 as it is (out of scope). Alternative: stop after one orbit to match Purpose.
5. **Language before Purpose.** Language is picked on Make it yours, after Purpose, so Welcome and Purpose show in the starting locale. Default: keep the order (Make it yours stays a single functional page). Alternative: a small language button on Welcome.
6. **v3 installs that picked Daily spending.** Default: drop the stored choice, keep any widgets it turned on, preselect nothing. Alternative: show Budgets preselected next time they open What you track.
7. **Demo SMS language.** Default: the demo SMS is translated like every other string (₹250 and XX1234 stay as they are). Alternative: keep it in English in every language, since most Indian bank SMS are in English.
8. **Upcoming Events line for 2 or more picks.** Default: one shared line (`evEmptyMany`) that names EMIs, SIPs, dues and renewals even if only two were picked. Alternative: one line per pair, which multiplies strings across languages.
9. **Language count** (carried from v2 and v3). The brief says 5 languages; the repo has 9 ARB files. Default: every `homeV31_` key goes into all 9.
10. **"Get started" in two places.** The Welcome button and the Home card share the words "Get started". Default: keep both (existing strings). Alternative: rename the Welcome button to Continue.
11. **Purpose headline.** Default: "Note every rupee. See where it goes." (7 words; one change from the brief's example, "See" instead of "Know", which reads more plainly and translates more directly). Alternative: the brief's "Note every rupee. Know where it goes."
