import { NgModule, Type } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';

const MODULES: Type<unknown>[] = [
  PagesRoutingModule
];

@NgModule({
  declarations: [HomeComponent],
  imports: [MODULES],
  exports: [MODULES]
})
export class PagesModule { }
