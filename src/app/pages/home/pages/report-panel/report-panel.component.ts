import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Subscription, switchMap } from 'rxjs';
import { RepportInfo } from 'src/app/core/models/repport.model';
import { RepportService } from 'src/app/core/services/repport.service';

@Component({
  selector: 'app-report-panel',
  templateUrl: './report-panel.component.html',
  styleUrls: ['./report-panel.component.scss']
})
export class ReportPanelComponent implements OnInit, OnDestroy {

  public repport!: RepportInfo;
  private _repport!: Subscription;

  constructor(
    private router: ActivatedRoute,
    private repportService: RepportService
  ) { }

  public ngOnInit(): void {
    this._repport = this.router.params.pipe(
      filter(params => !!params['id']),
      map(params => params['id']),
      switchMap(id => this.repportService.getReportById(id))
    ).subscribe(repport => this.repport = repport);
  }

  public ngOnDestroy(): void {
    this._repport.unsubscribe();
  }

}
