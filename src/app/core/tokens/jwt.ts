import { IJwtConfig } from './../interfaces/jwt';
import { InjectionToken } from '@angular/core';
export const JWT_CONFIG: InjectionToken<IJwtConfig> = new InjectionToken('JWT Config Configuration');
