import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { MnRouteData } from '@mn-core/models';

import { MnIndexAbstract } from '../../../blocks/abstracts';  // '@blocks/abstracts';
import { HashtagService } from '../../core/services'; // '@app-core/services';
import { UserService } from '../../core/services'; // '@app-core/services';
import { Hashtag } from '../../core/models';
import { ROUTES_CONSTANT, IRoutePaths } from '../../core/constants';

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
  pageRoutesData: MnRouteData;
  currentServices: any;

  constructor(
    private hashtagService: HashtagService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    @Inject(ROUTES_CONSTANT) private ROUTES_CONSTANT: IRoutePaths,
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    const { snapshot } = this.activatedRoute;
    if (snapshot['_routerState'].url === `/${this.ROUTES_CONSTANT.HASHTAG.path}`) {
      this.pageRoutesData = this.ROUTES_CONSTANT.HASHTAG.data;
      this.currentServices = this.hashtagService;
    } else {
      this.pageRoutesData = this.ROUTES_CONSTANT.USER.data;
      this.currentServices = this.userService;
    }

    this.reFetchItems();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  fetchItems(params: any) {
    if (!this.mockItem) {
      this.listRequested = true;

      // Fetch hashtag list
      this.currentServices.fetchItems(params)
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
