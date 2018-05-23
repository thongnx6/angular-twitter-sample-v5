import { RouterModule } from '@angular/router';
import { MnRoute } from '@mn-core/models';
import { RouteConstant } from '@app-core/constants';

import { HashtagIndexComponent } from './index/hashtag-index.component';

/**
 * Hashtag routing
 */
const routes: MnRoute[] = [
    // index page
    {
        path: RouteConstant.COMMON.INDEX.path,
        component: HashtagIndexComponent,
        data: RouteConstant.HASHTAG.data,
    },
    // // TODO: detail page
    // {
    //     path: RouteConstant.COMMON.DETAIL.path + "/:id",
    //     component: DetailComponent,
    //     data: RouteConstant.USERS.data
    // }
];

export const routing = RouterModule.forChild(routes);
