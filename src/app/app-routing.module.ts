import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { NonAuthGuard } from '@core/guards/non-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@layouts/auth-layout/auth-layout.module').then((m) => m.AuthLayoutModule),
    canActivate: [NonAuthGuard],
  },
  {
    path: '',
    loadChildren: () => import('@layouts/main-layout/main-layout.module').then((m) => m.MainLayoutModule),
    // canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
