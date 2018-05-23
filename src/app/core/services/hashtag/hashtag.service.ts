import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, URLSearchParams, Response, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';

import { Hashtag } from '../../models';

@Injectable()
export class HashtagService {

  private get resource(): string {
    const _resource = 'hashtags/Python';
    return _resource;
  }

  constructor(
    private http: Http
  ) { }

  fetchHashtags(search): Observable<Array<Hashtag>> {
    const params = this.parseParams(search);
    return this.http.get(this.resource, { search: params })
      .map(this.mapHashtag.bind(this));
  }

  /** Map data */
  private mapHashtag(response) {
    return response.json();
  }

  parseParams(search: any): URLSearchParams {
    const params = new URLSearchParams();
    for (const key in search) {
      params.set(key, search[key]);
    }
    return params;
  }
}
