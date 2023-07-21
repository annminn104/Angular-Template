import { IJwtAccessToken, IJwtConfig } from './../interfaces/jwt';
import { JWT_CONFIG } from './../tokens/jwt';
import { Inject, Injectable } from '@angular/core';
import { CookieUtils } from '@shared/utils/cookie';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(@Inject(JWT_CONFIG) private jwtConfig: IJwtConfig) {}

  setJwtData(data: IJwtAccessToken): void {
    this.saveAccessToken(data.accessToken, data.accessExpire);
    if (this.jwtConfig.refreshTokenKey && data.refreshToken) {
      this.saveRefreshToken(data.refreshToken, data.refreshExpire);
    }
  }

  get accessTokenWithPrefix(): string {
    return `${this.jwtConfig.prefix} ${this.accessToken}`;
  }

  get refreshToken(): string {
    if (!this.jwtConfig.refreshTokenKey) {
      return '';
    }
    return CookieUtils.Get(this.jwtConfig.refreshTokenKey);
  }

  get accessToken(): string {
    return CookieUtils.Get(this.jwtConfig.accessTokenKey);
  }

  saveAccessToken(token: string, expire?: number | string | null) {
    const expireDate = !expire ? null : typeof expire === 'string' ? new Date(expire) : new Date(expire * 1000);
    CookieUtils.Set(this.jwtConfig.accessTokenKey, token, expireDate);
  }

  saveRefreshToken(refreshToken: string, expire?: number | string | null) {
    const expireDate = !expire ? null : typeof expire === 'string' ? new Date(expire) : new Date(expire * 1000);
    if (this.jwtConfig.refreshTokenKey) {
      CookieUtils.Set(this.jwtConfig.refreshTokenKey, refreshToken, expireDate);
    }
  }

  clearAll(): void {
    this.removeAccessToken();
    this.removeRefreshToken();
  }

  removeAccessToken(): void {
    CookieUtils.Remove(this.jwtConfig.accessTokenKey);
  }

  removeRefreshToken(): void {
    if (this.jwtConfig.refreshTokenKey) {
      CookieUtils.Remove(this.jwtConfig.refreshTokenKey);
    }
  }
}
