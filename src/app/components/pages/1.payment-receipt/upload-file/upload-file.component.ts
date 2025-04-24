import { Component,EventEmitter,Output } from '@angular/core';
import { TitlesComponent } from '../../../atoms/titles/titles.component';
import { SimpleTextComponent } from '../../../atoms/simple-text/simple-text.component';
import { DropBoxComponent } from '../../../atoms/drop-box/drop-box.component';
import { HintComponent } from '../../../atoms/hint/hint.component';
import { DividerComponent } from '../../../atoms/divider/divider.component';
import { CustomButtonComponent } from '../../../atoms/custom-button/custom-button.component';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
  imports:[TitlesComponent,SimpleTextComponent,DropBoxComponent,HintComponent,DividerComponent,CustomButtonComponent]
})
export class UploadFileComponent {
  selectedFile: File | null = null;
  showCameraPreview = false;
  @Output() back = new EventEmitter<void>();
  @Output() complete = new EventEmitter<any>();
  
  onGoBack() {
    this.back.emit();
  }
  
  onSubmit() {
    if (this.selectedFile) {
      // Aquí procesas el archivo y emites el evento
      this.complete.emit({
        type: 'photo',
        file: this.selectedFile
      });
    }
  }
}

