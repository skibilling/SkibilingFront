import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from '../../atoms/step/step.component';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, StepComponent],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  @Input() currentStep: number = 1;

  steps = [
    { type: 'Ticket' as const },
    { type: 'Building' as const },
    { type: 'User' as const },
    { type: 'Calendar-check' as const }
  ];

  isStepActive(index: number): boolean {
    return index === this.currentStep - 1 && this.currentStep <= 4;
  }

  isStepCompleted(index: number): boolean {
    return index < this.currentStep - 1 && this.currentStep <= 4;
  }

  isAllCompleted(): boolean {
    return this.currentStep === 5;
  }
}