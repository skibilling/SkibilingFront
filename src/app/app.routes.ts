import { Routes } from '@angular/router';
import { InvoicePageComponent } from './components/pages/invoice-page/invoice-page.component';
import { TicketsPageComponent } from './components/pages/tickets-page/tickets-page.component';
import { PaymentReceiptComponent } from './components/pages/1.payment-receipt/steps/payment-receipt.component';

export const routes: Routes = [
  { path: '', component: TicketsPageComponent },
  { path: 'invoice', component: InvoicePageComponent },
  { path: 'payment-receipt', component: PaymentReceiptComponent },
  { path: '**', redirectTo: '' }
];
