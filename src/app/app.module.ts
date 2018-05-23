/// <reference path="../typings.d.ts" />

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MnCoreModule } from '@mn-core/mn-core.module';
import { AppCoreModule } from '@app-core/app-core.module';
import { AppSharedModule } from '@app-shared/app-shared.module';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MnCoreModule.forRoot(),
    AppSharedModule.forRoot(),
    AppCoreModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
