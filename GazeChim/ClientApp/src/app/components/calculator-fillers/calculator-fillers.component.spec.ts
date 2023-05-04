import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorFillersComponent } from './calculator-fillers.component';

describe('CalculatorFillersComponent', () => {
  let component: CalculatorFillersComponent;
  let fixture: ComponentFixture<CalculatorFillersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorFillersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorFillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
