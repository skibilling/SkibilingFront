import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInfoCameraComponent } from './content-info-camera.component';

describe('ContentInfoCameraComponent', () => {
  let component: ContentInfoCameraComponent;
  let fixture: ComponentFixture<ContentInfoCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentInfoCameraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentInfoCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
