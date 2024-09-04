import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentInteractionP2Component } from './component-interaction-p2/component-interaction-p2.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ContentProjectionChildComponent } from './content-projection/content-projection-child/content-projection-child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DependenceInjectionComponent } from './dependence-injection/dependence-injection.component';
import { IntroDependenceInjectionComponent } from './intro-dependence-injection/intro-dependence-injection.component';
import { IntroRxjsObservableComponent } from './intro-rxjs-observable/intro-rxjs-observable.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { PipeComponent } from './pipe/pipe.component';
import { RxjsCombinationOperatorsComponent } from './rxjs-combination-operators/rxjs-combination-operators.component';
import { RxjsCreationOperatorsComponent } from './rxjs-creation-operators/rxjs-creation-operators.component';
import { RxjsErrorHandlingComponent } from './rxjs-error-handling/rxjs-error-handling.component';
import { RxjsFilteringOperatorsComponent } from './rxjs-filtering-operators/rxjs-filtering-operators.component';
import { ShowNameComponent } from './component-interaction/show-name/show-name.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { ToggleComponent } from './template-variable/toggle/toggle.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { TypescriptAdvTypeComponent } from './typescript-adv-type/typescript-adv-type.component';
import { TypescriptDataTypeComponent } from './typescript-data-type/typescript-data-type.component';
import { MaterialModule } from 'src/app/material.module';
import { AngularRoutingModule } from './angular-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FragmentsModule } from 'src/app/layout/fragments/fragments.module';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { RxjsHoosComponent } from './rxjs-hoos/rxjs-hoos.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';
import { RouterComponent } from './router/router.component';
import { RouterPart2Component } from './router-part2/router-part2.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import { GuardsAndResolversPart1Component } from './guards-and-resolvers-part1/guards-and-resolvers-part1.component';
import { GuardsAndResolversPart2Component } from './guards-and-resolvers-part2/guards-and-resolvers-part2.component';
import { GuardsAndResolversPart3Component } from './guards-and-resolvers-part3/guards-and-resolvers-part3.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDrivenForm2Component } from './template-driven-form2/template-driven-form2.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { AsyncValidatorComponent } from './async-validator/async-validator.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { ShareModule } from '../share/share.module';
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

@NgModule({
  declarations: [
    DataBindingComponent,
    StructureDirectiveComponent,
    AttributeDirectiveComponent,
    ComponentInteractionComponent,
    ShowNameComponent,
    ComponentInteractionP2Component,
    ContentProjectionChildComponent,
    TemplateVariableComponent,
    ToggleComponent,
    TypescriptDataTypeComponent,
    TypescriptAdvTypeComponent,
    ContentProjectionComponent,
    NgTemplateComponent,
    IntroDependenceInjectionComponent,
    DependenceInjectionComponent,
    ContentChildComponent,
    PipeComponent,
    IntroRxjsObservableComponent,
    RxjsCreationOperatorsComponent,
    TransformationOperatorsComponent,
    RxjsFilteringOperatorsComponent,
    RxjsCombinationOperatorsComponent,
    RxjsErrorHandlingComponent,
    RxjsHoosComponent,
    RxjsSubjectComponent,
    RouterComponent,
    RouterPart2Component,
    LazyLoadComponent,
    GuardsAndResolversPart1Component,
    GuardsAndResolversPart2Component,
    GuardsAndResolversPart3Component,
    TemplateDrivenFormComponent,
    TemplateDrivenForm2Component,
    ReactiveFormComponent,
    ReactiveForm2Component,
    AsyncValidatorComponent,
    DynamicComponentComponent,
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
    NgrxEffectsOperatorsComponent
  ],
  entryComponents: [
    ToggleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularRoutingModule,
    FragmentsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class AngularModule { }
