import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  ProgressNavComponent,
  NavStep,
} from '../../molecules/progress-nav/progress-nav.component';
import {
  TicketsListComponent,
  Ticket,
} from '../../organisms/tickets-list/tickets-list.component';
import { CustomButtonComponent } from '../../atoms/custom-button/custom-button.component';
import { DividerComponent } from '../../atoms/divider/divider.component';
import { LinkComponent } from '../../atoms/link/link.component';
import { SelectFieldComponent } from '../../atoms/select-field/select-field.component';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
@Component({
  selector: 'app-tickets-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProgressNavComponent,
    TicketsListComponent,
    CustomButtonComponent,
    DividerComponent,
    LinkComponent,
    SelectFieldComponent,
    InputFieldComponent
  ],
  templateUrl: './tickets-page.component.html',
  styleUrl: './tickets-page.component.css',
})
export class TicketsPageComponent {
  navSteps: NavStep[] = [
    { icon: 'fas fa-ticket-alt', label: 'Tickets', active: true },
    { icon: 'fas fa-building', label: 'Fiscal', active: false },
    { icon: 'fas fa-user', label: 'Personal', active: false },
    { icon: 'fas fa-calendar-alt', label: 'Revisión', active: false },
  ];

  tickets: Ticket[] = [
    { code: 'ASDFGHHAJSDH', price: 'N/A', selected: false },
    { code: 'TOKEN', price: '$100.00', selected: false },
    { code: 'TOKEN', price: '$100.00', selected: false },
    { code: 'TOKEN', price: '$100.00', selected: false },
    { code: 'TOKEN', price: '$100.00', selected: false },
  ];
  CFDIUsesOptions = [
    { value: 'G01', label: 'Adquisición de mercancías' },
    { value: 'G02', label: 'Devoluciones, descuentos o bonificaciones' },
    { value: 'G03', label: 'Gastos en general' }
  ]
  ticketTypeOptions = [
    { value: 'trips', label: 'Autobuses'},
    { value: 'delivery', label: 'Paqueteria' },
    { value: 'food',label: 'Comida'},
  ]
  paymentMethodOptions = [
    { value: '01', label: 'Efectivo' },
    { value: '02', label: 'Cheque nominativo' },
    { value: '03', label: 'Transferencia electrónica de fondos' },
    { value: '04', label: 'Tarjeta de crédito' }]
  onTicketSelection(event: { ticket: Ticket; selected: boolean }): void {
    console.log(
      `Ticket ${event.ticket.code} selection changed to ${event.selected}`
    );
  }

  uploadTicketPhoto(): void {
    console.log('Upload ticket photo functionality will be implemented here');
    // Aquí se implementará la funcionalidad para cargar fotos
  }

  goToManualEntry(): void {
    console.log('Manual entry functionality will be implemented here');
    // Aquí se implementará la funcionalidad para la entrada manual
  }

  goToNextStep(): void {
    console.log('Navigation to next step will be implemented here');
    // Aquí se implementará la navegación al siguiente paso
  }

  accionPrimaria(): void {
    console.log('Acción primaria ejecutada');
  }

  accionSecundaria(): void {
    console.log('Acción secundaria ejecutada');
  }

  accionTerciaria(): void {
    console.log('Acción terciaria ejecutada');
  }

  accionAcento(): void {
    console.log('Acción acento ejecutada');
  }
}
