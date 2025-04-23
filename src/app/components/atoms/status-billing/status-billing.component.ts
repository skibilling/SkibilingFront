import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-billing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-billing.component.html',
  styleUrls: ['./status-billing.component.css']
})
export class StatusBillingComponent {
  @Input() status: 'error' | 'processing' | 'canceled' | 'ready' = 'error';
}
