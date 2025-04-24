import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

export interface Option{
  label: string;
  value: string;
}

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, SvgIconComponent]
})
export class SelectFieldComponent {
  @Input() label: string = 'Tipo de servicio';
  @Input() placeholder: string = 'Seleccionar';
  @Input() icon: string = '';
  @Input() options: Option[] = [];
  @Input() required: boolean = true;
  @Input() initialValue: string = '';
  @Input() isDisabled: boolean = false;

  @Output() selectionChange = new EventEmitter<{value: string, label: string}>();
  @Output() selectedValueChange = new EventEmitter<string>();
  isRequired: boolean = this.required;
  selectedValue: string = '';
  isDropdownOpen: boolean = false;

  ngOnInit() {
    if (this.initialValue) {
      this.selectedValue = this.initialValue;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Cerrar el dropdown cuando se hace clic fuera del componente
    const target = event.target as HTMLElement;
    if (!target.closest('.select-field-container')) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onSelectionChange(value: string) {
    this.selectedValue = value;
    this.isDropdownOpen = false;
    const selectedOption = this.options.find(opt => opt.value === value);
    if (selectedOption) {
      this.selectionChange.emit({
        value: selectedOption.value,
        label: selectedOption.label
      });
    }
  }

  // Método para validar si el campo está completo
  isValid(): boolean {
    if (this.required) {
      return this.selectedValue !== '';
    }
    return true;
  }

  // Método para obtener el valor seleccionado
  getValue(): {value: string, label: string} | null {
    if (!this.selectedValue) return null;
    const selectedOption = this.options.find(opt => opt.value === this.selectedValue);
    return selectedOption || null;
  }
}