import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneConverterComponent } from './phone-converter.component';

describe('PhoneConverterComponent', () => {
  let component: PhoneConverterComponent;
  let fixture: ComponentFixture<PhoneConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
