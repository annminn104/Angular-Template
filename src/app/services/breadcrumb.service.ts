import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { IBreadcrumb } from '@interfaces/breadcrumb';
import { Subject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  breadcrumbs: Array<IBreadcrumb> = [];
  breadcrumb$: Subject<Array<IBreadcrumb>> = new Subject();

  constructor(private _router: Router) {
    this._router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((res) => {
      const root = this._router.routerState.snapshot.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
      this.breadcrumb$.next(this.breadcrumbs);
    });
  }

  getBreadcrumbs(route: ActivatedRouteSnapshot, parentUrl: Array<string> = []): Array<IBreadcrumb> {
    let breadcrumbs: Array<IBreadcrumb> = [];

    if (route) {
      const routeUrl = this.getRouteUrl(route, parentUrl);
      const breadcrumb = this.createBreadcrumb(route, routeUrl);

      if (breadcrumb) breadcrumbs = [...breadcrumbs, breadcrumb];

      breadcrumbs = [...breadcrumbs, ...this.getBreadcrumbs(route.firstChild as ActivatedRouteSnapshot, routeUrl)];
    }

    return breadcrumbs.filter((bc) => bc.title);
  }

  getRouteUrl(route: ActivatedRouteSnapshot, parentUrl: Array<string>): Array<string> {
    return parentUrl.concat(route.url.map((url) => url.path));
  }

  createBreadcrumb(route: ActivatedRouteSnapshot, routeUrl: Array<string>): IBreadcrumb | null {
    const { title, icon } = route.data;

    return title ? { title, url: '/' + routeUrl.join('/'), icon: icon || 'ICON_DASHBOARD' } : null;
  }

  updateBreadcrumb(updatedBreadcrumb: IBreadcrumb) {
    const breadcrumbIndex = this.breadcrumbs.findIndex((breadcrumb) => breadcrumb.url === updatedBreadcrumb.url);

    if (breadcrumbIndex !== -1) {
      this.breadcrumbs[breadcrumbIndex] = updatedBreadcrumb;
      this.breadcrumb$.next(this.breadcrumbs);
    }
  }
}
