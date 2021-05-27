import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputEditableFieldComponent } from './input-editable-field/input-editable-field.component';
import { DatePickerEditableComponent } from './date-picker-editable/date-picker-editable.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropdownEditFieldComponent } from './dropdown-edit-field/dropdown-edit-field.component';


@NgModule({
  declarations: [InputEditableFieldComponent, DatePickerEditableComponent, DropdownEditFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  exports: [InputEditableFieldComponent]
})
export class CommonComponentModule { }
