import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelpPhotoComponent } from "../help-photo/help-photo.component";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { CustomButtonComponent } from "../../../../atoms/custom-button/custom-button.component";
import { ImageService } from "../../../../../services/image.service";
import { CameraComponent } from "../../../../organisms/camera/camera.component";

@Component({
  selector: "app-photo-take",
    standalone: true,
    imports: [CommonModule,CustomButtonComponent,CameraComponent],
    templateUrl: "./photo-take.component.html",
    styleUrls: ["./photo-take.component.css"],
})
export class PhotoTakeComponent {
    constructor(private bottomSheet: MatBottomSheet,
      private imageService: ImageService
    ) {
    this.imageService.capturedImage$.subscribe(imagen => {
      this.fotoCapturada = imagen;
      if (imagen) {
        // Aquí puedes realizar acciones cuando se capture una foto
        console.log('Foto capturada en content-info-camera');
      }
    });
  }
  mostrarInterfazCamara: boolean = false;
  fotoCapturada: string | null = null;
    openHelp(): void {
      this.bottomSheet.open(HelpPhotoComponent, {
        // Aquí puedes configurar distintas propiedades
        // por ejemplo, panelClass para personalizar la posición o clase CSS
        panelClass: 'custom-bottom-sheet',
        // disableClose si quieres que solo se cierre manualmente, etc.
      });
    }
    mostrarCamara(): void {
      this.mostrarInterfazCamara = true;
    }
    volverAForm(): void {
      this.mostrarInterfazCamara = false;
    }
    onFotoTomada(foto: string): void {
      this.fotoCapturada = foto;
      this.mostrarInterfazCamara = false;
    }
}