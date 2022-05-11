import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { MaterialMopdule } from './material/material.module';

/**
 * Shared modules list.
 */
const MODULES: Type<unknown>[] = [
  CommonModule,
  MaterialMopdule,
  EmojiModule,
  PickerModule
];

/**
 * Shared Module.
 *
 * All resources used on each other components and modules of the app.
 */
@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class SharedModule { }
