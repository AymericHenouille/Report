import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Subscription, switchMap } from 'rxjs';
import { ReportInfo } from 'src/app/core/models/report.model';
import { ReportService } from 'src/app/core/services/report.service';

@Component({
  selector: 'app-report-panel',
  templateUrl: './report-panel.component.html',
  styleUrls: ['./report-panel.component.scss']
})
export class ReportPanelComponent implements OnInit, OnDestroy {

  public report!: ReportInfo;
  private _report!: Subscription;

  constructor(
    private router: ActivatedRoute,
    private reportService: ReportService
  ) { }

  public ngOnInit(): void {
    this._report = this.router.params.pipe(
      filter(params => !!params['id']),
      map(params => params['id']),
      switchMap(id => this.reportService.getReportById(id))
    ).subscribe(report => this.report = report);
  }

  public ngOnDestroy(): void {
    this._report.unsubscribe();
  }

}
