import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RepportInfo } from 'src/app/core/models/repport.model';
import { RepportService } from '../../../../core/services/repport.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [
    trigger('popover', [
      transition(':enter', query(':enter, app-add-item', [
        style({ transform: 'scale(0) translateY(100%) rotate(45deg)' }),
        stagger(200, animate('0.5s ease-in-out'))
      ])),
      transition(':increment', query(':enter', [
        style({ transform: 'scale(0) translateY(100%) rotate(45deg)' }),
        stagger(200, animate('0.5s ease-in-out'))
      ])),
      transition(':leave, :decrement', query(':leave', [
        animate('0.5s ease-in-out', style({ transform: 'scale(0) rotate(45deg)' }))
      ]))
    ])
  ]
})
export class BoardComponent implements OnInit, OnDestroy {

  public repports: RepportInfo[] = [];
  private _reports!: Subscription;

  constructor(private repportService: RepportService) { }

  public ngOnInit(): void {
    this._reports = this.repportService.repports$.subscribe(repports => this.repports = repports);
  }

  public ngOnDestroy(): void {
    this._reports.unsubscribe();
  }

  public addItem(repport: RepportInfo): void {
    this.repportService.addReport(repport);
  }

}
