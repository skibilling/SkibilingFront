import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from "../svg-icon/svg-icon.component";

@Component({
  selector: 'app-hint',
  standalone: true,
  imports: [SvgIconComponent, CommonModule],
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent {
  @Input() type: 'info' | 'error' | 'link' = 'info';
  @Input() text: string = "";
  @Input() onClickAction: () => void = () => {};
  @Input() linkUrl: string = "";
  @Output() linkClicked = new EventEmitter<void>();

  getIconColor(): string {
    switch(this.type) {
      case 'error':
        return 'red';
      case 'link':
        return '#0066cc';
      default:
        return 'gray';
    }
  }

  handleClick() {
    if (this.type === 'link') {
      this.onClickAction();
      this.linkClicked.emit();
    }
  }
}