import { NgModule } from '@angular/core';
import { AngularSharedFeatureModule } from './angular-shared-feature.module';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentInteractionP2Component } from './component-interaction-p2/component-interaction-p2.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ContentProjectionChildComponent } from './content-projection/content-projection-child/content-projection-child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DependenceInjectionComponent } from './dependence-injection/dependence-injection.component';
import { IntroDependenceInjectionComponent } from './intro-dependence-injection/intro-dependence-injection.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { PipeComponent } from './pipe/pipe.component';
import { ShowNameComponent } from './component-interaction/show-name/show-name.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { ToggleComponent } from './template-variable/toggle/toggle.component';
import { TypescriptAdvTypeComponent } from './typescript-adv-type/typescript-adv-type.component';
import { TypescriptDataTypeComponent } from './typescript-data-type/typescript-data-type.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

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
    DynamicComponentComponent,
  ],
  imports: [AngularSharedFeatureModule],
})
export class AngularCommonConceptsModule {}
