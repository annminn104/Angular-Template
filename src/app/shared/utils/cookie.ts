export class CookieUtils {
  /**
   * The function `Get` retrieves the value of a cookie with a given key from the document's cookies.
   * @param {string} key - The "key" parameter is a string that represents the name of the cookie
   * @returns the value of the cookie with the specified key. If the cookie
   */
  static Get(key: string) {
    let cookies = document.cookie;
    let array = cookies.split(';').filter((str) => {
      let arr = str.trim().split('=');
      return arr[0] == key;
    });
    if (!array || array.length <= 0) {
      return '';
    }
    return decodeURIComponent(array[0].trim().split('=')[1]);
  }

  /**
   * The function sets a cookie with a given key, value, and optional expiration time.
   * @param {string} key - The key parameter is a string that represents the name of the cookie.
   * @param {any} value - The value parameter is the value that you want to store in the cookie.
   * @param {Date | null} [time=null] - The `time` parameter is optional
   */
  static Set(key: string, value: any, time: Date | null = null) {
    let cookie = `${key}=${encodeURIComponent(value)}`;
    let expires = time ? `; expires=${time.toUTCString()}` : '';
    let path = `; path =/`;
    document.cookie = `${cookie}${expires}${path}`;
  }

  /**
   * The Remove function is used to delete a cookie by setting its expiration date to a past date.
   * @param {string} key - The key parameter is a string that represents the name of the cookie that you
   * want to remove.
   */
  static Remove(key: string) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
