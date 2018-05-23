import { InjectionToken } from '@angular/core';
import { Routes } from '@angular/router';
import { MnRoute } from '@mn-core/models';

// Creates a token that can be used in a DI Provider
export let ROUTES_CONSTANT = new InjectionToken('routes.constant');

/**
 * @desc Routing path interface
 * @export
 * @interface IRoutePaths
 */
export interface IRoutePaths {
    /** Common path */
    COMMON: {
        INDEX: MnRoute,
        DETAIL: MnRoute
    };
    /** HASHTAG Screen */
    HASHTAG: MnRoute;
}

/**
 * Routing constant
 */
export const RouteConstant: IRoutePaths = {
    COMMON: {
        INDEX: {
            path: '',
            data: {
                title: '',
                icon: '',
            }
        },
        DETAIL: {
            path: 'detail',
            data: {
                title: '',
                icon: '',
            }
        },
    },
    HASHTAG: {
        path: '',
        data: {
            title: 'HashTag',
            icon: 'home',
        }
    },
};
