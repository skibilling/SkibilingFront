import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFiscalDataComponent } from './content-fiscal-data.component';

describe('ContentFiscalDataComponent', () => {
  let component: ContentFiscalDataComponent;
  let fixture: ComponentFixture<ContentFiscalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentFiscalDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFiscalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
