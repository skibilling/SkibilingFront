import { Routes } from '@angular/router';
import { InvoicePageComponent } from './components/pages/invoice-page/invoice-page.component';
import { TicketsPageComponent } from './components/pages/tickets-page/tickets-page.component';
import { ProgressBarComponent } from './components/organisms/progress-bar/progress-bar.component';
import { PageFormComponent } from './components/pages/page-form/page-form.component';
import { Paso1Component } from './components/pages/1.payment-receipt/paso1/paso1.component';

export const routes: Routes = [
  { path: '', component: TicketsPageComponent },
  { path: 'invoice', component: InvoicePageComponent },
  { path: 'payment-receipt', component: ProgressBarComponent },
  { path: 'page-payment', component: PageFormComponent },
  {path:'paso1',component:Paso1Component},
  { path: '**', redirectTo: '' }
];
