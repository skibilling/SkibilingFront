import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProgressNavComponent, NavStep } from '../../molecules/progress-nav/progress-nav.component';
import { TicketsListComponent, Ticket } from '../../organisms/tickets-list/tickets-list.component';
import { CustomButtonComponent } from '../../atoms/custom-button/custom-button.component';
import { DividerComponent } from '../../atoms/divider/divider.component';

@Component({
  selector: 'app-tickets-page',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    ProgressNavComponent, 
    TicketsListComponent, 
    CustomButtonComponent,
    DividerComponent
  ],
  templateUrl: './tickets-page.component.html',
  styleUrl: './tickets-page.component.css'
})
export class TicketsPageComponent {
  navSteps: NavStep[] = [
    { icon: 'fas fa-ticket-alt', label: 'Tickets', active: true },
    { icon: 'fas fa-building', label: 'Fiscal', active: false },
    { icon: 'fas fa-user', label: 'Personal', active: false },
    { icon: 'fas fa-calendar-alt', label: 'Revisión', active: false }
  ];

  tickets: Ticket[] = [
    { code: 'ASDFGHHAJSDH', price: 'N/A', selected: false },
    { code: 'TOKEN', price: '$100.00', selected: false },
    { code: 'TOKEN', price: '$100.00', selected: false },
    { code: 'TOKEN', price: '$100.00', selected: false },
    { code: 'TOKEN', price: '$100.00', selected: false }
  ];

  onTicketSelection(event: {ticket: Ticket, selected: boolean}): void {
    console.log(`Ticket ${event.ticket.code} selection changed to ${event.selected}`);
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
}
