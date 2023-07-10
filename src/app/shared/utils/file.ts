export class FileUtils {
  /**
   * The function "GetFileExtension" takes a File object as input and returns the file extension.
   * @param {File} file - The "file" parameter is of type "File"
   * @returns The file extension of the given file.
   */
  static GetFileExtension(file: File): string {
    const arr = file.name.split('.');
    return arr[arr.length - 1];
  }
}
