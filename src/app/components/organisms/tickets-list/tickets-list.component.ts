import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketItemComponent } from '../../molecules/ticket-item/ticket-item.component';

export interface Ticket {
  code: string;
  price: string;
  selected: boolean;
}

@Component({
  selector: 'app-tickets-list',
  standalone: true,
  imports: [CommonModule, TicketItemComponent],
  templateUrl: './tickets-list.component.html',
  styleUrl: './tickets-list.component.css'
})
export class TicketsListComponent {
  @Input() tickets: Ticket[] = [];
  @Output() ticketSelection = new EventEmitter<{ticket: Ticket, selected: boolean}>();

  onTicketSelectionChange(ticket: Ticket, selected: boolean): void {
    ticket.selected = selected;
    this.ticketSelection.emit({ticket, selected});
  }
}
