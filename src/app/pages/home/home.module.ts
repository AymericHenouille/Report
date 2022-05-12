import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddItemComponent } from './components/add-item/add-item.component';
import { BoardItemComponent } from './components/board-item/board-item.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { ReportComponent } from './components/report/report.component';
import { StatsComponent } from './components/stats/stats.component';
import { CreateReportDialog } from './dialog/create-report/create-report.component';
import { HomeRoutingModule } from './home-routing.module';
import { BoardComponent } from './pages/board/board.component';
import { ReportPanelComponent } from './pages/report-panel/report-panel.component';

@NgModule({
  declarations: [
    BoardItemComponent,
    AddItemComponent,
    ReportPanelComponent,
    CreateReportDialog,
    ReportComponent,
    StatsComponent,
    ParametersComponent,
    BoardComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class HomeModule { }
