import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-editable-field',
  templateUrl: './input-editable-field.component.html',
  styleUrls: ['./input-editable-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputEditableFieldComponent),
    }
  ]
})
export class InputEditableFieldComponent implements OnInit, ControlValueAccessor {

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
