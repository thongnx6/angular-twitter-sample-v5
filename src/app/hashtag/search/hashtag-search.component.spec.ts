import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagSearchComponent } from './hashtag-search.component';

describe('HashtagSearch.ComponentComponent', () => {
  let component: HashtagSearchComponent;
  let fixture: ComponentFixture<HashtagSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HashtagSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
