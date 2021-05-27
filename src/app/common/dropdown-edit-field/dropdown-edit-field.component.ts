import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SimpleSelect } from '@models';

@Component({
  selector: 'dropdown-edit-field',
  templateUrl: './dropdown-edit-field.component.html',
  styleUrls: ['./dropdown-edit-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DropdownEditFieldComponent),
    }
  ]
})
export class DropdownEditFieldComponent implements ControlValueAccessor {

  inputValue: string = "";
  @Input() editEnabled: boolean = false;
  @Input() dropDownValues: SimpleSelect[] = []
  onChange = (value) => { };
  onTouched = () => { };
  constructor() { }
  writeValue(obj: any): void {
    this.inputValue = obj
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.editEnabled = isDisabled;
  }

}
