import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { catchError, filter, Observable, switchMap, take, throwError, Subject } from 'rxjs';
import { INTERCEPTOR_CONFIG } from '@core/tokens/interceptor';
import { IInterceptorConfig, IRefreshTokenInterceptorConfig } from '@core/interfaces/interceptor';
import { JwtService } from '@core/services/jwt.service';
import { AuthService } from '@services/auth.service';
import { IRefreshToken } from '@interfaces/auth';
const DEFAULT_CONFIG: IRefreshTokenInterceptorConfig = {
  enable: true,
  retry: 0,
};

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  isRefreshing: boolean = false;
  refreshTokenSubject: Subject<any> = new Subject();
  config: IRefreshTokenInterceptorConfig;
  constructor(@Inject(INTERCEPTOR_CONFIG) private interceptorConfig: IInterceptorConfig, private _jwt: JwtService, private _auth: AuthService) {
    this.config = { ...DEFAULT_CONFIG, ...interceptorConfig.refreshTokenInterceptor };
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      filter((e) => e instanceof HttpResponse),
      catchError((error: any) => {
        if (this.config.enable) {
          if ([401].indexOf(error.status) > -1) {
            if (this._jwt.refreshToken) {
              if (!this.isRefreshing) {
                const data: IRefreshToken = {
                  refreshToken: this._jwt.refreshToken,
                };
                return this._auth.refreshToken(data).pipe(
                  switchMap(() => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(true);
                    return next.handle(request.clone({ headers: request.headers.set('Authorization', this._jwt.accessTokenWithPrefix) }));
                  })
                );
              } else {
                return this.refreshTokenSubject.pipe(
                  filter((val) => val),
                  take(1),
                  switchMap(() => {
                    return next.handle(request.clone({ headers: request.headers.set('Authorization', this._jwt.accessTokenWithPrefix) }));
                  })
                );
              }
            }
          }
        }
        return throwError(() => error);
      })
    );
  }
}
