import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePaycheckComponent } from './generate-paycheck.component';

describe('GeneratePaycheckComponent', () => {
  let component: GeneratePaycheckComponent;
  let fixture: ComponentFixture<GeneratePaycheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePaycheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePaycheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
