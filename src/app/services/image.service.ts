import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private capturedImageSource = new BehaviorSubject<string | null>(null);
  public capturedImage$ = this.capturedImageSource.asObservable();
  private imageBlob: Blob | null = null;

  constructor() {}

  /**
   * Guarda la imagen capturada por la cámara
   * @param imageData La imagen en formato base64
   * @param blob El blob de la imagen (opcional)
   */
  setCapturedImage(imageData: string, blob?: Blob): void {
    this.capturedImageSource.next(imageData);
    if (blob) {
      this.imageBlob = blob;
    } else {
      // Convertir la cadena base64 a Blob si no se proporciona directamente
      this.imageBlob = this.base64ToBlob(imageData);
    }
  }

  /**
   * Obtiene la imagen capturada actual
   * @returns La última imagen capturada o null
   */
  getCurrentImage(): string | null {
    return this.capturedImageSource.value;
  }

  /**
   * Obtiene la imagen como Blob para enviar a un endpoint
   * @returns El blob de la imagen o null
   */
  getImageAsBlob(): Blob | null {
    return this.imageBlob;
  }

  /**
   * Obtiene la imagen como FormData para enviar a un endpoint
   * @param fieldName Nombre del campo del archivo (por defecto: 'image')
   * @param fileName Nombre del archivo (por defecto: 'camera_image.png')
   * @returns FormData con la imagen o null si no hay imagen
   */
  getImageFormData(fieldName: string = 'image', fileName: string = 'camera_image.png'): FormData | null {
    if (!this.imageBlob) {
      return null;
    }
    
    const formData = new FormData();
    formData.append(fieldName, this.imageBlob, fileName);
    return formData;
  }

  /**
   * Limpia la imagen almacenada
   */
  clearImage(): void {
    this.capturedImageSource.next(null);
    this.imageBlob = null;
  }

  /**
   * Convierte una cadena base64 a Blob
   * @param base64 Cadena base64 (puede incluir el prefijo data:image)
   * @returns Blob de la imagen
   */
  private base64ToBlob(base64: string): Blob {
    // Extraer la parte real de base64 si incluye el prefijo data:image
    const parts = base64.split(',');
    const base64Data = parts.length > 1 ? parts[1] : parts[0];
    
    // Obtener el tipo MIME si está disponible
    let contentType = 'image/png';
    if (parts.length > 1 && parts[0].indexOf('data:') === 0) {
      contentType = parts[0].split(':')[1].split(';')[0];
    }
    
    // Decodificar la cadena base64
    const byteCharacters = atob(base64Data);
    const byteArrays = [];
    
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    
    return new Blob(byteArrays, { type: contentType });
  }
} 