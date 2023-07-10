export class NumberUtils {
  /**
   * The ZeroPad function takes a number and pads it with zeros to a specified number of places.
   * @param {number} num - The `num` parameter is a number that we want to zero-pad.
   * @param {number} [places=1] - The "places" parameter is the total number of digits that the
   * resulting string should have. If the number has fewer digits than the specified places, leading
   * zeros will be added to make up the difference.
   * @returns The ZeroPad function returns a string with the number padded with zeros to the specified
   * number of places.
   */
  static ZeroPad(num: number, places: number = 1): string {
    const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join('0') + num;
  }

  /**
   * The function checks if a given value is a number.
   * @param {any} num - The parameter "num" is of type "any", which means it can be any data type.
   * @returns a boolean value indicating whether the input `num` is a number or not.
   */
  static IsValidNumber(num: any) {
    return typeof num === 'number';
  }
}
