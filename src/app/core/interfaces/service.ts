import { Observable } from 'rxjs';

export interface IWithData {
  detail(params: unknown): Observable<unknown>;
  list(params: unknown): Observable<unknown>;
  save(params: unknown): Observable<unknown>;
  update(params: unknown): Observable<unknown>;
}

export interface IWithAuth {
  user: unknown | undefined;
  isAuthenticated(): Observable<boolean>;
  refreshToken(data: unknown): Observable<unknown>;
  login(data: unknown): Observable<unknown>;
  logout(): Observable<unknown>;
  register(data: unknown): Observable<unknown>;
  profile(): Observable<unknown>;
  forgotPassword(data: unknown): Observable<unknown>;
  resetPassword(data: unknown): Observable<unknown>;
  changePassword(data: unknown): Observable<unknown>;
  verifyEmail(data: unknown): Observable<unknown>;
  resendEmail(data: unknown): Observable<unknown>;
}
