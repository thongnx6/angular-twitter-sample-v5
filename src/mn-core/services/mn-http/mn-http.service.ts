import { Inject, Injector, Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { environment } from '../../../environments/environment';

/**
 * @classdesc Http's interceptor
 * @export
 * @class MnHttpService
 * @extends {Http}
 */
@Injectable()
export class MnHttpService extends Http {

    private base_url: string;

    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions,
    ) {
        super(backend, defaultOptions);
        this.base_url = `/api/`;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs) {
        return super.get(this.parseUrl(url), options)
            .catch((response) => this.handleResponseCatch(response))
            .do((response) => this.handleResponseSuccess(response));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(this.parseUrl(url), body, options)
            .catch((response) => this.handleResponseCatch(response))
            .do((response) => this.handleResponseSuccess(response));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(this.parseUrl(url), body, options)
            .catch((response) => this.handleResponseCatch(response))
            .do((response) => this.handleResponseSuccess(response));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(this.parseUrl(url), options)
            .catch((response) => this.handleResponseCatch(response))
            .do((response) => this.handleResponseSuccess(response));
    }

    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.patch(this.parseUrl(url), body, options)
            .catch((response) => this.handleResponseCatch(response))
            .do((response) => this.handleResponseSuccess(response));
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.head(this.parseUrl(url), options)
            .catch((response) => this.handleResponseCatch(response))
            .do((response) => this.handleResponseSuccess(response));
    }


    /**
     * Interrupt handling when XHR fails
     */
    private handleResponseCatch(response: Response): Observable<any> {

        const responseJson = response.json();
        console.log('handleResponseCatch', this, responseJson);

        // Display when message is returned
        const { message } = responseJson;
        if (message && response.status !== 401) { // auth
            // TODO: show toast or any thing make correct business better
            console.warn(message);
        }

        // statusCodeでの分岐処理
        if (response.status === 401) { // without auth
            // TODO: show toast or any thing make correct business better
            console.warn(message);
        } else if (response.status === 500) {
            // do something
        }

        return Observable.throw(response);
    }

    /**
     * Interrupt handling when acquiring XHR response
     */
    private handleResponseSuccess(response: Response): Response {

        const responseJson = response.json();
        const { message, result } = responseJson;

        // TODO: show toast or any thing make correct business better

        return response;
    }

    /**
     * Convert and parse URL
     */
    parseUrl(url: string) {
        return this.base_url + url;
    }
}
