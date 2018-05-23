import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// constants
import { RouteConstant, ROUTES_CONSTANT } from './constants';

// services
import { HashtagService } from './services';

// CORE_PROVIDERS
const CORE_PROVIDERS = [
  // Routing constant
  {
    provide: ROUTES_CONSTANT,
    useValue: RouteConstant
  },
  HashtagService
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCoreModule,
      providers: [
        ...CORE_PROVIDERS
      ]
    };
  }
}
