import { IIconName } from './icons';

export interface IBreadcrumb {
  url: string;
  title: string;
  icon?: IIconName;
}
