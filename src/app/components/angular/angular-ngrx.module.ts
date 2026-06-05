import { NgModule } from '@angular/core';
import { AngularSharedFeatureModule } from './angular-shared-feature.module';
import { NgrxIntroComponent } from './ngrx-intro/ngrx-intro.component';
import { NgrxStoreComponent } from './ngrx-store/ngrx-store.component';
import { NgrxEffectsComponent } from './ngrx-effects/ngrx-effects.component';
import { NgrxRouterStoreComponent } from './ngrx-router-store/ngrx-router-store.component';
import { NgrxEntityComponent } from './ngrx-entity/ngrx-entity.component';
import { NgrxComponentStoreComponent } from './ngrx-component-store/ngrx-component-store.component';
import { NgrxSignalsComponent } from './ngrx-signals/ngrx-signals.component';
import { NgrxOperatorsComponent } from './ngrx-operators/ngrx-operators.component';
import { NgrxStoreGetStartComponent } from './ngrx-store-get-start/ngrx-store-get-start.component';
import { NgrxStoreWalkthroughComponent } from './ngrx-store-walkthrough/ngrx-store-walkthrough.component';
import { NgrxStoreIntallComponent } from './ngrx-store-intall/ngrx-store-intall.component';
import { NgrxStoreActionsComponent } from './ngrx-store-actions/ngrx-store-actions.component';
import { NgrxStoreReducersComponent } from './ngrx-store-reducers/ngrx-store-reducers.component';
import { NgrxStoreSelectorsComponent } from './ngrx-store-selectors/ngrx-store-selectors.component';
import { NgrxStoreMetaReducersComponent } from './ngrx-store-meta-reducers/ngrx-store-meta-reducers.component';
import { NgrxStoreFetureCreatorsComponent } from './ngrx-store-feture-creators/ngrx-store-feture-creators.component';
import { NgrxStoreActionGroupsComponent } from './ngrx-store-action-groups/ngrx-store-action-groups.component';
import { NgrxStoreInjectingReducersComponent } from './ngrx-store-injecting-reducers/ngrx-store-injecting-reducers.component';
import { NgrxStoreRuntimeChecksComponent } from './ngrx-store-runtime-checks/ngrx-store-runtime-checks.component';
import { NgrxStoreTestingComponent } from './ngrx-store-testing/ngrx-store-testing.component';
import { NgrxEffectsLifecycleComponent } from './ngrx-effects-lifecycle/ngrx-effects-lifecycle.component';
import { NgrxEffectsOperatorsComponent } from './ngrx-effects-operators/ngrx-effects-operators.component';
import { NgrxRouterStoreActionComponent } from './ngrx-router-store/ngrx-router-store-action/ngrx-router-store-action.component';
import { NgrxRouterStoreSelectorsComponent } from './ngrx-router-store/ngrx-router-store-selectors/ngrx-router-store-selectors.component';
import { NgrxRouterStoreConfigurationComponent } from './ngrx-router-store/ngrx-router-store-configuration/ngrx-router-store-configuration.component';

@NgModule({
  declarations: [
    NgrxIntroComponent,
    NgrxStoreComponent,
    NgrxEffectsComponent,
    NgrxRouterStoreComponent,
    NgrxEntityComponent,
    NgrxComponentStoreComponent,
    NgrxSignalsComponent,
    NgrxOperatorsComponent,
    NgrxStoreGetStartComponent,
    NgrxStoreWalkthroughComponent,
    NgrxStoreIntallComponent,
    NgrxStoreActionsComponent,
    NgrxStoreReducersComponent,
    NgrxStoreSelectorsComponent,
    NgrxStoreMetaReducersComponent,
    NgrxStoreFetureCreatorsComponent,
    NgrxStoreActionGroupsComponent,
    NgrxStoreInjectingReducersComponent,
    NgrxStoreRuntimeChecksComponent,
    NgrxStoreTestingComponent,
    NgrxEffectsLifecycleComponent,
    NgrxEffectsOperatorsComponent,
    NgrxRouterStoreActionComponent,
    NgrxRouterStoreSelectorsComponent,
    NgrxRouterStoreConfigurationComponent,
  ],
  imports: [AngularSharedFeatureModule],
})
export class AngularNgrxModule {}
