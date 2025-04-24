import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiscalAnalysisService {
  private apiUrl = 'https://computervisionservice.onrender.com/api/v1';

  constructor(private http: HttpClient) { }

  /**
   * Analiza una imagen para extraer datos fiscales
   * @param imageBlob La imagen como Blob
   * @returns Observable con la respuesta del servicio
   */
  analyzeFiscalData(imageBlob: Blob): Observable<any> {
    const formData = new FormData();
    formData.append('file', imageBlob, 'fiscal_image.png');
    
    return this.http.post(`${this.apiUrl}/fiscal/`, formData);
  }

  /**
   * Analiza una imagen para extraer datos de un ticket
   * @param imageBlob La imagen como Blob
   * @returns Observable con la respuesta del servicio
   */
  analyzeTicket(imageBlob: Blob): Observable<any> {
    const formData = new FormData();
    formData.append('file', imageBlob, 'ticket_image.png');
    
    return this.http.post(`${this.apiUrl}/ticket/`, formData);
  }
} 