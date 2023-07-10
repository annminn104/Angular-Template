export class SetQueryParams {
  /**
   * The function `SetQueryParams` takes an object of parameters and returns a string of query
   * parameters for a URL.
   * @param {any} params - The `params` parameter is an object that contains key-value pairs. Each key
   * represents a parameter name, and each value represents the corresponding parameter value.
   * @returns a string that represents the query parameters.
   */
  static SetQueryParams(params: any) {
    if (params && Object.keys(params).length > 0) {
      return `?${Object.keys(params)
        .filter((key) => {
          return params[key] != null && params[key].toString() != '' && params[key] != undefined && params[key] != 'null';
        })
        .map((key) => {
          return [key, encodeURIComponent(params[key])].join('=');
        })
        .join('&')}`;
    } else {
      return '';
    }
  }
}
