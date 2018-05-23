import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AppSharedModule } from '@app-shared/app-shared.module';

import { HashtagIndexComponent } from './hashtag-index.component';
import { HashtagSearchComponent } from '../search/hashtag-search.component';
import { HashtagListComponent } from '../list/hashtag-list.component';
import { HashtagService } from '../../core/services'; // '@app-core/services';

describe('HashtagIndexComponent', () => {
  let component: HashtagIndexComponent;
  let fixture: ComponentFixture<HashtagIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppSharedModule.forRoot()],
      declarations: [HashtagSearchComponent, HashtagListComponent, HashtagIndexComponent],
      providers: [
        HashtagService,
        // { provide: Http, deps: [MockBackend] },
        // { provide: Http, useClass: Http },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
