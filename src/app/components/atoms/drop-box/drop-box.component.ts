import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintComponent } from "../hint/hint.component";
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { CheckSelectorComponent } from "../check-selector/check-selector.component";


@Component({
  selector: 'app-drop-box',
  standalone: true,
  imports: [CommonModule, HintComponent, SvgIconComponent, CheckSelectorComponent],
  templateUrl: './drop-box.component.html',
  styleUrls: ['./drop-box.component.css']
})
export class DropBoxComponent {
  @Input() state: 'default' | 'loaded' | 'disabled' = 'default';
  @Input() error: boolean = false;
  @Input() information: string = 'Informational Text';
  @Input() icon: string = '';
  @Input() fileExtensions: string = '';
  @Input() required: boolean = true;
  @Input() showHint: boolean = true;
  fileName: string = '';

  getAcceptType(): string {
    return this.fileExtensions;
  }

  isValidFileType(fileName: string): boolean {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch(this.icon) {
      case 'image':
        return ['jpg', 'jpeg', 'png', 'gif'].includes(extension || '');
      case 'pdf':
        return extension === 'pdf';
      case 'csv':
        return extension === 'csv';
      default:
        return false;
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (this.isValidFileType(file.name)) {
        this.fileName = file.name;
        this.error = false;
        this.state = 'loaded';
      } else {
        this.error = true;
        this.fileName = '';
        this.state = 'default';
      }
    }
  }
}