import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProfilePage } from './pages/profile/profile.page';

@NgModule({
  declarations: [DashboardPage, ProfilePage],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
