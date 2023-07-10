import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, map, filter } from 'rxjs';
import { IDataInterceptorConfig, IInterceptorConfig } from '../interfaces/interceptor';
import { INTERCEPTOR_CONFIG } from '@core/tokens/interceptor';
const DEFAULT_CONFIG: IDataInterceptorConfig = {
  enable: true,
  excludeUrls: [],
};

@Injectable()
export class DataInterceptor implements HttpInterceptor {
  config: IDataInterceptorConfig;
  constructor(@Inject(INTERCEPTOR_CONFIG) private interceptorConfig: IInterceptorConfig) {
    this.config = { ...DEFAULT_CONFIG, ...this.interceptorConfig.dataInterceptor };
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      filter((e) => e instanceof HttpResponse),
      map((response: any) => {
        if (this.config.excludeUrls.filter((url) => request.url.includes(url)).length === 0) {
          if (response.body) {
            return response.clone({ body: response.body.data });
          }
        }
        return response;
      })
    );
  }
}
