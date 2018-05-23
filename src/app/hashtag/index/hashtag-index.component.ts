import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { MnIndexAbstract } from '../../../blocks/abstracts';  // '@blocks/abstracts';
import { HashtagService } from '../../core/services'; // '@app-core/services';
import { Hashtag } from '../../core/models';

@Component({
  selector: 'app-hashtag-index',
  templateUrl: './hashtag-index.component.html',
  styleUrls: ['./hashtag-index.component.scss']
})
export class HashtagIndexComponent extends MnIndexAbstract implements OnInit, OnDestroy {

  //// IndexAbstract START //////////////////
  search$: BehaviorSubject<any>;
  items$: Subject<Hashtag[]>;
  defaultSearch = { wait: 0, pages_limit: 10, filter: '' };
  listRequested: boolean;
  isInitRequest: boolean;
  //// IndexAbstract END/////////////////////

  mockItem: Hashtag[];

  constructor(
    private hashtagService: HashtagService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.reFetchItems();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  fetchItems(params: any) {
    if (!this.mockItem) {
      this.listRequested = true;

      // Fetch hashtag list
      this.hashtagService.fetchHashtags(params)
        .do(() => this.listRequested = false)
        .subscribe((res) => {
          this.mockItem = res;
          this.items$.next(res);
        });

      // Run stream of search condition
      this.search$.next(params);
    } else {
      // Get the list of tweets by matching with a hashtag provided from input in Hashtag
      // search form. Matching method should be Exact match
      this.items$.next(this.mockItem.filter(self => !params.filter ? self : self.hashtags.includes(`#${params.filter}`)));
    }

  }
}
