import { Component, ViewChild, ElementRef, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from "../../atoms/custom-button/custom-button.component";
import { ImageService } from '../../../services/image.service';
import { FiscalAnalysisService } from '../../../services/fiscal-analysis.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  imports: [CommonModule, CustomButtonComponent]
})
export class CameraComponent implements OnInit {
  @ViewChild('video', { static: false }) video!: ElementRef;
  @Output() fotoTomada = new EventEmitter<string>();
  @Input() mode: 'fiscal' | 'ticket' = 'fiscal';
  
  stream!: MediaStream;
  foto: string = '';
  mostrandoFoto: boolean = false;
  textoBoton: string = 'Tomar foto';
  iconoBoton: string = 'Camera.svg';

  constructor(
    private imageService: ImageService,
    private fiscalAnalysisService: FiscalAnalysisService
  ) {}

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
    if (this.mostrandoFoto) {
      // Si ya estamos mostrando una foto, volvemos a la cámara
      this.mostrandoFoto = false;
      this.textoBoton = 'Tomar foto';
      this.iconoBoton = 'Camera.svg';
      return;
    }

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
      this.mostrandoFoto = true;
      this.textoBoton = 'Tomar otra foto';
      this.iconoBoton = 'Camera.svg';
      
      // Convertir a blob y guardar en el servicio
      canvas.toBlob((blob) => {
        if (blob) {
          // Guardar la imagen en el servicio
          this.imageService.setCapturedImage(this.foto, blob);
          
          console.log('Modo:', this.mode);
          // Enviar la imagen al servicio de análisis según el modo
          if (this.mode == "fiscal") {
            console.log(this.mode == "fiscal");
            this.fiscalAnalysisService.analyzeFiscalData(blob).subscribe({
              next: (resultado) => {
                console.log('Resultado del análisis fiscal:', resultado);
              },
              error: (error) => {
                console.error('Error al analizar datos fiscales:', error);
              }
            });
          } else if (this.mode == "ticket") {
            console.log(this.mode == "ticket");
            this.fiscalAnalysisService.analyzeTicket(blob).subscribe({
              next: (resultado) => {
                console.log('Resultado del análisis de ticket:', resultado);
              },
              error: (error) => {
                console.error('Error al analizar ticket:', error);
              }
            });
          }
        }
      }, 'image/png');
      
      // Emitir el evento
      this.fotoTomada.emit(this.foto);
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