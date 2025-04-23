import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../../../molecules/stepper/stepper.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-receipt',
  standalone: true,
  imports: [CommonModule, StepperComponent],
  templateUrl: './payment-receipt.component.html',
  styleUrls: ['./payment-receipt.component.css']
})
export class PaymentReceiptComponent implements OnInit {
  currentStep: number = 1;
  highestStepReached: number = 1; // Almacena el paso más alto alcanzado
  showMessage: boolean = false;
  message: string = '';
  isNavigatingBack: boolean = false;
  isProcessCompleted: boolean=false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicializar el componente
  }

  onStepChange(newStep: number): void {
    if (newStep <= this.highestStepReached) {
      this.currentStep = newStep;
      if (newStep < this.currentStep) {
        this.isNavigatingBack = true;
      }
    }
  }

  nextStep(): void {
    if (this.currentStep < 4) {
      this.currentStep++;
      // Actualizar el paso más alto alcanzado
      if (this.currentStep > this.highestStepReached) {
        this.highestStepReached = this.currentStep;
      }
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.onStepChange(this.currentStep - 1);
    }
  }

  finishProcess(): void {
    // Aquí iría la lógica para finalizar el proceso
    this.currentStep = 5;
    this.highestStepReached = 5;
    this.isProcessCompleted=true;
  }

  // Método para verificar si un paso está disponible para navegación
  isStepAvailable(step: number): boolean {
    return step <= this.highestStepReached;
  }
} 