import { NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

/**
 * Shared modules list.
 */
const MODULES: Type<unknown>[] = [
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatTabsModule
];

/**
 * Setup material modules.
 */
@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialMopdule { }
