import { IIconName } from '@interfaces/icons';

interface SidebarMenuItem {
  title: string;
  icon: IIconName;
  slug: string;
}

export const SIDEBAR_MENU_MOCKS: Array<SidebarMenuItem> = [
  { title: 'Dashboard', icon: 'ICON_DASHBOARD', slug: '' },
  { title: 'Profile', icon: 'ICON_USER', slug: 'profile' },
];
