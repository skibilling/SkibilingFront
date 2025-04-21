import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoicePageComponent } from './components/pages/invoice-page/invoice-page.component';
import { TicketsPageComponent } from './components/pages/tickets-page/tickets-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvoicePageComponent, TicketsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'facturacion-app';
}
