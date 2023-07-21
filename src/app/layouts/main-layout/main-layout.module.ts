import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserAccessoriesComponent } from './components/user-accessories/user-accessories.component';
import { SharedModule } from '@shared/modules/shared.module';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent, BreadcrumbComponent, SidebarComponent, UserAccessoriesComponent],
  imports: [CommonModule, MainLayoutRoutingModule, SharedModule],
})
export class MainLayoutModule {}
