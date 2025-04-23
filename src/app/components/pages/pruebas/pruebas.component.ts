import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../atoms/svg-icon/svg-icon.component';
import { HintComponent } from '../../atoms/hint/hint.component';
import { DropBoxComponent } from '../../atoms/drop-box/drop-box.component';
import { StatusBillingComponent } from '../../atoms/status-billing/status-billing.component';
import { StatusTicketsComponent } from '../../atoms/status-tickets/status-tickets.component';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, HintComponent, DropBoxComponent,StatusBillingComponent, StatusTicketsComponent],
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {
  showMessage = false;

  onLinkClick() {
    this.showMessage = true;
  }

  mostrarMensajeAdmin = () => {
    alert('¡Yo soy admin!');
  }
}
