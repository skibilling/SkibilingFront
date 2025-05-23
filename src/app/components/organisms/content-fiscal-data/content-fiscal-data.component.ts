import { Component,Output,EventEmitter,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from '../../atoms/titles/titles.component';
import { SimpleTextComponent } from '../../atoms/simple-text/simple-text.component';
import { CustomButtonComponent } from '../../atoms/custom-button/custom-button.component';
import { DividerComponent } from '../../atoms/divider/divider.component';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { SelectFieldComponent } from '../../atoms/select-field/select-field.component';
import { ContentInfoCameraComponent } from '../content-info-camera/content-info-camera.component';

@Component({
  selector: 'app-content-fiscal-data',
  standalone: true,
  imports: [
    CommonModule,
    TitlesComponent,
    SimpleTextComponent,
    CustomButtonComponent,
    DividerComponent,
    InputFieldComponent,
    SelectFieldComponent,
    ContentInfoCameraComponent
  ],
  templateUrl: './content-fiscal-data.component.html',
  styleUrls: ['./content-fiscal-data.component.css']
})
export class ContentFiscalDataComponent {
  @Input() mostrarCamara: boolean = false;
  currentStep: number = 1;
  @Output() back = new EventEmitter<void>();
  @Output() advance = new EventEmitter<void>();
  CFDIUsesOptions = [
    { value: 'G01', label: 'Adquisición de mercancías' },
    { value: 'G02', label: 'Devoluciones, descuentos o bonificaciones' },
    { value: 'G03', label: 'Gastos en general' }
  ]
  Rellenar(){
    this.currentStep = 2;
  }
  advanceToStepThree() {
    this.advance.emit();
  }

}
