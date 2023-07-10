export interface IInterceptorConfig {
  authInterceptor: Partial<IAuthInterceptorConfig>;
  refreshTokenInterceptor: Partial<IRefreshTokenInterceptorConfig>;
  dataInterceptor: Partial<IDataInterceptorConfig>;
}

export interface IAuthInterceptorConfig {
  enable: boolean;
  excludeUrls: Array<string>;
}

export interface IRefreshTokenInterceptorConfig {
  enable: boolean;
  retry: number;
}

export interface IApiInterceptorConfig {
  enable: boolean;
}

export interface IDataInterceptorConfig {
  enable: boolean;
  excludeUrls: Array<string>;
}
