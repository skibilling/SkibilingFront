import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent {
  @Input() stepType: 'Ticket' | 'Building' | 'User' | 'Calendar-check' = 'Ticket';
  @Input() isActive: boolean = false;
  @Input() isCompleted: boolean = false;
  @Input() allCompleted: boolean = false;
  @Input() isAvailable: boolean = false;

  getStepIcon(): string {
    return `${this.stepType}.svg`;
  }

  getStepColor(): string {
    if (this.allCompleted) {
      return '#FFFFFF'; // Color blanco para íconos cuando todo está en verde
    }
    if (this.isActive || this.isCompleted || this.isAvailable) {
      return '#FFFFFF';
    }
    return '#ADADAD';
  }

  getStepClass(): string {
    if (this.allCompleted) return 'all-completed';
    if (this.isActive) return 'active';
    if (this.isCompleted) return 'completed';
    if (this.isAvailable) return 'available';
    return '';
  }
}