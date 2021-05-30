import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteEditFieldComponent } from './autocomplete-edit-field.component';

describe('AutocompleteEditFieldComponent', () => {
  let component: AutocompleteEditFieldComponent;
  let fixture: ComponentFixture<AutocompleteEditFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteEditFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteEditFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
