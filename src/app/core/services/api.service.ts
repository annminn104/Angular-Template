import { Inject, Injectable } from '@angular/core';
import { IApiConfig } from '@core/interfaces/api';
import { API_CONFIG } from '@core/tokens/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlUtils } from '@shared/utils/url';
import { CONTENT_TYPE } from '@core/enums/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(@Inject(API_CONFIG) private apiConfig: IApiConfig, private _http: HttpClient) {}

  /**
   * Call api by GET method.
   * @param {string} endpoint API endpoint
   * @param {any} [data={}] Api params
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  get<T>(endpoint: string, data: any = {}): Observable<T> {
    return this._http.get(UrlUtils.merge(this.apiConfig.prefix, this.apiConfig.version, endpoint, data)) as Observable<T>;
  }

  /**
   * Call api by POST method.
   * @param {string} endpoint API endpoint
   * @param {any} [data={}] Request data
   * @param {*} options Method options
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  post<T>(endpoint: string, data: any = {}, options: any = {}, extraOptions: any = {}): Observable<T> {
    let httpOptions: any;
    let httpHeaders = { 'Content-Type': CONTENT_TYPE.JSON };

    httpHeaders = { ...httpHeaders, ...options.headers };
    httpOptions = {
      headers: new HttpHeaders(httpHeaders),
    };

    if (options.headers?.['Content-Type'] == CONTENT_TYPE.FORM_URLENCODED) {
      data = Object.keys(data)
        .map((key) => `${key}=${encodeURIComponent(data[key])}`)
        .join('&');
    }

    return this._http.post(UrlUtils.merge(this.apiConfig.prefix, this.apiConfig.version, endpoint), data, { ...httpOptions, ...extraOptions }) as Observable<any>;
  }

  /**
   * Call api by PUT method.
   * @param {string} endpoint API endpoint
   * @param {any} [data={}] Request data
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  put<T>(endpoint: string, data: any = {}): Observable<T> {
    return this._http.put(UrlUtils.merge(this.apiConfig.prefix, this.apiConfig.version, endpoint), data) as Observable<T>;
  }

  /**
   * Call api by PATCH method.
   * @param {string} endpoint API endpoint
   * @param {any} [data={}] Request data
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  patch<T>(endpoint: string, data: any = {}): Observable<T> {
    return this._http.patch(UrlUtils.merge(this.apiConfig.prefix, this.apiConfig.version, endpoint), data) as Observable<T>;
  }

  /**
   * Call api by DELETE method.
   * @param {string} endpoint API endpoint
   * @param {any} [data={}] Request params
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  delete<T>(endpoint: string, data: any = {}): Observable<T> {
    return this._http.delete(UrlUtils.merge(this.apiConfig.prefix, this.apiConfig.version, endpoint, data)) as Observable<T>;
  }
}
