export enum AUTH_ENDPOINT {
  LOGIN = 'auth/login',
  LOGOUT = 'auth/logout',
  REFRESH_TOKEN = 'auth/refresh-token',
  REGISTER = 'auth/register',
  PROFILE = 'auth/me',
  VERIFY_EMAIL = 'auth/verify-email',
  RESEND_EMAIL = 'auth/resend-code',
}

export enum AUTH_VALID {
  EMAIL_REQUIRED = 'Email cannot be left blank.',
  EMAIL_FORMAT = 'Invalid email.',
  EMAIL_MAX_LENGTH = 'Email cannot exceed 320 characters. ',
  PASSWORD_REQUIRED = 'Password cannot be left blank.',
  PASSWORD_MIN_LENGTH = 'Password has at least 8 characters.',
  PASSWORD_MAX_LENGTH = 'Password cannot exceed 24 characters.',
}
