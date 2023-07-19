import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, map, catchError, throwError, filter } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      filter((e) => e instanceof HttpResponse),
      map((res: any) => {
        return res;
      }),
      catchError((error: any) => {
        return throwError(() => error);
      })
    );
  }
}
