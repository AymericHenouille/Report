import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddItemComponent } from './components/add-item/add-item.component';
import { BoardItemComponent } from './components/board-item/board-item.component';
import { CreateRepportDialog } from './dialog/create-repport/create-repport.component';
import { HomeRoutingModule } from './home-routing.module';
import { BoardComponent } from './pages/board/board.component';
import { ReportPanelComponent } from './pages/report-panel/report-panel.component';

@NgModule({
  declarations: [
    BoardComponent,
    BoardItemComponent,
    AddItemComponent,
    ReportPanelComponent,
    CreateRepportDialog
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class HomeModule { }
