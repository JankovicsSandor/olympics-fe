import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
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

  inputValueControl = new FormControl();
  @Input() editEnabled: boolean;

  onChange = (value) => { };
  onTouched = () => { };
  constructor() {
    this.inputValueControl.valueChanges.subscribe((val) => {
      this.onChange(val);
    });
  }

  writeValue(obj: any): void {
    this.inputValueControl.patchValue(obj);
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

  ngOnInit(): void {
  }


}
