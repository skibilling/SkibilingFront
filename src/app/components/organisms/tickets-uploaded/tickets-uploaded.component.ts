import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadedTicketRowComponent, TicketData } from '../../molecules/uploaded-ticket-row/uploaded-ticket-row.component';

@Component({
  selector: 'app-tickets-uploaded-list',
  standalone: true,
  imports: [CommonModule, UploadedTicketRowComponent],
  template: `
    <div class="tickets-container">
      <div class="tickets-header">
        <h2>Comprobantes subidos</h2>
        <span class="ticket-count">{{ tickets.length }} comprobantes</span>
      </div>
      
      <div class="tickets-list">
        <app-uploaded-ticket-row
          *ngFor="let ticket of tickets"
          [ticket]="ticket"
          (toggleSelect)="onTicketSelect($event)"
          (toggleExpand)="onTicketExpand($event)">
        </app-uploaded-ticket-row>
      </div>
    </div>
  `,
  styles: [`
    .tickets-container {
      padding: 1rem;
    }
    .tickets-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .tickets-header h2 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
      margin: 0;
    }
    .ticket-count {
      color: #666;
      font-size: 0.875rem;
    }
    .tickets-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `]
})
export class TicketsUploadedListComponent {
  // Array de tickets de ejemplo
  tickets: TicketData[] = [
    {
        id: '1',
        name: 'Viaje a Guadalajara',
        amount: 100,
        status: 'Listo',
        iconType: 'image',
        selected: false
    },
{
    id: '2',
    name: 'Viaje a Jalisco',
    amount: 200,
    status: 'Procesando',
    iconType: 'image',
    selected: false
},
{
    id: '3',
    name: 'Comida en Guadalajara',
    amount: 300,
    status: 'Error',
    iconType: 'food',
    selected: false
},
{
    id: '4',
    name: 'Comida en Jalisco',
    amount: 400,
    status: 'Error',
    iconType: 'food',
    selected: false
},
{
    id: '5',
    name: 'Comida en Guadalajara',
    amount: 400,
    status: 'Error',
    iconType: 'receipt',
    selected: false
},

];

  onTicketSelect(ticketId: string) {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (ticket) {
      ticket.selected = !ticket.selected;
    }
  }

  onTicketExpand(ticketId: string) {
    console.log('Ticket expandido:', ticketId);
  }
} 