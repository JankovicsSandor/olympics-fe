import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputEditableFieldComponent } from './input-editable-field/input-editable-field.component';
import { DatePickerEditableComponent } from './date-picker-editable/date-picker-editable.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropdownEditFieldComponent } from './dropdown-edit-field/dropdown-edit-field.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [InputEditableFieldComponent, DatePickerEditableComponent, DropdownEditFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [InputEditableFieldComponent, DatePickerEditableComponent, DropdownEditFieldComponent]
})
export class CommonComponentModule { }
