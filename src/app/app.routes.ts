import { MnRoute } from '@mn-core/models';
import { RouteConstant } from '@app-core/constants';

import { NotFoundComponent } from './core/components';

/** routing configuration */
export const appRoutes: MnRoute[] = [
  // Home screen
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouteConstant.HASHTAG.path,
  },
  // Hashtag Screen
  {
    path: RouteConstant.HASHTAG.path,
    loadChildren: './hashtag/hashtag.module#HashtagModule',
  },
  // User Screen
  {
    path: RouteConstant.USER.path,
    loadChildren: './hashtag/hashtag.module#HashtagModule',
  },
  // Not Found
  {
    path: '**',
    component: NotFoundComponent
  }
];
