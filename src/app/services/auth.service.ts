import { Injectable } from '@angular/core';
import { IWithAuth } from '@core/interfaces/service';
import { ApiService } from '@core/services/api.service';
import { JwtService } from '@core/services/jwt.service';
import { AUTH_ENDPOINT } from '@enums/auth';
import { IHttpResponse } from '@interfaces/api';
import { ILoginRequest, ILoginResponse, ILogoutResponse, IRefreshToken, IRegisterRequest, IRegisterResponse, ITokenResponse } from '@interfaces/auth';
import { IUser } from '@interfaces/user';
import { User } from '@models/user';

import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IWithAuth {
  constructor(private _api: ApiService, private _jwt: JwtService) {}
  user: User | undefined;
  isLogged: boolean = false;
  onLogin: BehaviorSubject<any> = new BehaviorSubject(false);
  onLogout: BehaviorSubject<any> = new BehaviorSubject(false);
  onUpdatedProfile: BehaviorSubject<any> = new BehaviorSubject(false);

  isAuthenticated(): Observable<boolean> {
    return new Observable((observer) => {
      if (this.isLogged) {
        observer.next(true);
        observer.complete();
      } else {
        if (this._jwt.accessToken) {
          this.profile()
            .subscribe({
              next: () => observer.next(true),
              error: () => {
                this._jwt.clearAll();
                observer.next(false);
              },
            })
            .add(() => observer.complete());
        } else {
          observer.next(false);
          observer.complete();
        }
      }
    });
  }

  refreshToken(data: IRefreshToken): Observable<ITokenResponse> {
    return this._api.post<IHttpResponse<ITokenResponse>>(AUTH_ENDPOINT.REFRESH_TOKEN, data).pipe(
      map((data: any) => {
        const tokenData = {
          accessToken: data?.accessToken,
          accessTokenExpired: data?.accessTokenExpired,
          refreshToken: data?.refreshToken,
        };
        this._jwt.setJwtData(tokenData);
        return data;
      })
    );
  }

  login(data: ILoginRequest): Observable<ILoginResponse> {
    return this._api.post<ILoginResponse>(AUTH_ENDPOINT.LOGIN, data).pipe(
      map((data: any) => {
        const tokenData = {
          accessToken: data?.accessToken,
          accessTokenExpired: data?.accessTokenExpired,
          refreshToken: data?.refreshToken,
        };
        this._jwt.setJwtData(tokenData);
        this.onLogin.next(true);
        return data;
      }),
      catchError((error) => throwError(() => error))
    );
  }

  logout(): Observable<ILogoutResponse> {
    return this._api.get<ILogoutResponse>(AUTH_ENDPOINT.LOGOUT).pipe(
      map((data) => {
        this._jwt.removeAccessToken();
        this._jwt.removeRefreshToken();
        return data;
      }),
      catchError((error) => throwError(() => error))
    );
  }

  register(data: IRegisterRequest): Observable<IRegisterResponse> {
    return this._api.post<IRegisterResponse>(AUTH_ENDPOINT.REGISTER, data).pipe(
      map((data) => data),
      catchError((error) => throwError(() => error))
    );
  }

  profile(): Observable<IUser> {
    return this._api.get<IUser>(AUTH_ENDPOINT.PROFILE).pipe(
      map((data) => {
        if (data) {
          this.user = new User(data);
          this.isLogged = true;
        }
        return data;
      })
    );
  }

  forgotPassword(data: unknown): Observable<unknown> {
    throw new Error('Method not implemented.');
  }

  resetPassword(data: unknown): Observable<unknown> {
    throw new Error('Method not implemented.');
  }

  changePassword(data: unknown): Observable<unknown> {
    throw new Error('Method not implemented.');
  }

  verifyEmail(data: unknown): Observable<unknown> {
    throw new Error('Method not implemented.');
  }

  resendEmail(data: unknown): Observable<unknown> {
    throw new Error('Method not implemented.');
  }
}
