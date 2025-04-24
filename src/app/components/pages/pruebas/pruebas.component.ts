import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../atoms/svg-icon/svg-icon.component';
import { HintComponent } from '../../atoms/hint/hint.component';
import { DropBoxComponent } from '../../atoms/drop-box/drop-box.component';
import { StatusBillingComponent } from '../../atoms/status-billing/status-billing.component';
import { StatusTicketsComponent } from '../../atoms/status-tickets/status-tickets.component';
import { NavigationBarComponent } from "../../molecules/navigation-bar/navigation-bar.component";
import { LandingComponent } from '../landing/landing.component';
import { DividerComponent } from "../../atoms/divider/divider.component";
import { TicketsPageComponent } from '../tickets-page/tickets-page.component';
import { ContentFiscalDataComponent } from "../../organisms/content-fiscal-data/content-fiscal-data.component";
import { ContentInfoCameraComponent } from '../../organisms/content-info-camera/content-info-camera.component';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, HintComponent, DropBoxComponent, StatusBillingComponent, StatusTicketsComponent, NavigationBarComponent, LandingComponent, DividerComponent, TicketsPageComponent, ContentFiscalDataComponent, ContentInfoCameraComponent],
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
