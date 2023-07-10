import { ModuleWithProviders, NgModule, Optional, Provider, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DataInterceptor } from './interceptors/data.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { RefreshTokenInterceptor } from './interceptors/refresh-token.interceptor';
import { LoggingService } from './services/logging.service';
import { ApiService } from './services/api.service';
import { JwtService } from './services/jwt.service';
import { API_CONFIG } from './tokens/api';
import { LOG_CONFIG } from './tokens/logging';
import { JWT_CONFIG } from './tokens/jwt';
import { INTERCEPTOR_CONFIG } from './tokens/interceptor';
import { ICoreModuleConfig } from './interfaces/core';

const InterceptorProviders: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: DataInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [LoggingService, ApiService, JwtService, ...InterceptorProviders],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }

  static forRoot(config: ICoreModuleConfig): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: API_CONFIG,
          useValue: config.apiConfig || {},
        },
        {
          provide: LOG_CONFIG,
          useValue: config.logConfig || {},
        },
        {
          provide: JWT_CONFIG,
          useValue: config.jwtConfig || {},
        },
        {
          provide: INTERCEPTOR_CONFIG,
          useValue: config.interceptorConfig || {},
        },
      ],
    };
  }
}
