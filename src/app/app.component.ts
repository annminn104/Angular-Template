import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoggingService } from '@core/services/logging.service';
import packageInfo from '../../package.json';
import { BreadcrumbService } from '@services/breadcrumb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-template';

  constructor(private _title: Title, private _log: LoggingService, private _breadcrumb: BreadcrumbService, private _router: Router) {
    this._title.setTitle(this.title);
    this._breadcrumb.breadcrumb$.subscribe((breadcrumbs) => this._title.setTitle(breadcrumbs[breadcrumbs.length - 1]?.title));

    this._router.navigate = new Proxy(this._router.navigate, {
      apply(target, thisArg, argArray: Parameters<typeof _router.navigate>) {
        return target.apply(thisArg, argArray);
      },
    });
  }

  ngOnInit(): void {
    this._log.info(`Current Version: ${packageInfo.version}`);
  }
}
