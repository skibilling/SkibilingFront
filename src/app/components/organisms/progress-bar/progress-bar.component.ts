import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { StepperComponent } from '../../molecules/stepper/stepper.component';
import { PageFormComponent } from '../../pages/page-form/page-form.component';
import { StepComponent } from '../../atoms/step/step.component';
import { StepOneComponent } from '../../pages/1.payment-receipt/step-one/step-one.component';
import { UploadManualTokenComponent } from '../../pages/1.payment-receipt/upload-manual-token/upload-manual-token.component';
import { UploadFileComponent } from '../../pages/1.payment-receipt/upload-file/upload-file.component';
import { UploadPhotoComponent } from '../../pages/1.payment-receipt/upload-photo/upload-photo.component';
@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule, StepperComponent, PageFormComponent,StepComponent,
    StepOneComponent,UploadManualTokenComponent,UploadFileComponent,UploadPhotoComponent],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
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