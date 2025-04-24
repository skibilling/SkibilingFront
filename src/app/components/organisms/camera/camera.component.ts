import { Component, ViewChild, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from "../../atoms/custom-button/custom-button.component";
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  imports: [CommonModule, CustomButtonComponent]
})
export class CameraComponent implements OnInit {
  @ViewChild('video', { static: false }) video!: ElementRef;
  @Output() fotoTomada = new EventEmitter<string>();
  
  stream!: MediaStream;
  foto: string = '';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.iniciarCamara();
  }

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
      
      // Obtener la imagen como base64
      this.foto = canvas.toDataURL('image/png');
      
      // Obtener la imagen como blob
      canvas.toBlob((blob) => {
        if (blob) {
          // Guardar tanto la imagen base64 como el blob
          this.imageService.setCapturedImage(this.foto, blob);
          
          // Emitir evento para que otros componentes sepan que se tomó una foto
          this.fotoTomada.emit(this.foto);
          
          // Detener la cámara después de tomar la foto
          this.detenerCamara();
        }
      }, 'image/png');
    }
  }

  detenerCamara(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

  ngOnDestroy(): void {
    this.detenerCamara();
  }
}