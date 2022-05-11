import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BoardComponent } from './pages/board/board.component';
import { ReportPanelComponent } from './pages/report-panel/report-panel.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'board', component: BoardComponent },
    { path: 'board/:id', component: ReportPanelComponent },
    { path: '', redirectTo: 'board', pathMatch: 'full' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
