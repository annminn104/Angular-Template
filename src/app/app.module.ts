import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ICoreModuleConfig } from '@core/interfaces/core';
import { CoreModule } from '@core/core.module';

const CoreModuleConfig: ICoreModuleConfig = {
  apiConfig: {
    host: environment.api.host,
    prefix: environment.api.prefix,
    version: environment.api.version || '',
  },
  jwtConfig: {
    prefix: environment.jwt.prefix,
    accessTokenKey: environment.jwt.accessTokenKey,
    refreshTokenKey: environment.jwt.refreshTokenKey || '',
  },
  logConfig: {
    enable: !environment.production,
  },
  interceptorConfig: {
    authInterceptor: {
      enable: true,
      excludeUrls: [],
    },
    refreshTokenInterceptor: {
      enable: true,
      retry: 0,
    },
    dataInterceptor: {
      enable: false,
      excludeUrls: [],
    },
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule.forRoot(CoreModuleConfig)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
