import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Observable, Subscription, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._auth.isAuthenticated().pipe(
      map(() => {
        if (this._auth.user) return true;
        else {
          let subscription: Subscription = this._router.events.subscribe((res: any) => {
            subscription.unsubscribe();
            const queryParams: any = {};

            if (res.url && res.url !== '/') {
              queryParams.redirectTo = `${res.urlAfterRedirects != res.url ? res.urlAfterRedirects : res.url}`;
            }

            this._router.navigate(['/auth', 'login'], { queryParams: queryParams });
          });
          return false;
        }
      })
    );
  }
}
