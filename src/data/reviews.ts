/**
 * Real reviews for the Home "What people say" section. It renders nothing
 * while this list is empty. Add only real quotes, as written, with permission
 * (design open-decisions §11). No star ratings unless copied from the source.
 */
export interface Review {
  quote: string;
  name: string;
  /** e.g. "Google Play · March 2027" */
  source: string;
}

export const reviews: Review[] = [];
