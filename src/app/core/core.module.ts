import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepportService } from './services/repport.service';

/**
 * Shared modules list.
 */
const MODULES: Type<unknown>[] = [
  BrowserModule,
  BrowserAnimationsModule
]

/**
 * Core Module - Contains all main modules, components and services of the app.
 */
@NgModule({
  imports: [MODULES],
  exports: [MODULES],
  providers: [
    RepportService
  ]
})
export class CoreModule { }
