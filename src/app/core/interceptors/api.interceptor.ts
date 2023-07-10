import { API_CONFIG } from './../tokens/api';
import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApiConfig } from '@core/interfaces/api';
import { INTERCEPTOR_CONFIG } from '@core/tokens/interceptor';
import { IApiInterceptorConfig, IInterceptorConfig } from '@core/interfaces/interceptor';

const DEFAULT_CONFIG: IApiInterceptorConfig = {
  enable: true,
};

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  config: IApiInterceptorConfig;
  constructor(@Inject(API_CONFIG) private apiConfig: IApiConfig, @Inject(INTERCEPTOR_CONFIG) private interceptorConfig: IInterceptorConfig) {
    this.config = { ...DEFAULT_CONFIG, ...interceptorConfig };
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.config.enable) {
      request = request.clone({
        url: this.apiConfig.host + request.url,
      });
    }
    return next.handle(request);
  }
}
