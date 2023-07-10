export interface ILoginRequest {
  email: string;
  password: string;
  remember: boolean;
}

export type ILoginResponse = ILoginUserResponse & ITokenResponse;

export interface ILoginUserResponse {
  userId: number;
  userName: string;
  email: string;
  phone: string;
}

export interface ITokenResponse {
  accessToken: string;
  accessTokenExpired: string;
  refreshToken: string;
}

export interface IRegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IRegisterResponse {}

export interface IChangePasswordRequest {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface IRefreshToken {
  refreshToken: string;
}

export type ILogoutResponse = {};

export interface IVerifyEmailRequest {
  code: string;
}

export interface IResendEmailRequest {
  email: string;
}

export type IVerifyEmailResponse = {};

export type IResendEmailResponse = {};
