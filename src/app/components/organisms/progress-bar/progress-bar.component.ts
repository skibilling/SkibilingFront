import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { StepperComponent } from '../../molecules/stepper/stepper.component';
import { PageFormComponent } from '../../pages/page-form/page-form.component';
import { StepComponent } from '../../atoms/step/step.component';
import { StepOneComponent } from '../../pages/1.payment-receipt/step-one/step-one.component';
import { UploadManualTokenComponent } from '../../pages/1.payment-receipt/upload-manual-token/upload-manual-token.component';
import { UploadFileComponent } from '../../pages/1.payment-receipt/upload-file/upload-file.component';
import { UploadPhotoComponent } from '../../pages/1.payment-receipt/upload-photo/upload-photo.component';
import { ContentFiscalDataComponent } from '../content-fiscal-data/content-fiscal-data.component';
import { WelcomeInvoiceComponent } from '../../pages/1.payment-receipt/welcome-invoice/welcome-invoice.component';
import { PageValidationComponent } from '../../pages/4.data.Validation/page-validation/page-validation.component';
import { FormInformationComponent } from '../../pages/3.information-&-adress/formInformation/form-Information.component';
@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule, StepperComponent, PageFormComponent,StepComponent,
    StepOneComponent,UploadManualTokenComponent,UploadFileComponent,UploadPhotoComponent,
  ContentFiscalDataComponent,WelcomeInvoiceComponent,PageValidationComponent,
FormInformationComponent],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  currentStep: number = 0;
  highestStepReached: number = 0; // Almacena el paso más alto alcanzado
  showMessage: boolean = false;
  message: string = '';
  isNavigatingBack: boolean = false;
  isProcessCompleted: boolean=false;
  @Output() advance = new EventEmitter<void>();
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
  handleStartInvoicing() {
    this.nextStep(); // Avanzar al paso 1
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
  advanceToStepTwo(): void {
    console.log('avanzando a paso 222222');
    this.currentStep = 2;
    this.highestStepReached = 2;
  }
  advanceToStepThree(): void {
    console.log('avanzando a paso 3333333');
    this.currentStep = 3;
    this.highestStepReached = 3;
    this.advance.emit(); // Emitir el evento de avance
  }
  advanceToStepFour(): void {
    console.log('avanzando a paso 4444444');
    this.currentStep = 4;
    this.advance.emit(); // Emitir el evento de avance
  }
  goTo(step: number): void {
    console.log(`Navegando al paso ${step}`);
    
    // Validar que el paso esté dentro del rango válido
    if (step >= 0 && step <= this.highestStepReached) {
      this.currentStep = step;
      this.isNavigatingBack = step < this.currentStep;
    } else {
      console.warn(`Intento de navegación a un paso no permitido: ${step}`);
    }
  }
}