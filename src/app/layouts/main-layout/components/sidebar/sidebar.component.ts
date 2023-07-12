import { Component } from '@angular/core';
import { SIDEBAR_MENU_MOCKS } from '@shared/mocks/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public sideBarMenu = SIDEBAR_MENU_MOCKS;
}
