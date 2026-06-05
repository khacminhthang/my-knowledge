import { Routes } from '@angular/router';
import { NgrxEffectsComponent } from '../ngrx-effects/ngrx-effects.component';
import { NgrxEffectsLifecycleComponent } from '../ngrx-effects-lifecycle/ngrx-effects-lifecycle.component';
import { NgrxEffectsOperatorsComponent } from '../ngrx-effects-operators/ngrx-effects-operators.component';
import { NgrxIntroComponent } from '../ngrx-intro/ngrx-intro.component';
import { NgrxRouterStoreComponent } from '../ngrx-router-store/ngrx-router-store.component';
import { NgrxRouterStoreActionComponent } from '../ngrx-router-store/ngrx-router-store-action/ngrx-router-store-action.component';
import { NgrxRouterStoreConfigurationComponent } from '../ngrx-router-store/ngrx-router-store-configuration/ngrx-router-store-configuration.component';
import { NgrxRouterStoreSelectorsComponent } from '../ngrx-router-store/ngrx-router-store-selectors/ngrx-router-store-selectors.component';
import { NgrxStoreActionGroupsComponent } from '../ngrx-store-action-groups/ngrx-store-action-groups.component';
import { NgrxStoreActionsComponent } from '../ngrx-store-actions/ngrx-store-actions.component';
import { NgrxStoreFetureCreatorsComponent } from '../ngrx-store-feture-creators/ngrx-store-feture-creators.component';
import { NgrxStoreGetStartComponent } from '../ngrx-store-get-start/ngrx-store-get-start.component';
import { NgrxStoreInjectingReducersComponent } from '../ngrx-store-injecting-reducers/ngrx-store-injecting-reducers.component';
import { NgrxStoreIntallComponent } from '../ngrx-store-intall/ngrx-store-intall.component';
import { NgrxStoreMetaReducersComponent } from '../ngrx-store-meta-reducers/ngrx-store-meta-reducers.component';
import { NgrxStoreReducersComponent } from '../ngrx-store-reducers/ngrx-store-reducers.component';
import { NgrxStoreRuntimeChecksComponent } from '../ngrx-store-runtime-checks/ngrx-store-runtime-checks.component';
import { NgrxStoreSelectorsComponent } from '../ngrx-store-selectors/ngrx-store-selectors.component';
import { NgrxStoreTestingComponent } from '../ngrx-store-testing/ngrx-store-testing.component';
import { NgrxStoreWalkthroughComponent } from '../ngrx-store-walkthrough/ngrx-store-walkthrough.component';
import { NgrxStoreComponent } from '../ngrx-store/ngrx-store.component';

export const NGRX_ROUTES: Routes = [
  { path: 'ngrx-intro', component: NgrxIntroComponent },
  { path: 'ngrx-store', component: NgrxStoreComponent },
  { path: 'ngrx-store-get-start', component: NgrxStoreGetStartComponent },
  { path: 'ngrx-store-walkthrough', component: NgrxStoreWalkthroughComponent },
  { path: 'ngrx-store-install', component: NgrxStoreIntallComponent },
  { path: 'ngrx-store-intall', redirectTo: 'ngrx-store-install', pathMatch: 'full' },
  { path: 'ngrx-store-actions', component: NgrxStoreActionsComponent },
  { path: 'ngrx-store-reducers', component: NgrxStoreReducersComponent },
  { path: 'ngrx-store-selectors', component: NgrxStoreSelectorsComponent },
  { path: 'ngrx-store-meta-reducers', component: NgrxStoreMetaReducersComponent },
  { path: 'ngrx-store-feature-creators', component: NgrxStoreFetureCreatorsComponent },
  { path: 'ngrx-store-feture-creators', redirectTo: 'ngrx-store-feature-creators', pathMatch: 'full' },
  { path: 'ngrx-store-action-groups', component: NgrxStoreActionGroupsComponent },
  { path: 'ngrx-store-injecting-reducers', component: NgrxStoreInjectingReducersComponent },
  { path: 'ngrx-store-runtime-checks', component: NgrxStoreRuntimeChecksComponent },
  { path: 'ngrx-store-testing', component: NgrxStoreTestingComponent },
  { path: 'ngrx-effects-overview', component: NgrxEffectsComponent },
  { path: 'ngrx-effects-lifecycle', component: NgrxEffectsLifecycleComponent },
  { path: 'ngrx-effects-operators', component: NgrxEffectsOperatorsComponent },
  { path: 'ngrx-router-store-overview', component: NgrxRouterStoreComponent },
  { path: 'ngrx-router-store-actions', component: NgrxRouterStoreActionComponent },
  { path: 'ngrx-router-store-selectors', component: NgrxRouterStoreSelectorsComponent },
  { path: 'ngrx-router-store-configuration', component: NgrxRouterStoreConfigurationComponent },
];
