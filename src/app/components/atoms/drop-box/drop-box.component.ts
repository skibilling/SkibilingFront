import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintComponent } from "../hint/hint.component";
@Component({
  selector: 'app-drop-box',
  imports: [CommonModule, HintComponent],
  templateUrl: './drop-box.component.html',
  styleUrl: './drop-box.component.css'
})
export class DropBoxComponent {
  @Input() state: 'default' | 'disabled' | 'success' | 'warning' | 'error' = 'default';
  @Input() error: boolean = false;
  @Input() filename: string = '';
  @Input() information: string = 'Informational Text';
  @Input() icon: string = ''; // ejemplo: 'fa fa-upload'
  @Input() required: boolean = true;

  get dropBoxClasses(): string[] {
    const classes = ['drop-box'];

    classes.push(`drop-box--${this.state}`);

    if (this.error) {
      classes.push('drop-box--error-border');
    }

    return classes;
  }

  get shouldShowFilename(): boolean {
    return !!this.filename && this.state !== 'disabled';
  }

  get shouldShowIcon(): boolean {
    return !!this.icon && this.state !== 'disabled';
  }

  get isDisabled(): boolean {
    return this.state === 'disabled';
  }
  
  get iconImagePath(): string {
    switch (this.icon) {
      case 'image':
        return 'assets/Image.svg';
      case 'pdf':
      case 'csv':
        return 'assets/Upload.svg';
      default:
        return 'assets/Upload.svg';
    }
  }
  
  get acceptedFileType(): string {
    switch (this.icon) {
      case 'image':
        return 'image/*';
      case 'pdf':
        return 'application/pdf';
      case 'csv':
        return '.csv';
      default:
        return '*/*';
    }
  }
  
  get uploadLabelText(): string {
    switch (this.icon) {
      case 'image':
        return 'Seleccionar imagen';
      case 'pdf':
        return 'Seleccionar PDF';
      case 'csv':
        return 'Seleccionar CSV';
      default:
        return 'Seleccionar archivo';
    }
  }
  
  get hintText(): string {
    switch (this.icon) {
      case 'image':
        return 'Solo se permiten imágenes';
      case 'pdf':
        return 'Solo se permiten archivos PDF';
      case 'csv':
        return 'Solo se permiten archivos CSV';
      default:
        return '';
    }
  }
  
}
