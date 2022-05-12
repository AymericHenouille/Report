import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, first } from 'rxjs';
import { ReportInfo } from 'src/app/core/models/report.model';
import { CreateReportDialog } from '../../dialog/create-report/create-report.component';

@Component({
  selector: 'app-add-item',
  template: `<mat-card><mat-icon>add</mat-icon></mat-card>`,
  styleUrls: ['../board-item/board-item.component.scss']
})
export class AddItemComponent {

  @Output() public newReport: EventEmitter<ReportInfo> = new EventEmitter<ReportInfo>();

  constructor(private matDialog: MatDialog) { }

  @HostListener('click')
  public addReport(): void {
    this.matDialog.open(CreateReportDialog, {
      autoFocus: 'false',
    }).afterClosed().pipe(
      filter(result => !!result),
      first()
    ).subscribe(report => this.newReport.emit(report));
  }

}
