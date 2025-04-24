import { Component, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimpleTextComponent } from "../../../atoms/simple-text/simple-text.component";
import { TitlesComponent } from "../../../atoms/titles/titles.component";
import { InputFieldComponent } from "../../../atoms/input-field/input-field.component";
import { SelectFieldComponent } from "../../../atoms/select-field/select-field.component";
import { CheckSelectorComponent } from "../../../atoms/check-selector/check-selector.component";
import { CustomButtonComponent } from "../../../atoms/custom-button/custom-button.component";

@Component({
  selector: "app-form-information",
  standalone: true,
  imports: [
    CommonModule,
    SimpleTextComponent,
    TitlesComponent,
    InputFieldComponent,
    SelectFieldComponent,
    CheckSelectorComponent,
    CustomButtonComponent
  ],
  templateUrl: "./form-information.component.html",
  styleUrls: ["./form-information.component.css"]
})
export class FormInformationComponent {
  @Output() advance = new EventEmitter<void>();
  
  // Variable para controlar la visibilidad de la dirección completa
  showFullAddress: boolean = false;
  
  // Datos del formulario
  nombre: string = '';
  email: string = '';
  codigoPostal: string = '';
  
  // Datos de dirección completa
  calle: string = '';
  colonia: string = '';
  numeroInterior: string = '';
  numeroExterior: string = '';
  municipioSeleccionado: string = '';
  estadoSeleccionado: string = '';
  
  estados = [
    {value: 'Aguascalientes', label: 'Aguascalientes'},
    {value: 'Baja California', label: 'Baja California'},
    {value: 'Baja California Sur', label: 'Baja California Sur'},
    {value: 'Campeche', label: 'Campeche'}  
  ];
  
  municipios = [
    {value: 'Aguascalientes', label: 'Aguascalientes'},
    {value: 'Baja California', label: 'Baja California'},
    {value: 'Baja California Sur', label: 'Baja California Sur'}
  ];
  
  // Método para guardar la dirección
  saveAddress() {
    console.log('Dirección guardada', {
      calle: this.calle,
      colonia: this.colonia,
      numeroInterior: this.numeroInterior,
      numeroExterior: this.numeroExterior,
      municipio: this.municipioSeleccionado,
      estado: this.estadoSeleccionado
    });
    // Aquí podrías añadir lógica para validar los campos antes de mostrar un mensaje de éxito
    alert('Dirección guardada correctamente');
  }
  
  // Método para avanzar al siguiente paso
  advanceToStepFour() {
    // Si el checkbox está activado, validamos que la dirección completa esté llena
    if (this.showFullAddress) {
      // Campos obligatorios de la dirección completa
      if (!this.calle || !this.colonia || !this.numeroExterior || 
          !this.municipioSeleccionado || !this.estadoSeleccionado) {
        alert('Por favor completa todos los campos obligatorios de la dirección');
        return;
      }
    }
    
    // Validar campos principales
    if (!this.nombre || !this.email || !this.codigoPostal) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }
    
    console.log('Avanzando a paso 4');
    this.advance.emit();
  }
  
  // Método para manejar el cambio en el checkbox de dirección completa
  toggleFullAddress(checked: boolean) {
    this.showFullAddress = checked;
    console.log('Mostrar dirección completa:', this.showFullAddress);
  }
  checkedChange(event: any) {

    console.log('Checkbox cambiado:');
  }
}