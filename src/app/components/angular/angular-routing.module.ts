import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { AsyncValidatorComponent } from './async-validator/async-validator.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ComponentInteractionP2Component } from './component-interaction-p2/component-interaction-p2.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DependenceInjectionComponent } from './dependence-injection/dependence-injection.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { GuardsAndResolversPart1Component } from './guards-and-resolvers-part1/guards-and-resolvers-part1.component';
import { GuardsAndResolversPart2Component } from './guards-and-resolvers-part2/guards-and-resolvers-part2.component';
import { GuardsAndResolversPart3Component } from './guards-and-resolvers-part3/guards-and-resolvers-part3.component';
import { IntroDependenceInjectionComponent } from './intro-dependence-injection/intro-dependence-injection.component';
import { IntroRxjsObservableComponent } from './intro-rxjs-observable/intro-rxjs-observable.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { RouterPart2Component } from './router-part2/router-part2.component';
import { RouterComponent } from './router/router.component';
import { RxjsCombinationOperatorsComponent } from './rxjs-combination-operators/rxjs-combination-operators.component';
import { RxjsCreationOperatorsComponent } from './rxjs-creation-operators/rxjs-creation-operators.component';
import { RxjsErrorHandlingComponent } from './rxjs-error-handling/rxjs-error-handling.component';
import { RxjsFilteringOperatorsComponent } from './rxjs-filtering-operators/rxjs-filtering-operators.component';
import { RxjsHoosComponent } from './rxjs-hoos/rxjs-hoos.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDrivenForm2Component } from './template-driven-form2/template-driven-form2.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { TypescriptAdvTypeComponent } from './typescript-adv-type/typescript-adv-type.component';
import { TypescriptDataTypeComponent } from './typescript-data-type/typescript-data-type.component';
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
import { NgrxStoreInjectingReducersComponent } from './ngrx-store-injecting-reducers/ngrx-store-injecting-reducers.component';
import { NgrxStoreRuntimeChecksComponent } from './ngrx-store-runtime-checks/ngrx-store-runtime-checks.component';
import { NgrxStoreTestingComponent } from './ngrx-store-testing/ngrx-store-testing.component';
import { NgrxStoreActionGroupsComponent } from './ngrx-store-action-groups/ngrx-store-action-groups.component';
import { NgrxEffectsLifecycleComponent } from './ngrx-effects-lifecycle/ngrx-effects-lifecycle.component';
import { NgrxEffectsOperatorsComponent } from './ngrx-effects-operators/ngrx-effects-operators.component';
import { NgrxRouterStoreActionComponent } from './ngrx-router-store/ngrx-router-store-action/ngrx-router-store-action.component';
import { NgrxRouterStoreSelectorsComponent } from './ngrx-router-store/ngrx-router-store-selectors/ngrx-router-store-selectors.component';
import { NgrxRouterStoreConfigurationComponent } from './ngrx-router-store/ngrx-router-store-configuration/ngrx-router-store-configuration.component';

