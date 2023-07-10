import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INTERCEPTOR_CONFIG } from '../tokens/interceptor';
import { IAuthInterceptorConfig, IInterceptorConfig } from '../interfaces/interceptor';
import { LoggingService } from '../services/logging.service';
import { JwtService } from '../services/jwt.service';

const DEFAULT_CONFIG: IAuthInterceptorConfig = {
  enable: true,
  excludeUrls: [],
};

/**
 * Add JWT Token for Request
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  config: IAuthInterceptorConfig;
  constructor(@Inject(INTERCEPTOR_CONFIG) private interceptorConfig: IInterceptorConfig, private _log: LoggingService, private _jwt: JwtService) {
    this.config = { ...DEFAULT_CONFIG, ...this.interceptorConfig.authInterceptor };
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.config.enable) {
      if (this._jwt.accessToken && this.config.excludeUrls.filter((url) => request.url.includes(url)).length == 0) {
        request = request.clone({ headers: request.headers.set('Authorization', this._jwt.accessTokenWithPrefix) });
      }
    }
    return next.handle(request);
  }
}
