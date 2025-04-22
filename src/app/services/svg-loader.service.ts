import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SvgLoaderService {
  // Cache para almacenar SVGs ya cargados
  private svgCache: Map<string, Observable<SafeHtml>> = new Map();

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  /**
   * Carga un SVG y lo modifica con el color especificado
   * @param path Ruta del archivo SVG (relativa a assets)
   * @param color Color a aplicar (en formato CSS válido)
   * @returns Observable con el HTML seguro del SVG
   */
  loadSvg(path: string, color: string = 'currentColor'): Observable<SafeHtml> {
    const cacheKey = `${path}:${color}`;

    if (this.svgCache.has(cacheKey)) {
      return this.svgCache.get(cacheKey)!;
    }

    const svgObservable = this.http
      .get(`assets/${path}`, { responseType: 'text' })
      .pipe(
        map((svgContent) => {
          // Modificar el stroke y fill para que coincida con el color deseado
          const modifiedSvg = svgContent
            .replace(/stroke="[^"]*"/g, `stroke="${color}"`)
            .replace(/fill="[^"]*"/g, `fill="none"`);

          return this.sanitizer.bypassSecurityTrustHtml(modifiedSvg);
        }),
        catchError((error) => {
          console.error(`Error al cargar el SVG ${path}:`, error);
          // Crear un SVG vacío en lugar de retornar null
          return of(this.sanitizer.bypassSecurityTrustHtml('<svg></svg>'));
        }),
        shareReplay(1)
      );

    this.svgCache.set(cacheKey, svgObservable);
    return svgObservable;
  }
}
