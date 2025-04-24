import { Component,EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TitlesComponent } from '../../../atoms/titles/titles.component';
import { SimpleTextComponent } from '../../../atoms/simple-text/simple-text.component';
import { DropBoxComponent } from '../../../atoms/drop-box/drop-box.component';
import { HintComponent } from '../../../atoms/hint/hint.component';
import { DividerComponent } from '../../../atoms/divider/divider.component';
import { CustomButtonComponent } from '../../../atoms/custom-button/custom-button.component';
import { PhotoTakeComponent } from './photo-take/photo-take.component';

@Component({
  selector: 'app-upload-photo',
  standalone: true,
  imports: [
    CommonModule,
    TitlesComponent,
    SimpleTextComponent,
    DropBoxComponent,
    HintComponent,
    DividerComponent,
    CustomButtonComponent
  ],
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent {
  selectedFile: File | null = null;
  showCameraPreview = false;
  @Output() back = new EventEmitter<void>();
  @Output() complete = new EventEmitter<any>();
  
  constructor(private bottomSheet: MatBottomSheet) {}

  openCamera():void{
    this.bottomSheet.open(PhotoTakeComponent, {
      panelClass: 'custom-bottom-sheet',
    });
  }
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