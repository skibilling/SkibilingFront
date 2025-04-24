import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../atoms/svg-icon/svg-icon.component';

export type TicketStatus = 'Error' | 'Procesando' | 'Listo';

export interface TicketData {
  id: string;
  name: string;
  amount: number;
  status: TicketStatus;
  iconType: 'receipt' | 'image' |'food'; // receipt para comprobantes de tipo texto, image para imágenes
  selected?: boolean;
  description?: string;
}

@Component({
  selector: 'app-uploaded-ticket-row',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './uploaded-ticket-row.component.html',
  styleUrls: ['./uploaded-ticket-row.component.css'],
})
export class UploadedTicketRowComponent implements OnInit {
  @Input() ticket!: TicketData;
  @Output() toggleSelect = new EventEmitter<string>();
  @Output() toggleExpand = new EventEmitter<string>();

  isExpanded: boolean = false;

  ngOnInit(): void {
    // Validación para asegurarnos de que ticket está definido
    if (!this.ticket) {
      console.error('UploadedTicketRowComponent: ticket input is undefined');
    }
  }

  // Método para manejar la selección del ticket
  onToggleSelect(): void {
    if (this.ticket) {
      this.toggleSelect.emit(this.ticket.id);
    }
  }

  // Método para expandir/contraer el detalle del ticket
  onToggleExpand(): void {
    if (this.ticket) {
      this.isExpanded = !this.isExpanded;
      this.toggleExpand.emit(this.ticket.id);
    }
  }

  // Método para obtener el color según el estado
  getStatusColor(): string {
    if (!this.ticket) return '#9E9E9E'; // Color por defecto si no hay ticket
    
    switch (this.ticket.status) {
      case 'Error':
        return '#F44336'; // Rojo
      case 'Procesando':
        return '#FF9800'; // Naranja
      case 'Listo':
        return '#4CAF50'; // Verde
      default:
        return '#9E9E9E'; // Gris por defecto
    }
  }
}