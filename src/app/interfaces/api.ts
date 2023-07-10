export interface IHttpResponse<T> {
  statusCode: number;
  data: T;
  errors: string | Array<string>;
  message: string;
}
