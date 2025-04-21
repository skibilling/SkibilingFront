import { Routes } from '@angular/router';
import { InvoicePageComponent } from './components/pages/invoice-page/invoice-page.component';
import { TicketsPageComponent } from './components/pages/tickets-page/tickets-page.component';

export const routes: Routes = [
  { path: '', component: TicketsPageComponent },
  { path: 'invoice', component: InvoicePageComponent },
  { path: '**', redirectTo: '' }
];
