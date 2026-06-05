import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/angular",
  },
  {
    path: 'angular',
    data: { menuKey: 'angular' },
    loadChildren: () =>
      import("src/app/components/angular/angular.module").then((m) => m.AngularModule),
  },
  {
    path: 'csharp',
    data: { menuKey: 'csharp' },
    loadChildren: () =>
      import("src/app/components/csharp/csharp.module").then((m) => m.CsharpModule),
  },
  {
    path: 'dotnetcore',
    data: { menuKey: 'dotnetcore' },
    loadChildren: () =>
      import("src/app/components/aspdotnet/aspdotnet.module").then((m) => m.AspdotnetModule),
  },
  {
    path: 'efcore',
    data: { menuKey: 'efcore' },
    loadChildren: () =>
      import("src/app/components/efcore/efcore.module").then((m) => m.EFCoreModule),
  },
  {
    path: 'message-broker',
    data: { menuKey: 'message-broker' },
    loadChildren: () =>
      import("src/app/components/message-broker/message-broker.module").then((m) => m.MessageBrokerModule),
  },
  {
    path: 'micro-fe',
    data: { menuKey: 'micro-fe' },
    loadChildren: () =>
      import("src/app/components/micro-fe/micro-fe.module").then((m) => m.MicroFeModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
