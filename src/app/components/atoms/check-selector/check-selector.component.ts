import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-selector.component.html',
  styleUrl: './check-selector.component.css'
})
export class CheckSelectorComponent {
  @Input() selected: boolean = false;
  @Output() selectionChange = new EventEmitter<boolean>();
  @Input() text: string = '';
  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectionChange.emit(this.selected);
  }
}
