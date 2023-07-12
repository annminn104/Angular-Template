export class HelpersUtils {
  static mapModifiers(baseClassName: string, ...modifiers: (string | string[] | false | undefined)[]): string {
    return modifiers
      .reduce<Array<string>>((acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]), [])
      .map((m) => `-${m}`)
      .reduce<string>((classNames, suffix) => `${classNames} ${baseClassName}${suffix}`, baseClassName);
  }
}
