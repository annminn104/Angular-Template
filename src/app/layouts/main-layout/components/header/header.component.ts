import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  moduleTitle: string = '';
  user!: User | undefined;

  constructor(private _router: Router, private _auth: AuthService) {
    this._router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const root = this._router.routerState.snapshot.root;
      this.moduleTitle = this.getModuleTitle(root);
    });
  }

  ngOnInit(): void {
    this.user = this._auth.user;
  }

  getModuleTitle(route: ActivatedRouteSnapshot): string {
    if (route) {
      const titles = this.addModuleTitles(route, []);
      if (titles.length > 0) return titles[titles.length - 1];
    }
    return '';
  }

  addModuleTitles(route: ActivatedRouteSnapshot, titles: Array<string>): Array<string> {
    if (route.data['moduleTitle']) titles.push(route.data['moduleTitle']);

    if (route.firstChild) return this.addModuleTitles(route.firstChild, titles);

    return titles;
  }
}
