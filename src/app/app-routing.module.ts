import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './home/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      )
  },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import("./auth/auth.module").then(
  //       (m) => m.AuthModule
  //     )
  // },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
