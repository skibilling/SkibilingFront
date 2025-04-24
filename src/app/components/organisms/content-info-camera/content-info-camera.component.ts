import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from '../../atoms/titles/titles.component';
import { SimpleTextComponent } from '../../atoms/simple-text/simple-text.component';
import { HintComponent } from '../../atoms/hint/hint.component';
import { DropBoxComponent } from '../../atoms/drop-box/drop-box.component';
import { DividerComponent } from '../../atoms/divider/divider.component';
import { CustomButtonComponent } from '../../atoms/custom-button/custom-button.component';
import { BottomSheetComponent } from "../bottom-sheet/bottom-sheet.component";
import { CameraComponent } from "../camera/camera.component";
import { ImageService } from '../../../services/image.service';

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
  fotoCapturada: string | null = null;

  constructor(private imageService: ImageService) {
    // Suscribirse a cambios en la imagen
    this.imageService.capturedImage$.subscribe(imagen => {
      this.fotoCapturada = imagen;
      if (imagen) {
        // Aquí puedes realizar acciones cuando se capture una foto
        console.log('Foto capturada en content-info-camera');
      }
    });
  }

  openSAT() {
    window.open('https://www.sat.gob.mx/', '_blank');
  }

  mostrarCamara(): void {
    this.mostrarInterfazCamara = true;
  }

  onFotoTomada(foto: string): void {
    this.fotoCapturada = foto;
    // Aquí puedes realizar acciones adicionales con la foto
  }
}
