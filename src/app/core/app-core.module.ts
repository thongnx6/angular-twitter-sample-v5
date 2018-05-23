import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// constants
import { RouteConstant, ROUTES_CONSTANT } from './constants';

// services
import { HashtagService, UserService } from './services';
import { NotFoundComponent } from './components/not-found/not-found.component';

// CORE_PROVIDERS
const CORE_PROVIDERS = [
  // Routing constant
  {
    provide: ROUTES_CONSTANT,
    useValue: RouteConstant
  },
  HashtagService,
  UserService
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent]
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
