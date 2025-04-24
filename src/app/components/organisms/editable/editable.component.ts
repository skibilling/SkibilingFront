import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from '../../atoms/titles/titles.component';
import { SimpleTextComponent } from '../../atoms/simple-text/simple-text.component';
import { CustomButtonComponent } from '../../atoms/custom-button/custom-button.component';
import { DividerComponent } from '../../atoms/divider/divider.component';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { SelectFieldComponent } from '../../atoms/select-field/select-field.component';
import { ContentInfoCameraComponent } from '../content-info-camera/content-info-camera.component';

@Component({
  selector: 'app-editable',
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
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})
export class ContentFiscalDataComponentEditable implements OnChanges {
  @Input() mostrarCamara: boolean = false;
  @Input() rfc: string = '';
  @Input() options: string = 'Adquisición de mercancías';
  @Input() usoCFDI: string = 'Gastos en general';

  currentStep: number = 1;
  @Output() back = new EventEmitter<void>();
  @Output() advance = new EventEmitter<void>();
  @Output() formSubmit = new EventEmitter<any>();
  
  CFDIUsesOptions = [
    { value: 'G01', label: 'Adquisición de mercancías' },
    { value: 'G02', label: 'Devoluciones, descuentos o bonificaciones' },
    { value: 'G03', label: 'Gastos en general' }
  ]
  
  // Este método se ejecuta cada vez que cambia un Input
  ngOnChanges(changes: SimpleChanges): void {
    // Verifica si el RFC ha cambiado
    if (changes['rfc'] && changes['rfc'].currentValue) {
      console.log('RFC actualizado en editable:', changes['rfc'].currentValue);
      // Aquí puedes realizar cualquier acción necesaria cuando cambie el RFC
      
      // Por ejemplo, podrías actualizar otros campos del formulario
      // o emitir un evento al componente padre
    }
  }
  
  Rellenar(){
    this.currentStep = 2;
  }
  
  advanceToStepThree() {
    // Recopilar datos del formulario
    const datosFormulario = {
      rfc: this.rfc,
      usoCFDI: this.usoCFDI,
      // Otros campos que necesites enviar
    };
    
    // Emitir los datos al componente padre
    this.formSubmit.emit(datosFormulario);
    
    // Avanzar al siguiente paso
    this.advance.emit();
  }
}
