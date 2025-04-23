import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoicePageComponent } from './components/pages/invoice-page/invoice-page.component';
import { TicketsPageComponent } from './components/pages/tickets-page/tickets-page.component';
import { DropBoxComponent } from "./components/atoms/drop-box/drop-box.component";
import { PruebasComponent } from './components/pages/pruebas/pruebas.component';
import { LandingComponent } from "./components/pages/landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvoicePageComponent, TicketsPageComponent, DropBoxComponent, PruebasComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'facturacion-app';
}
