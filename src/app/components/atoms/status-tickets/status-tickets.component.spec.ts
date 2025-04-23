import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTicketsComponent } from './status-tickets.component';

describe('StatusTicketsComponent', () => {
  let component: StatusTicketsComponent;
  let fixture: ComponentFixture<StatusTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusTicketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
