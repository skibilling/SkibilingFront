import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  template: `
    <div class="bottom-sheet-content">
      <h2>Contenido de la Bottom Sheet</h2>
      <p>¡Hola desde la parte inferior de machimburri!</p>
    </div>
  `,
  styles: [`
    .bottom-sheet-content {
      padding: 16px;
      /* Ajusta estilos según tus necesidades */
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `]
})
export class BottomSheetComponent {}