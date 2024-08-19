import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/layout/fragments/main-shell/main-shell.component';
import { NxEditorSetupComponent } from './module-federation/nx-editor-setup/nx-editor-setup.component';
import { NxInstallationComponent } from './module-federation/nx-installation/nx-installation.component';
import { WhyNxComponent } from './module-federation/why-nx/why-nx.component';
import { IntroNxComponent } from './module-federation/intro-nx/intro-nx.component';
import { MicroFeOverviewComponent } from './micro-fe-overview/micro-fe-overview.component';
import { ModuleFederationAndNxComponent } from './module-federation/module-federation-and-nx/module-federation-and-nx.component';
import { NxModuleFederationTechnicalOverviewComponent } from './module-federation/nx-module-federation-technical-overview/nx-module-federation-technical-overview.component';
import { FasterBuildsWithModuleFederationComponent } from './module-federation/faster-builds-with-module-federation/faster-builds-with-module-federation.component';
import { MicroFrontendArchitectureComponent } from './module-federation/micro-frontend-architecture/micro-frontend-architecture.component';
import { ManageLibraryVersionsWithModuleFederationComponent } from './module-federation/manage-library-versions-with-module-federation/manage-library-versions-with-module-federation.component';

const microFrontendRoutes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: 'micro-fe-overview',
        component: MicroFeOverviewComponent
      },
      {
        path: 'nx-intro',
        component: IntroNxComponent
      },
      {
        path: 'nx-editor-setup',
        component: NxEditorSetupComponent
      },
      {
        path: 'nx-installation',
        component: NxInstallationComponent
      },
      {
        path: 'why-nx',
        component: WhyNxComponent
      },
      {
        path: 'module-federation-and-nx',
        component: ModuleFederationAndNxComponent
      },
      {
        path: 'nx-module-federation-technical-overview',
        component: NxModuleFederationTechnicalOverviewComponent
      },
      {
        path: 'faster-builds-with-module-federation',
        component: FasterBuildsWithModuleFederationComponent
      },
      {
        path: 'micro-frontend-architecture',
        component: MicroFrontendArchitectureComponent
      },
      {
        path: 'manage-library-versions-with-module-federation',
        component: ManageLibraryVersionsWithModuleFederationComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(microFrontendRoutes)],
  exports: [RouterModule]
})
export class MicroFrontendRoutingModule { }