const angularRoutes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: 'data-binding',
        component: DataBindingComponent
      },
      {
        path: 'structure-directive',
        component: StructureDirectiveComponent
      },
      {
        path: 'attribute-directive',
        component: AttributeDirectiveComponent
      },
      {
        path: 'component-interaction-p1',
        component: ComponentInteractionComponent
      },
      {
        path: 'component-interaction-p2',
        component: ComponentInteractionP2Component
      },
      {
        path: 'template-variable',
        component: TemplateVariableComponent
      },
      {
        path: 'typescript-data-type',
        component: TypescriptDataTypeComponent
      },
      {
        path: 'typescript-adv-type',
        component: TypescriptAdvTypeComponent
      },
      {
        path: 'content-projection',
        component: ContentProjectionComponent
      },
      {
        path: 'ng-template',
        component: NgTemplateComponent
      },
      {
        path: 'intro-dependency-injection',
        component: IntroDependenceInjectionComponent
      },
      {
        path: 'dependency-injection',
        component: DependenceInjectionComponent
      },
      {
        path: 'content-child',
        component: ContentChildComponent
      },
      {
        path: 'pipe',
        component: PipeComponent
      },
      {
        path: 'intro-rxjs-observable',
        component: IntroRxjsObservableComponent
      },
      {
        path: 'rxjs-creation-operators',
        component: RxjsCreationOperatorsComponent
      },
      {
        path: 'transformation-operators',
        component: TransformationOperatorsComponent
      },
      {
        path: 'filtering-operators',
        component: RxjsFilteringOperatorsComponent
      },
      {
        path: 'combination-operators',
        component: RxjsCombinationOperatorsComponent
      },
      {
        path: 'error-handling',
        component: RxjsErrorHandlingComponent
      },
      {
        path: 'rxjs-hoos',
        component: RxjsHoosComponent
      },
      {
        path: 'rxjs-subject',
        component: RxjsSubjectComponent
      },
      {
        path: 'router',
        component: RouterComponent
      },
      {
        path: 'router-part2',
        component: RouterPart2Component
      },
      {
        path: 'lazy-load',
        component: LazyLoadComponent
      },
      {
        path: 'guards-and-resolvers-part1',
        component: GuardsAndResolversPart1Component
      },
      {
        path: 'guards-and-resolvers-part2',
        component: GuardsAndResolversPart2Component
      },
      {
        path: 'guards-and-resolvers-part3',
        component: GuardsAndResolversPart3Component
      },
      {
        path: 'template-driven-form-1',
        component: TemplateDrivenFormComponent
      },
      {
        path: 'template-driven-form-2',
        component: TemplateDrivenForm2Component
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent
      },
      {
        path: 'reactive-form-2',
        component: ReactiveForm2Component
      },
      {
        path: 'async-validator',
        component: AsyncValidatorComponent
      },
      {
        path: 'dynamic-component',
        component: DynamicComponentComponent
      },
      {
        path: 'ngrx-intro',
        component: NgrxIntroComponent
      },
      {
        path: 'ngrx-store',
        component: NgrxStoreComponent
      },
      {
        path: 'ngrx-store-get-start',
        component: NgrxStoreGetStartComponent
      },
      {
        path: 'ngrx-store-walkthrough',
        component: NgrxStoreWalkthroughComponent
      },
      {
        path: 'ngrx-store-intall',
        component: NgrxStoreIntallComponent
      },
      {
        path: 'ngrx-store-actions',
        component: NgrxStoreActionsComponent
      },
      {
        path: 'ngrx-store-reducers',
        component: NgrxStoreReducersComponent
      },
      {
        path: 'ngrx-store-selectors',
        component: NgrxStoreSelectorsComponent
      },
      {
        path: 'ngrx-store-meta-reducers',
        component: NgrxStoreMetaReducersComponent
      },
      {
        path: 'ngrx-store-feture-creators',
        component: NgrxStoreFetureCreatorsComponent
      },
      {
        path: 'ngrx-store-action-groups',
        component: NgrxStoreActionGroupsComponent
      },
      {
        path: 'ngrx-store-injecting-reducers',
        component: NgrxStoreInjectingReducersComponent
      },
      {
        path: 'ngrx-store-runtime-checks',
        component: NgrxStoreRuntimeChecksComponent
      },
      {
        path: 'ngrx-store-testing',
        component: NgrxStoreTestingComponent
      },
      {
        path: 'ngrx-effects-overview',
        component: NgrxEffectsComponent
      },
      {
        path: 'ngrx-effects-lifecycle',
        component: NgrxEffectsLifecycleComponent
      },
      {
        path: 'ngrx-effects-operators',
        component: NgrxEffectsOperatorsComponent
      },
      {
        path: 'ngrx-router-store-overview',
        component: NgrxRouterStoreComponent
      },
      {
        path: 'ngrx-router-store-actions',
        component: NgrxRouterStoreActionComponent
      },
      {
        path: 'ngrx-router-store-selectors',
        component: NgrxRouterStoreSelectorsComponent
      },
      {
        path: 'ngrx-router-store-configuration',
        component: NgrxRouterStoreConfigurationComponent
      }
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(angularRoutes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
