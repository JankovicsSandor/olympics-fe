import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerEditableComponent } from './date-picker-editable.component';

describe('DatePickerEditableComponent', () => {
  let component: DatePickerEditableComponent;
  let fixture: ComponentFixture<DatePickerEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
