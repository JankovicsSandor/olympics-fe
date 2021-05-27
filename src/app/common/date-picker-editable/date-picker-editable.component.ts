import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'date-picker-editable',
  templateUrl: './date-picker-editable.component.html',
  styleUrls: ['./date-picker-editable.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DatePickerEditableComponent),
    }
  ]
})
export class DatePickerEditableComponent implements ControlValueAccessor {

  inputValue: string = "";
  @Input() editEnabled: boolean = false;
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
