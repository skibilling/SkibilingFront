import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressNavComponent } from './progress-nav.component';

describe('ProgressNavComponent', () => {
  let component: ProgressNavComponent;
  let fixture: ComponentFixture<ProgressNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
