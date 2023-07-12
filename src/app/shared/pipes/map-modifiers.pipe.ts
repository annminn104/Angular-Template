import { Pipe, PipeTransform } from '@angular/core';
import { HelpersUtils } from '@shared/utils/helpers';

@Pipe({ name: 'mapModifiers' })
export class MapModifiersPipe implements PipeTransform {
  transform(baseClassName: string, ...modifiers: (string | string[] | false | undefined)[]): string {
    return HelpersUtils.mapModifiers(baseClassName, ...modifiers);
  }
}
