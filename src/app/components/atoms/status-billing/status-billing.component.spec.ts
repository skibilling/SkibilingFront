import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBillingComponent } from './status-billing.component';

describe('StatusBillingComponent', () => {
  let component: StatusBillingComponent;
  let fixture: ComponentFixture<StatusBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusBillingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
