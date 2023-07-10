import { IJwtConfig } from './jwt';
import { ILogConfig } from './logging';
import { IApiConfig } from './api';
import { IInterceptorConfig } from './interceptor';

export interface ICoreModuleConfig {
  apiConfig: IApiConfig;
  jwtConfig: IJwtConfig;
  logConfig: ILogConfig;
  interceptorConfig: IInterceptorConfig;
}
