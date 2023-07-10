import { InjectionToken } from '@angular/core';
import { ILogConfig } from '../interfaces/logging';
export const LOG_CONFIG: InjectionToken<ILogConfig> = new InjectionToken('Logging Service Configuration');
