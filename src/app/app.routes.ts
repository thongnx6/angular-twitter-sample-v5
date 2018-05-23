import { MnRoute } from '@mn-core/models';

import { RouteConstant } from '@app-core/constants';
// import { HashtagModule } from './hashtag/hashtag.module';

/** routing configuration */
export const appRoutes: MnRoute[] = [
  // Hashtag Screen
  {
    path: RouteConstant.HASHTAG.path,
    loadChildren: './hashtag/hashtag.module#HashtagModule',
    // loadChildren: () => HashtagModule,
  },
  // User Screen
];
