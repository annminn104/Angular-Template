import { LogEntry } from './../models/log-entry';
import { Inject, Injectable } from '@angular/core';
import { LOG_LEVEL } from '../enums/logging';
import { ILogConfig } from '../interfaces/logging';
import { LOG_CONFIG } from '../tokens/logging';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor(@Inject(LOG_CONFIG) private logConfig: ILogConfig) {}

  log(msg: string, ...params: unknown[]): void {
    this.writeLog(msg, LOG_LEVEL.NONE, params);
  }

  debug(msg: string, ...params: unknown[]): void {
    this.writeLog(msg, LOG_LEVEL.DEBUG, params);
  }

  info(msg: string, ...params: unknown[]): void {
    this.writeLog(msg, LOG_LEVEL.INFO, params);
  }

  warn(msg: string, ...params: unknown[]): void {
    this.writeLog(msg, LOG_LEVEL.WARN, params);
  }

  error(msg: string, ...params: unknown[]): void {
    this.writeLog(msg, LOG_LEVEL.ERROR, params);
  }

  fatal(msg: string, ...params: unknown[]): void {
    this.writeLog(msg, LOG_LEVEL.FATAL, params);
  }

  off(msg: string, ...params: unknown[]): void {
    this.writeLog(msg, LOG_LEVEL.OFF, params);
  }

  writeLog(msg: string, level: LOG_LEVEL, params: Array<any>) {
    if (this.logConfig.enable) {
      if (Object.values(LOG_LEVEL).includes(level)) {
        const logEntry = new LogEntry(msg, level, params);
        console.log('%c' + logEntry.buildLogMessage(), logEntry.logFormat);
      }
    }
  }
}
