export interface IHttpResponse<T> {
  statusCode: number | null;
  data: T;
  errors: string | Array<string> | null;
  message: string | null;
}
