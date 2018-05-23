import { InjectionToken } from '@angular/core';

// Creates a token that can be used in a DI Provider
export const MN_CONSTANT = new InjectionToken('mn.constant');

/**
 * @desc MnConstant interface
 * @export
 * @interface IMnConstant
 */
export interface IMnConstant {
    PROJECT_TITLE: string;
    API_BASE_URL: string;
}

/**
 * IMnConstant
 */
export const MnConstant: IMnConstant = {
    PROJECT_TITLE: 'Angular Twiiter',
    API_BASE_URL: '/'
};
