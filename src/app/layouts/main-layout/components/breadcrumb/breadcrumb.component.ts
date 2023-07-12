import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreadcrumb } from '@interfaces/breadcrumb';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';
import { BreadcrumbService } from '@services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<IBreadcrumb> = [];
  backUrl!: string;
  user!: User | undefined;

  constructor(private _breadcrumb: BreadcrumbService, private _router: Router, private _auth: AuthService, private _activatedRoute: ActivatedRoute) {
    this._breadcrumb.breadcrumb$.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
    this._activatedRoute.queryParams.subscribe((params: any) => {
      if (params?.backUrl) this.backUrl = params.backUrl;
    });
  }

  ngOnInit(): void {
    this.user = this._auth.user;
  }

  onBackToSetup() {
    this._router.navigate([this.backUrl]);
  }
}
