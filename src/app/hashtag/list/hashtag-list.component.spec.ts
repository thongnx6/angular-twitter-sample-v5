import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagingSmartPipe, DisplayMaxLengthPipe } from '../../shared/pipes';
import { AppSharedModule } from '@app-shared/app-shared.module';
import { HashtagListComponent } from './hashtag-list.component';

describe('HashtagListComponent', () => {
  let component: HashtagListComponent;
  let fixture: ComponentFixture<HashtagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppSharedModule.forRoot()],
      declarations: [HashtagListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(1).toEqual(1);
  });
});
