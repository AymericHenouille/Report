import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, first } from 'rxjs';
import { RepportInfo } from 'src/app/core/models/repport.model';
import { CreateRepportDialog } from '../../dialog/create-repport/create-repport.component';

@Component({
  selector: 'app-add-item',
  template: `<mat-card><mat-icon>add</mat-icon></mat-card>`,
  styleUrls: ['../board-item/board-item.component.scss']
})
export class AddItemComponent {

  @Output() public newRepport: EventEmitter<RepportInfo> = new EventEmitter<RepportInfo>();

  constructor(private matDialog: MatDialog) { }

  @HostListener('click')
  public addReport(): void {
    this.matDialog.open(CreateRepportDialog, {
      autoFocus: 'false',
    }).afterClosed().pipe(
      filter(result => !!result),
      first()
    ).subscribe(repport => this.newRepport.emit(repport));
  }

}
