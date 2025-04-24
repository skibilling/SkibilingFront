import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../atoms/svg-icon/svg-icon.component';
import { HintComponent } from '../../atoms/hint/hint.component';
import { DropBoxComponent } from '../../atoms/drop-box/drop-box.component';
import { StatusBillingComponent } from '../../atoms/status-billing/status-billing.component';
import { StatusTicketsComponent } from '../../atoms/status-tickets/status-tickets.component';
import { NavigationBarComponent } from "../../molecules/navigation-bar/navigation-bar.component";
import { LandingComponent } from '../landing/landing.component';
import { DividerComponent } from "../../atoms/divider/divider.component";
import { TicketsPageComponent } from '../tickets-page/tickets-page.component';
import { ContentFiscalDataComponent } from "../../organisms/content-fiscal-data/content-fiscal-data.component";
import { ContentInfoCameraComponent } from '../../organisms/content-info-camera/content-info-camera.component';
import { CameraComponent } from "../../organisms/camera/camera.component";
import { SelectFieldComponent } from "../../atoms/select-field/select-field.component";
import { FiscalAnalysisService } from '../../../services/fiscal-analysis.service';
import { ImageService } from '../../../services/image.service';
import { ContentFiscalDataComponentEditable } from "../../organisms/editable/editable.component";
import { ExampleTicketComponent } from "../1.payment-receipt/example-ticket/example-ticket.component";
import { InputFieldComponent } from "../../atoms/input-field/input-field.component";
@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    HintComponent,
    DropBoxComponent,
    StatusBillingComponent,
    StatusTicketsComponent,
    NavigationBarComponent,
    LandingComponent,
    DividerComponent,
    TicketsPageComponent,
    ContentFiscalDataComponent,
    ContentInfoCameraComponent,
    CameraComponent,
    SelectFieldComponent,
    ContentFiscalDataComponentEditable,
    ExampleTicketComponent, 
    InputFieldComponent
],
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  showMessage = false;
  
  // Resultados de la API
  fiscalData: any = {
    rfc: null,
    razonSocial: null,
    regimenFiscal: null,
    usoCFDI: null,
    nombreComercial: null,
    estatusPadron: null,
    fechaInicioOperaciones: null,
    fechaUltimoCambioEstado: null,
    correoElectronico: null,
    direccion: {
      codigoPostal: null,
      calle: null,
      numeroExterior: null,
      numeroInterior: null,
      colonia: null,
      ciudad: null,
      municipio: null,
      estado: null,
      tipoVialidad: null,
      entreCalle: null,
      yCalle: null
    }
  };
  ticketData: any = null;
  
  // Modo de la cámara (fiscal o ticket)
  camaraMode: 'fiscal' | 'ticket' = 'fiscal';
  
  // Objeto Array para usar en la plantilla
  Array = Array;
  
  // Estado de procesamiento
  procesando = false;
  
  // Datos fiscales de ejemplo para el formulario editable
  datosEjemplo = {
    rfc: 'XAXX010101000',
    razonSocial: 'Empresa de Prueba S.A. de C.V.',
    regimenFiscal: '601',
    usoCFDI: 'G03',
    direccion: {
      calle: 'Av. Siempre Viva',
      numeroExterior: '742',
      numeroInterior: '',
      colonia: 'Springfield',
      codigoPostal: '12345',
      ciudad: 'Springfield',
      estado: 'Springfield',
      pais: 'México'
    },
    correo: 'ejemplo@empresa.com',
    telefono: '5555555555'
  };
  
  // Para almacenar los datos actualizados
  datosActualizados: any = null;
  
  constructor(
    private fiscalService: FiscalAnalysisService,
    private imageService: ImageService
  ) {}
  
  ngOnInit(): void {
    // Ya no es necesario suscribirse aquí, usaremos el evento fotoTomada
  }
  
  // Procesa la foto tomada directamente desde el evento del componente de cámara
  procesarFotoTomada(imagenBase64: string): void {
    console.log('Foto tomada, procesando...');
    
    // Obtener el blob de la imagen del servicio
    const blob = this.imageService.getImageAsBlob();
    if (!blob) {
      console.error('No se pudo obtener el blob de la imagen');
      return;
    }
    
    // Procesar según el modo
    if (this.camaraMode === 'fiscal') {
      this.analizarDatosFiscalesDirectamente(blob);
    } else {
      this.analizarTicketDirectamente(blob);
    }
  }
  
  // Cambia el modo de la cámara
  cambiarModoCamara(modo: 'fiscal' | 'ticket'): void {
    this.camaraMode = modo;
    // Limpiar datos al cambiar de modo
    if (modo === 'fiscal') {
      this.ticketData = null;
    } else {
      // Reinicializamos fiscalData en lugar de establecerlo a null para mantener la estructura
      this.fiscalData = {
        rfc: null,
        razonSocial: null,
        regimenFiscal: null,
        usoCFDI: null,
        nombreComercial: null,
        estatusPadron: null,
        fechaInicioOperaciones: null,
        fechaUltimoCambioEstado: null,
        correoElectronico: null,
        direccion: {
          codigoPostal: null,
          calle: null,
          numeroExterior: null,
          numeroInterior: null,
          colonia: null,
          ciudad: null,
          municipio: null,
          estado: null,
          tipoVialidad: null,
          entreCalle: null,
          yCalle: null
        }
      };
    }
  }
  
  // Método para procesar datos fiscales directamente desde la imagen
  analizarDatosFiscalesDirectamente(blob: Blob): void {
    // Evitar procesamiento múltiple
    if (this.procesando) return;
    
    this.procesando = true;
    console.log('Analizando datos fiscales...');
    
    // Reinicializar fiscalData con estructura vacía pero válida
    this.fiscalData = {
      rfc: null,
      razonSocial: null,
      regimenFiscal: null,
      usoCFDI: null,
      nombreComercial: null,
      estatusPadron: null,
      fechaInicioOperaciones: null,
      fechaUltimoCambioEstado: null,
      correoElectronico: null,
      direccion: {
        codigoPostal: null,
        calle: null,
        numeroExterior: null,
        numeroInterior: null,
        colonia: null,
        ciudad: null,
        municipio: null,
        estado: null,
        tipoVialidad: null,
        entreCalle: null,
        yCalle: null
      }
    };
    
    this.fiscalService.analyzeFiscalData(blob).subscribe({
      next: (data) => {
        console.log('Datos fiscales recibidos (original):', data);
        
        // Verificar si la respuesta es válida
        if (data && typeof data === 'object') {
          // Normalizar los datos usando el método adaptador
          this.adaptarDatosParaFormulario(data);
        } else {
          console.error('La API devolvió datos en un formato inesperado:', data);
        }
        
        this.procesando = false;
      },
      error: (err) => {
        console.error('Error al analizar datos fiscales:', err);
        this.procesando = false;
      }
    });
  }
  
  // Adapta los datos de la API al formato del formulario
  adaptarDatosParaFormulario(data: any): void {
    console.log('Datos originales a normalizar:', data);
    
    // Función auxiliar para obtener un valor independientemente de su notación
    const getValue = (obj: any, key: string, alternativeKeys: string[] = []): any => {
      // Probar con la clave principal (puede estar en notación de puntos o corchetes)
      if (obj[key] !== undefined) return obj[key];
      
      // Probar con claves alternativas
      for (const altKey of alternativeKeys) {
        if (obj[altKey] !== undefined) return obj[altKey];
      }
      
      return null;
    };
    
    // Crear un objeto con claves normalizadas
    const datosFiscales: any = {
      rfc: getValue(data, 'RFC', ['rfc']),
      razonSocial: getValue(data, 'Denominación/razón social', ['razon_social', 'razonSocial']),
      regimenFiscal: getValue(data, 'Régimen Capital', ['regimen_fiscal', 'regimenFiscal']),
      usoCFDI: getValue(data, 'Uso de CFDI', ['uso_cfdi', 'usoCFDI']),
      nombreComercial: getValue(data, 'Nombre Comercial', ['nombre_comercial', 'nombreComercial']),
      estatusPadron: getValue(data, 'Estatus del padrón', ['estatus_padron', 'estatusPadron']),
      fechaInicioOperaciones: getValue(data, 'Fecha de inicio de operaciones', ['fecha_inicio_operaciones', 'fechaInicioOperaciones']),
      fechaUltimoCambioEstado: getValue(data, 'Fecha de último cambio de estado', ['fecha_ultimo_cambio', 'fechaUltimoCambioEstado']),
      correoElectronico: getValue(data, 'correo electronico', ['correo_electronico', 'correoElectronico', 'email']),
      direccion: {
        codigoPostal: getValue(data, 'Codigo postal', ['codigo_postal', 'codigoPostal', 'cp']),
        calle: getValue(data, 'nombre de vialidad', ['calle', 'vialidad']),
        numeroExterior: getValue(data, 'numero exterior', ['numero_exterior', 'numeroExterior', 'num_ext']),
        numeroInterior: getValue(data, 'numero interior', ['numero_interior', 'numeroInterior', 'num_int']),
        colonia: getValue(data, 'nombre de la colonia', ['colonia']),
        ciudad: getValue(data, 'nombre de la localidad', ['ciudad', 'localidad']),
        municipio: getValue(data, 'nombre del municipio o demarcacion territorial', ['municipio', 'demarcacion']),
        estado: getValue(data, 'nombre de la entidad federativa', ['estado', 'entidad_federativa']),
        tipoVialidad: getValue(data, 'tipo de vialidad', ['tipo_vialidad', 'tipoVialidad']),
        entreCalle: getValue(data, 'entre calle', ['entre_calle', 'entreCalle']),
        yCalle: getValue(data, 'y calle', ['y_calle', 'yCalle'])
      }
    };
    
    // Comprobar si existe un objeto dirección anidado
    if (data.direccion || data.domicilio || data.address) {
      const dirObj = data.direccion || data.domicilio || data.address;
      datosFiscales.direccion = {
        codigoPostal: getValue(dirObj, 'codigoPostal', ['codigo_postal', 'cp']),
        calle: getValue(dirObj, 'calle', ['vialidad', 'nombre_vialidad']),
        numeroExterior: getValue(dirObj, 'numeroExterior', ['numero_exterior', 'num_ext']),
        numeroInterior: getValue(dirObj, 'numeroInterior', ['numero_interior', 'num_int']),
        colonia: getValue(dirObj, 'colonia', ['nombre_colonia']),
        ciudad: getValue(dirObj, 'ciudad', ['localidad', 'nombre_localidad']),
        municipio: getValue(dirObj, 'municipio', ['demarcacion', 'nombre_municipio']),
        estado: getValue(dirObj, 'estado', ['entidad_federativa', 'nombre_estado']),
        tipoVialidad: getValue(dirObj, 'tipoVialidad', ['tipo_vialidad']),
        entreCalle: getValue(dirObj, 'entreCalle', ['entre_calle']),
        yCalle: getValue(dirObj, 'yCalle', ['y_calle'])
      };
    }
    
    console.log('Datos fiscales originales:', data);
    console.log('Datos fiscales normalizados:', datosFiscales);
    
    // Actualizar tanto datosEjemplo como fiscalData
    this.datosEjemplo = datosFiscales;
    this.fiscalData = datosFiscales;
  }
  
  // Método para procesar tickets directamente desde la imagen
  analizarTicketDirectamente(blob: Blob): void {
    // Evitar procesamiento múltiple
    if (this.procesando) return;
    
    this.procesando = true;
    console.log('Analizando ticket...');
    
    // Limpiar datos anteriores
    this.ticketData = null;
    
    this.fiscalService.analyzeTicket(blob).subscribe({
      next: (data) => {
        console.log('Datos de ticket recibidos:', data);
        this.ticketData = data;
        this.procesando = false;
      },
      error: (err) => {
        console.error('Error al analizar ticket:', err);
        this.procesando = false;
      }
    });
  }
  
  // Los métodos antiguos se mantienen para compatibilidad
  analizarDatosFiscales(blob: Blob): void {
    this.analizarDatosFiscalesDirectamente(blob);
  }
  
  analizarTicket(blob: Blob): void {
    this.analizarTicketDirectamente(blob);
  }
  
  // Recibe los datos actualizados del formulario
  onDatosFiscalesActualizados(datos: any): void {
    console.log('Datos fiscales actualizados:', datos);
    this.datosActualizados = datos;
    // Aquí podrías enviar estos datos a un servicio para guardarlos en la base de datos
  }
  
  // Método para el nuevo componente editable
  onDatosActualizados(datos: any): void {
    console.log('Datos actualizados desde editable:', datos);
    // Podemos actualizar el RFC u otros datos si es necesario
    if (datos && datos.rfc) {
      // Actualizar solo el RFC en los datos de ejemplo
      this.datosEjemplo.rfc = datos.rfc;
    }
  }
  
  // Métodos auxiliares para el manejo de objetos
  getObjectKeys(obj: any): string[] {
    if (!obj) return [];
    return Object.keys(obj);
  }
  
  isObject(value: any): boolean {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }
  
  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  onLinkClick() {
    this.showMessage = true;
  }

  mostrarMensajeAdmin = () => {
    alert('¡Yo soy admin!');
  }

  // Método para recibir los datos del formulario editable
  enviarDatos(datos: any): void {
    console.log('Datos recibidos del formulario:', datos);
    
    // Actualizar los datos fiscales con los valores del formulario
    if (datos) {
      if (datos.rfc) this.fiscalData.rfc = datos.rfc;
      if (datos.usoCFDI) this.fiscalData.usoCFDI = datos.usoCFDI;
      // Actualizar otros campos según sea necesario
      
      // También puedes guardar estos datos en el objeto datosActualizados
      this.datosActualizados = { ...this.fiscalData, ...datos };
      
      console.log('Datos fiscales actualizados con el formulario:', this.fiscalData);
    }
  }
}
