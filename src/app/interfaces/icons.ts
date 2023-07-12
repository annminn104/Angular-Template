export type IIconName = 'ICON_DASHBOARD' | 'ICON_SETTING' | 'ICON_USER' | 'ICON_ANGLE_DOUBLE_LEFT' | 'ICON_LOADING';

export type IIconSize = '14x14' | '16x16' | '18x18' | '20x20' | '24x24' | '28x28' | '32x32' | '40x40';

export interface ISvgTemplate {}

export interface IIconObj {
  iconName: IIconName;
  size: IIconSize;
  position: 'before' | 'after';
}
