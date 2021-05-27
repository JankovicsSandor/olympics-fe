import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
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

  inputValueControl = new FormControl();
  @Input() editEnabled: boolean;

  @Input() dropDownValues: SimpleSelect[] = []
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
