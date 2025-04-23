import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-tickets.component.html',
  styleUrls: ['./status-tickets.component.css']
})
export class StatusTicketsComponent {
  @Input() status: 'error' | 'processing' | 'ready' = 'error';
}
