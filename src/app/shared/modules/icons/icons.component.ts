import { AfterViewInit, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { IIconSize, IIconName, ISvgTemplate } from '@interfaces/icons';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements AfterViewInit {
  @Input() size: IIconSize = '24x24';
  @Input() iconName: IIconName = 'ICON_DASHBOARD';

  public templateRef!: TemplateRef<ISvgTemplate>;
  private iconTemplates: { [key in IIconName]?: TemplateRef<ISvgTemplate> } = {};

  @ViewChild('ICON_DASHBOARD', { read: TemplateRef }) ICON_DASHBOARD!: TemplateRef<ISvgTemplate>;
  @ViewChild('ICON_SETTING', { read: TemplateRef }) ICON_SETTING!: TemplateRef<ISvgTemplate>;
  @ViewChild('ICON_USER', { read: TemplateRef }) ICON_USER!: TemplateRef<ISvgTemplate>;
  @ViewChild('ICON_ANGLE_DOUBLE_LEFT', { read: TemplateRef }) ICON_ANGLE_DOUBLE_LEFT!: TemplateRef<ISvgTemplate>;
  @ViewChild('ICON_LOADING', { read: TemplateRef }) ICON_LOADING!: TemplateRef<ISvgTemplate>;

  constructor(private _cdf: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.iconTemplates = {
      ICON_DASHBOARD: this.ICON_DASHBOARD,
      ICON_SETTING: this.ICON_SETTING,
      ICON_USER: this.ICON_USER,
      ICON_ANGLE_DOUBLE_LEFT: this.ICON_ANGLE_DOUBLE_LEFT,
      ICON_LOADING: this.ICON_LOADING,
    };

    const template = this.iconTemplates[this.iconName];
    if (template) this.templateRef = template;

    this._cdf.detectChanges();
  }
}
