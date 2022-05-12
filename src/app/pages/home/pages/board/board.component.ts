import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { popover } from 'src/app/core/animations';
import { ReportInfo } from 'src/app/core/models/report.model';
import { ReportService } from '../../../../core/services/report.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [ popover ]
})
export class BoardComponent implements OnInit, OnDestroy {

  public reports: ReportInfo[] = [];
  private _reports!: Subscription;

  constructor(private reportService: ReportService) { }

  public ngOnInit(): void {
    this._reports = this.reportService.reports$.subscribe(reports => this.reports = reports);
  }

  public ngOnDestroy(): void {
    this._reports.unsubscribe();
  }

  public addItem(report: ReportInfo): void {
    this.reportService.addReport(report);
  }

}
