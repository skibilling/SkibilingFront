import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from '../../atoms/titles/titles.component';
import { SimpleTextComponent } from '../../atoms/simple-text/simple-text.component';
import { HintComponent } from '../../atoms/hint/hint.component';
import { DropBoxComponent } from '../../atoms/drop-box/drop-box.component';
import { DividerComponent } from '../../atoms/divider/divider.component';
import { CustomButtonComponent } from '../../atoms/custom-button/custom-button.component';
import { BottomSheetComponent } from "../bottom-sheet/bottom-sheet.component";
import { CameraComponent } from '../camera/camera.component';

@Component({
  selector: 'app-content-info-camera',
  standalone: true,
  imports: [
    CommonModule,
    TitlesComponent,
    SimpleTextComponent,
    HintComponent,
    DropBoxComponent,
    DividerComponent,
    CustomButtonComponent,
    BottomSheetComponent,
    CameraComponent
  ],
  templateUrl: './content-info-camera.component.html',
  styleUrls: ['./content-info-camera.component.css']
})
export class ContentInfoCameraComponent {
  mostrarInterfazCamara: boolean = false;

  openSAT() {
    window.open('https://www.sat.gob.mx/', '_blank');
  }

  mostrarCamara(): void {
    this.mostrarInterfazCamara = true;
  }
}
