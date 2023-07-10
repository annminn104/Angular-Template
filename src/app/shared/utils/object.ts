export class ObjectUtils {
  /**
   * The function removes empty properties from an object.
   * @param {any} obj - The parameter `obj` is an object that you want to remove empty properties from.
   * @returns the modified object after removing any empty values.
   */
  static RemoveEmpty(obj: any) {
    Object.keys(obj).forEach((k) => (obj[k] == '' || obj[k] == null || obj[k] == 'null' || obj[k] == undefined) && delete obj[k]);
    return obj;
  }

  /**
   * The function `SetQueryParams` takes an object as input and returns a string of query parameters
   * based on the non-null, non-empty, and non-undefined values of the object.
   * @param {any} obj - The `obj` parameter is an object that contains key-value pairs representing
   * query parameters.
   * @returns a string that represents a query parameter string.
   */
  static SetQueryParams(obj: any) {
    if (obj && Object.keys(obj).length > 0) {
      return `?${Object.keys(obj)
        .filter((key) => {
          return obj[key] != null && obj[key].toString() != '' && obj[key] != undefined && obj[key] != 'null';
        })
        .map((key) => {
          return [key, encodeURIComponent(obj[key])].join('=');
        })
        .join('&')}`;
    } else {
      return '';
    }
  }
}
