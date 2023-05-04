import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegletteSvgComponent } from './reglette-svg.component';

describe('RegletteSvgComponent', () => {
  let component: RegletteSvgComponent;
  let fixture: ComponentFixture<RegletteSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegletteSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegletteSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
