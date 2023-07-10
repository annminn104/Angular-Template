import { LOG_COLOR, LOG_LEVEL } from '../enums/logging';

export class LogEntry {
  msg: string;
  level: LOG_LEVEL;
  params: Array<any>;

  get logType(): string {
    return Object.values(LOG_LEVEL)[this.level] as string;
  }

  get logFormat(): string {
    switch (this.level) {
      case LOG_LEVEL.NONE:
        return `color: ${LOG_COLOR.NONE}`;
      case LOG_LEVEL.DEBUG:
        return `color: ${LOG_COLOR.DEBUG}`;
      case LOG_LEVEL.INFO:
        return `color: ${LOG_COLOR.INFO}`;
      case LOG_LEVEL.WARN:
        return `color: ${LOG_COLOR.WARN}`;
      case LOG_LEVEL.ERROR:
        return `color: ${LOG_COLOR.ERROR}`;
      case LOG_LEVEL.FATAL:
        return `color: ${LOG_COLOR.FATAL}`;
      case LOG_LEVEL.OFF:
        return `color : ${LOG_COLOR.OFF}`;
      default:
        return '';
    }
  }

  constructor(msg: string, level: LOG_LEVEL, params: Array<any>) {
    this.msg = msg;
    this.level = level;
    this.params = params;
  }

  buildLogMessage() {
    let msg = '';
    msg += `Time: ${new Date()}\n`;
    msg += `-------------------------------------------------------\n`;
    msg += `Type: ${this.logType}\n`;
    msg += `-------------------------------------------------------\n`;
    msg += `Message: ${this.msg}\n`;
    msg += `-------------------------------------------------------\n`;
    if (this.params.length) {
      msg += `Extra Info: \n`;
      msg += this.formatParams();
    }
    return msg;
  }

  formatParams() {
    return this.params
      .map((param) => {
        if (typeof param === 'object') {
          return `{ ${Object.keys(param)
            .map((key) => `${key}: ${param[key].toString()}`)
            .join(', ')} }`;
        }
        return param;
      })
      .join(', ');
  }
}
