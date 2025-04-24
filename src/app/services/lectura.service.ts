import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LecturaService {
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get('https://computervisionservice.onrender.com/');
  }
}
