import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagIndexComponent } from './hashtag-index.component';

describe('HashtagIndexComponent', () => {
  let component: HashtagIndexComponent;
  let fixture: ComponentFixture<HashtagIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
