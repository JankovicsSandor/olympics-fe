import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownEditFieldComponent } from './dropdown-edit-field.component';

describe('DropdownEditFieldComponent', () => {
  let component: DropdownEditFieldComponent;
  let fixture: ComponentFixture<DropdownEditFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownEditFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownEditFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
