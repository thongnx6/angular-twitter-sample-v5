import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// bootstrap
import {
  PaginationModule
} from 'ngx-bootstrap';


// pipes
import {
  DisplayMaxLengthPipe,
  FormatDatePipe,
  TimesFilterPipe,
  PagingSmartPipe
} from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    DisplayMaxLengthPipe,
    FormatDatePipe,
    TimesFilterPipe,
    PagingSmartPipe
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DisplayMaxLengthPipe,
    FormatDatePipe,
    TimesFilterPipe,
    PagingSmartPipe
  ]
})
export class AppSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppSharedModule,
      providers: [
        // Initial option setting
      ]
    };
  }
}
