import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RepportInfo } from 'src/app/core/models/repport.model';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent {

  @Input() public repport!: RepportInfo;

  constructor(private router: Router) { }

  @HostListener('click')
  public click(): void {
    this.router.navigate(['/home', 'board', this.repport?.id ?? 0]);
  }

}
