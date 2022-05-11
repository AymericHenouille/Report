/**
 * Contain all the information inside a report.
 */
export interface Repport {
  [key: string]: number | string | boolean | Repport;
}

/**
 * Contain all the information about a report.
 */
export interface RepportInfo {
  id?: string;
  title?: string;
  emoji?: string;
  report?: Repport;
}
