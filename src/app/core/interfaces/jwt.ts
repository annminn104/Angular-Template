export interface IJwtConfig {
  prefix: string;
  accessTokenKey: string;
  refreshTokenKey?: string;
}

export interface IJwtAccessToken {
  accessToken: string;
  refreshToken?: string;
  accessExpire?: number | string | null;
  refreshExpire?: number | string | null;
}
