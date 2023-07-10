import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, map, catchError, throwError, filter } from 'rxjs';
import { STATUS_CODE } from '@core/enums/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      filter((e) => e instanceof HttpResponse),
      map((res: any) => {
        if (!res.body.success || res.body.code != STATUS_CODE.SUCCESS) {
          throw new Error(res.body.message || res.body.messages.join('\n'));
        }
        return res;
      }),
      catchError((error: any) => {
        if (typeof error === 'string') {
          return throwError(() => error);
        }
        let errorMessage = '';
        if (error.status === 0) {
          errorMessage = error.statusText;
        } else if (error.error instanceof Object) {
          errorMessage = error.error.error;
        } else if (error.messages && error.messages.length > 0) {
          errorMessage = error.messages.join('\n');
        } else if (error.message) {
          errorMessage = `${error.message}`;
        } else {
          errorMessage = `${error.status}: ${error.statusText}`;
        }
        return throwError(() => errorMessage);
      })
    );
  }
}
