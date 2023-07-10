import { InjectionToken } from '@angular/core';
import { IApiConfig } from '../interfaces/api';

export const API_CONFIG: InjectionToken<IApiConfig> = new InjectionToken('API Configuration');
