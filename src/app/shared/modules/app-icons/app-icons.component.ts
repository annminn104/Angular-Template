import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-app-icons',
  templateUrl: './app-icons.component.html',
  styleUrls: ['./app-icons.component.scss'],
})
export class AppIconsComponent implements OnInit {
  @Input() iconName: string = 'ICON_DASHBOARD';
  public template!: TemplateRef<any>;
  @ViewChild('ICON_DASHBOARD', { read: TemplateRef }) ICON_DASHBOARD!: TemplateRef<any>;
  @ViewChild('ICON_ADMIN', { read: TemplateRef }) ICON_ADMIN!: TemplateRef<any>;

  constructor(private _cdf: ChangeDetectorRef) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.template = (this as any)[`${this.iconName}`];
    this._cdf.detectChanges();
  }
}
