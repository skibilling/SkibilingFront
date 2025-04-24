import { Component } from '@angular/core';
import { ExampleReceiptComponent } from '../upload-file/example-receipt/example-receipt.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { UploadManualTokenComponent } from '../upload-manual-token/upload-manual-token.component';
import { UploadPhotoComponent } from '../upload-photo/upload-photo.component';
import { StepOneComponent } from '../step-one/step-one.component';
import { HelpPhotoComponent } from '../upload-photo/help-photo/help-photo.component';
import { PhotoTakeComponent } from '../upload-photo/photo-take/photo-take.component';

@Component({
  selector: 'app-paso1',
  imports: [ExampleReceiptComponent,UploadFileComponent,UploadManualTokenComponent,UploadPhotoComponent,
    StepOneComponent,HelpPhotoComponent,PhotoTakeComponent
  ],
  templateUrl: './paso1.component.html',
  styleUrl: './paso1.component.css'
})
export class Paso1Component {

}
