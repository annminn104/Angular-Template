export enum STATUS_CODE {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  NOT_FOUND = 'NOT_FOUND',
  DATA_IN_USED = 'DATA_IN_USED',
  NO_PERMISSION = 'NO_PERMISSION',
  VERIFY_CODE = 'VERIFY_CODE',
  DATA_PROTECTED = 'DATA_PROTECTED',
  BAD_REQUEST = 'BAD_REQUEST',
}

export enum CONTENT_TYPE {
  JSON = 'application/json; charset=UTF-8',
  TEXT = 'text/plain; charset=UTF-8',
  HTML = 'text/html; charset=UTF-8',
  FORM_DATA = 'multipart/form-data',
  FORM_URLENCODED = 'application/x-www-form-urlencoded; charset=UTF-8',
}
