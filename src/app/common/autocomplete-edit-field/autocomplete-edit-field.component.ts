import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { SimpleSelect } from '@models';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'autocomplete-edit-field',
  templateUrl: './autocomplete-edit-field.component.html',
  styleUrls: ['./autocomplete-edit-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => AutocompleteEditFieldComponent),
    }
  ]
})
export class AutocompleteEditFieldComponent implements OnInit, ControlValueAccessor {

  inputValueControl = new FormControl();
  filteredOptions: Observable<SimpleSelect[]>;
  @Input() editEnabled: boolean;

  @Input() dropDownValues: SimpleSelect[] = []
  onChange = (value) => { };
  onTouched = () => { };
  constructor() {
    this.inputValueControl.valueChanges.subscribe((val) => {
      this.onChange(val);
    });
    this.filteredOptions = this.inputValueControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }


  private _filter(value: string): SimpleSelect[] {
    const filterValue = value.toLowerCase();

    return this.dropDownValues.filter(option => option.text.toLowerCase().indexOf(filterValue) === 0);
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
