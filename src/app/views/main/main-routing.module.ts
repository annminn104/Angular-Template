import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProfilePage } from './pages/profile/profile.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    data: { title: 'Dashboard', icon: 'ICON_DASHBOARD' },
  },
  {
    path: 'profile',
    component: ProfilePage,
    data: { title: 'Profile', icon: 'ICON_USER' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
