import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckSelectorComponent } from '../../atoms/check-selector/check-selector.component';

@Component({
  selector: 'app-ticket-item',
  standalone: true,
  imports: [CommonModule, CheckSelectorComponent],
  templateUrl: './ticket-item.component.html',
  styleUrl: './ticket-item.component.css'
})
export class TicketItemComponent {
  @Input() code: string = '';
  @Input() price: string = '';
  @Input() selected: boolean = false;
  @Output() selectionChange = new EventEmitter<boolean>();

  onSelectionChange(selected: boolean): void {
    this.selected = selected;
    this.selectionChange.emit(selected);
  }
}
