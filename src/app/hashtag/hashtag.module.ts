import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '@app-shared/app-shared.module';

import { HashtagIndexComponent } from './index/hashtag-index.component';
import { HashtagSearchComponent } from './search/hashtag-search.component';


// routing
import { routing } from './hashtag.routing';
import { HashtagListComponent } from './list/hashtag-list.component';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    routing
  ],
  declarations: [HashtagIndexComponent, HashtagSearchComponent, HashtagListComponent]
})
export class HashtagModule { }
