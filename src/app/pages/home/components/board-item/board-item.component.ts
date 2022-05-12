import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReportInfo } from 'src/app/core/models/report.model';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent {

  @Input() public report!: ReportInfo;

  constructor(private router: Router) { }

  @HostListener('click')
  public click(): void {
    this.router.navigate(['/home', 'board', this.report?.id ?? 0]);
  }

}
