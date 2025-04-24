import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from "../../atoms/custom-button/custom-button.component";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  imports: [CommonModule, CustomButtonComponent]
})
export class CameraComponent {
  @ViewChild('video', { static: false }) video!: ElementRef;
  stream!: MediaStream;
  foto?: string;

  iniciarCamara(): void {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: 'user' } }) // Para cámara frontal
        .then((stream: MediaStream) => {
          this.stream = stream;
          const videoElement = this.video.nativeElement as HTMLVideoElement;
          videoElement.srcObject = stream;
          videoElement.play();
        })
        .catch((error) => {
          console.error('Error al acceder a la cámara:', error);
        });
    } else {
      console.warn('Tu navegador no soporta el acceso a la cámara.');
    }
  }

  tomarFoto(): void {
    if (!this.stream) {
      console.log('La cámara no está activa.');
      return;
    }

    const videoElement = this.video.nativeElement as HTMLVideoElement;
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    
    const context = canvas.getContext('2d');
    if (context) {
      console.log('Tomando foto...');
      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      this.foto = canvas.toDataURL('image/png');
    }
  }
}