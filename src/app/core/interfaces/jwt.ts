export interface IJwtConfig {
  prefix: string;
  accessTokenKey: string;
  refreshTokenKey?: string;
}

export interface IJwtAccessToken {
  accessToken: string;
  refreshToken?: string;
  accessTokenExpired?: number | string | null;
}
