import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { RepportInfo } from '../models/repport.model';

/**
 * RepportService is a service that provides the data for the Repport component.
 * It is used to store a RepportInfo Array to the storage.
 */
@Injectable()
export class RepportService {

  private repports$$: BehaviorSubject<RepportInfo[]> = new BehaviorSubject<RepportInfo[]>([]);

  constructor() {
    const repport: RepportInfo[] = JSON.parse(localStorage.getItem('repports') ?? '[]');
    this.repports$$.next(repport);
  }

  /**
   * Returns the RepportInfo Array.
   * The Array is updated when the RepportInfo is added or removed.
   * It contain all the user RepportInfo.
   *
   * @readonly
   * @type {Observable<RepportInfo[]>}
   * @memberof RepportService
   */
  public get repports$(): Observable<RepportInfo[]> {
    return this.repports$$.asObservable();
  }

  /**
   * Get the RepportInfo with the given id.
   * If the id is not found, returns an empty observable.
   * @param id The id of the RepportInfo to get.
   * @returns The RepportInfo with the given id.
   */
  public getReportById(id: string): Observable<RepportInfo> {
    return this.repports$.pipe(
      map(repports => repports.find(repport => repport.id === id)),
      filter(repport => !!repport)
    ) as Observable<RepportInfo>;
  }


  /**
   * Add a RepportInfo to the storage.
   * @param report The RepportInfo to add.
   * @returns A promise that resolves when the RepportInfo is added.
   */
  public addReport(report: RepportInfo): Promise<void> {
    const repports: RepportInfo[] = this.repports$$.getValue();
    repports.push(report);
    return this.updateRepport(repports);
  }

  /**
   * Remove a RepportInfo from the storage.
   * @param report The RepportInfo to remove.
   * @returns A promise that resolves when the RepportInfo is removed.
   */
  public removeReport(report: RepportInfo): Promise<void> {
    const repports: RepportInfo[] = this.repports$$.getValue();
    repports.slice(repports.indexOf(report), 1);
    return this.updateRepport(repports);
  }

  private updateRepport(repport: RepportInfo[]): Promise<void> {
    this.repports$$.next(repport);
    localStorage.setItem('repports', JSON.stringify(repport));
    return Promise.resolve();
  }

}
