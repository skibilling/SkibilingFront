import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from '../../atoms/step/step.component';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, StepComponent],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input() currentStep: number = 1;
  @Input() highestStepReached: number = 1;
  @Input() isProcessCompleted: boolean = false;
  @Output() stepChange = new EventEmitter<number>();
  
  steps = [
    { type: 'Ticket' as const },
    { type: 'Building' as const },
    { type: 'User' as const },
    { type: 'Calendar-check' as const }
  ];

  ngOnInit() {
    // Si se recibe un currentStep inicial, actualizar highestStepReached
    if (this.currentStep > this.highestStepReached) {
      this.highestStepReached = this.currentStep;
    }
    if(this.isProcessCompleted){
      this.highestStepReached=5;
    }
  }

  isStepActive(index: number): boolean {
    if (this.isProcessCompleted) return false;
    return index === this.currentStep - 1;
  }

  isStepCompleted(index: number): boolean {
    if (this.isProcessCompleted) return true;
    return index < this.highestStepReached;
  }

  isAllCompleted(): boolean {
    return this.isProcessCompleted;
  }

  isStepAvailable(index: number): boolean {
    if (this.isProcessCompleted) return false;
    return index + 1 <= this.highestStepReached;
  }

  isConnectorActive(index: number): boolean {
    if (this.isProcessCompleted) return true;
    return index < this.highestStepReached - 1;
  }

  onStepClick(index: number): void {
    if (!this.isProcessCompleted && this.isStepAvailable(index)) {
      this.stepChange.emit(index + 1);
    }
  }
}