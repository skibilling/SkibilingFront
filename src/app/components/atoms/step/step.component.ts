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
  svg = '';

  getStepIcon(): string {
    this.svg = this.stepType + ".svg";
    return this.svg;
  }
}