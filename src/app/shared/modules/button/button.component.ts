import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IIconName, IIconObj } from '@interfaces/icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() className: string = '';
  @Input() children: string = 'button';
  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() style!: Record<string, string | number>;
  @Input() icon!: IIconName | IIconObj;
  @Output() onClick = new EventEmitter();
  @Output() onHover = new EventEmitter();
  @Output() onBlur = new EventEmitter();

  isIconObject(icon: IIconName | IIconObj): icon is IIconObj {
    return (icon as IIconObj).iconName !== undefined;
  }
}
