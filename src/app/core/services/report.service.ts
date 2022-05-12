import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { ReportInfo } from '../models/report.model';

/**
 * ReportService is a service that provides the data for the Report component.
 * It is used to store a ReportInfo Array to the storage.
 */
@Injectable()
export class ReportService {

  private reports$$: BehaviorSubject<ReportInfo[]> = new BehaviorSubject<ReportInfo[]>([]);

  constructor() {
    const report: ReportInfo[] = JSON.parse(localStorage.getItem('reports') ?? '[]');
    this.reports$$.next(report);
  }

  /**
   * Returns the ReportInfo Array.
   * The Array is updated when the ReportInfo is added or removed.
   * It contain all the user ReportInfo.
   *
   * @readonly
   * @type {Observable<ReportInfo[]>}
   * @memberof ReportService
   */
  public get reports$(): Observable<ReportInfo[]> {
    return this.reports$$.asObservable();
  }

  /**
   * Get the ReportInfo with the given id.
   * If the id is not found, returns an empty observable.
   * @param id The id of the ReportInfo to get.
   * @returns The ReportInfo with the given id.
   */
  public getReportById(id: string): Observable<ReportInfo> {
    return this.reports$.pipe(
      tap(reports => console.log(reports, id)),
      map(reports => reports.find(report => report.id == id)),
      filter(report => !!report)
    ) as Observable<ReportInfo>;
  }


  /**
   * Add a ReportInfo to the storage.
   * @param report The ReportInfo to add.
   * @returns A promise that resolves when the ReportInfo is added.
   */
  public addReport(report: ReportInfo): Promise<void> {
    const reports: ReportInfo[] = this.reports$$.getValue();
    reports.push(report);
    return this.updateReport(reports);
  }

  /**
   * Remove a ReportInfo from the storage.
   * @param report The ReportInfo to remove.
   * @returns A promise that resolves when the ReportInfo is removed.
   */
  public removeReport(report: ReportInfo): Promise<void> {
    const reports: ReportInfo[] = this.reports$$.getValue();
    reports.slice(reports.indexOf(report), 1);
    return this.updateReport(reports);
  }

  private updateReport(report: ReportInfo[]): Promise<void> {
    this.reports$$.next(report);
    localStorage.setItem('reports', JSON.stringify(report));
    return Promise.resolve();
  }

}
