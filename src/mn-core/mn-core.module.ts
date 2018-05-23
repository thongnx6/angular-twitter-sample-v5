import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// services
import { MnHttpService } from './services';
// constants
import { MN_CONSTANT, IMnConstant, MnConstant } from './constants';

// CORE_PROVIDERS
const CORE_PROVIDERS = [
    // const
    {
        provide: MN_CONSTANT,
        useValue: MnConstant
    },
    // HttpInterceptor
    {
        provide: Http, useClass: MnHttpService, deps: [
            XHRBackend,
            RequestOptions
        ]
    },
];

/**
 * @desc
 * Only with AppModule import, do not import in other modules
 *
 * @export
 * @class MnCoreModule
 */
@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class MnCoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MnCoreModule,
            providers: [
                ...CORE_PROVIDERS
            ]
        };
    }
}
