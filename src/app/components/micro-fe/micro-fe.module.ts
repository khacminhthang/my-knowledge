import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { IntroNxComponent } from './module-federation/intro-nx/intro-nx.component';
import { NxInstallationComponent } from './module-federation/nx-installation/nx-installation.component';
import { WhyNxComponent } from './module-federation/why-nx/why-nx.component';
import { NxEditorSetupComponent } from './module-federation/nx-editor-setup/nx-editor-setup.component';
import { MicroFrontendRoutingModule } from './micro-fe-routing.module';
import { MicroFeOverviewComponent } from './micro-fe-overview/micro-fe-overview.component';
import { ModuleFederationAndNxComponent } from './module-federation/module-federation-and-nx/module-federation-and-nx.component';
import { NxModuleFederationTechnicalOverviewComponent } from './module-federation/nx-module-federation-technical-overview/nx-module-federation-technical-overview.component';
import { FasterBuildsWithModuleFederationComponent } from './module-federation/faster-builds-with-module-federation/faster-builds-with-module-federation.component';
import { MicroFrontendArchitectureComponent } from './module-federation/micro-frontend-architecture/micro-frontend-architecture.component';
import { ManageLibraryVersionsWithModuleFederationComponent } from './module-federation/manage-library-versions-with-module-federation/manage-library-versions-with-module-federation.component';

@NgModule({
  declarations: [
    IntroNxComponent,
    NxInstallationComponent,
    WhyNxComponent,
    NxEditorSetupComponent,
    MicroFeOverviewComponent,
    ModuleFederationAndNxComponent,
    NxModuleFederationTechnicalOverviewComponent,
    FasterBuildsWithModuleFederationComponent,
    MicroFrontendArchitectureComponent,
    ManageLibraryVersionsWithModuleFederationComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    MicroFrontendRoutingModule
  ]
})
export class MicroFeModule { }
