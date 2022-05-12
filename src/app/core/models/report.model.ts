/**
 * Contain all the information inside a report.
 */
export interface Report {
  [key: string]: number | string | boolean | Report;
}

/**
 * Contain all the information about a report.
 */
export interface ReportInfo {
  id?: string;
  title?: string;
  emoji?: string;
  report?: Report;
}
