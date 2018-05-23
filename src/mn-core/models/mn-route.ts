import { Route } from '@angular/router';

/**
 * @desc Routing interface
 * @export
 * @interface MnRoute
 * @extends {Route}
 */
export interface MnRoute extends Route {
    path: string;
    data?: MnRouteData;
}


/**
 * @desc Routing data interface
 * @export
 * @interface MnRouteData
 */
export interface MnRouteData {
    // Page name to be displayed on the screen
    title?: string;
    // Page icon
    icon?: string;
    // Parameters of config to be acquired before screen display
    configResolveParam?: string;
}
