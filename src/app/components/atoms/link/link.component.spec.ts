import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkComponent } from './link.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LinkComponent, SvgIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show warning when neither routerLink nor href is provided', () => {
    spyOn(console, 'warn');
    component.routerLink = null;
    component.href = null;

    component.ngOnInit();

    expect(console.warn).toHaveBeenCalledWith(
      'LinkComponent: Se requiere al menos una propiedad routerLink o href'
    );
  });

  it('should render text correctly', () => {
    component.text = 'Texto de prueba';
    fixture.detectChanges();

    const textElement = fixture.nativeElement.querySelector('.link-text');
    expect(textElement.textContent).toContain('Texto de prueba');
  });

  it('should show icon when provided', () => {
    component.icon = 'test-icon';
    fixture.detectChanges();

    const iconElement = fixture.nativeElement.querySelector('app-svg-icon');
    expect(iconElement).toBeTruthy();
  });
});
