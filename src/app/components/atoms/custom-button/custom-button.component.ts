import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

export type ButtonType = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent implements OnInit, OnChanges {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() type: ButtonType = 'primary';
  @Input() disabled: boolean = false;
  @Input() useAssetIcon: boolean = false;
  @Output() buttonClick = new EventEmitter<void>();

  // Propiedad para determinar el color del texto según el tipo
  get textColor(): string {
    if (this.type === 'primary' || this.type === 'tertiary') {
      return 'white';
    } else if (this.type === 'secondary') {
      return '#f07718';
    }
    return 'white'; // Default
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    if (this.useAssetIcon && this.icon) {
      // Eliminamos los métodos relacionados con la carga de SVG, ya que ahora lo manejará el componente SvgIcon
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Si cambia el icono o el tipo, recargamos el SVG
    if (
      (changes['icon'] || changes['type'] || changes['disabled']) &&
      this.useAssetIcon &&
      this.icon
    ) {
      // Eliminamos los métodos relacionados con la carga de SVG, ya que ahora lo manejará el componente SvgIcon
    }
  }

  onClick(): void {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }

  /**
   * Método para cambiar el estado de habilitación del botón
   * @param isDisabled Nuevo estado de deshabilitación
   */
  setDisabled(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
