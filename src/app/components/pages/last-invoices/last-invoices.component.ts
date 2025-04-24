import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitlesComponent } from "../../atoms/titles/titles.component";
import { SimpleTextComponent } from "../../atoms/simple-text/simple-text.component";
import { InputFieldComponent } from "../../atoms/input-field/input-field.component";
import { SvgIconComponent } from "../../atoms/svg-icon/svg-icon.component";
import { CustomButtonComponent } from "../../atoms/custom-button/custom-button.component";
import { FormsModule } from "@angular/forms";
import { LastInvoicesListComponent } from "./last-invoices-list/last-invoices-list.component";
import { Router } from "@angular/router";
import { ContentInfoCameraComponent } from "../../organisms/content-info-camera/content-info-camera.component";

type ViewState = 'form' | 'processing' | 'list' | 'camera';

@Component({
  selector: 'app-last-invoices',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TitlesComponent,
    SimpleTextComponent,
    InputFieldComponent,
    CustomButtonComponent,
    SvgIconComponent,
    LastInvoicesListComponent,
    ContentInfoCameraComponent
  ],
  template: `
    <div class="last-invoices-container">
      <!-- Vista del formulario -->
      <div *ngIf="currentView === 'form'" class="view-container form-view">
        <app-titles 
          text="Facturas anteriores"
          color="#000">
        </app-titles>
        
        <app-simple-text
          text="Ingresa tu RFC y el correo utilizado para ver tus facturas anteriores."
          color="#666">
        </app-simple-text>
        
        <div class="form-fields">
          <app-input-field
            label="Correo electrónico *"
            placeholder="ejemplo@correo.com"
            icon="Mail.svg"
            [(value)]="email">
          </app-input-field>
          
          <app-input-field
            label="RFC *"
            placeholder="ABCD123456XX0"
            icon="Building.svg"
            [(value)]="rfc">
          </app-input-field>
        </div>

        <div class="buttons-container">
          <app-custom-button
            text="Tomar foto del documento"
            type="tertiary"
            icon="Camera.svg"
            [useAssetIcon]="true"
            (click)="openCamera()">
          </app-custom-button>
          
          <app-custom-button
            text="Ver mis facturas"
            type="primary"
            [disabled]="!isValid()"
            (click)="sendLink()">
          </app-custom-button>
        </div>
      </div>
      
      <!-- Vista de procesamiento -->
      <div *ngIf="currentView === 'processing'" class="view-container processing-view">
        <div class="spinner-container">
          <div class="spinner"></div>
        </div>
        
        <app-titles 
          text="Verificando información..."
          color="#000">
        </app-titles>
        
        <app-simple-text
          text="Estamos validando tus datos. Por favor, espera un momento..."
          color="#666">
        </app-simple-text>
      </div>
      
      <!-- Vista de lista de facturas -->
      <div *ngIf="currentView === 'list'" class="view-container list-view">
        <app-last-invoices-list></app-last-invoices-list>
        
        <div class="buttons-container">
          <app-custom-button
            text="Consultar facturas con otro equipo"
            type="secondary"
            (click)="goToOtherTeam()">
          </app-custom-button>

          <app-custom-button
            text="Regresar al inicio"
            type="primary"
            (click)="goToHome()">
          </app-custom-button>
        </div>
      </div>

      <!-- Vista de cámara -->
      <div *ngIf="currentView === 'camera'" class="view-container camera-view">
        <app-content-info-camera></app-content-info-camera>
        
        <div class="buttons-container">
          <app-custom-button
            text="Volver al formulario"
            type="secondary"
            (click)="closeCamera()">
          </app-custom-button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./last-invoices.component.css']
})
export class LastInvoicesComponent {
  currentView: ViewState = 'form';
  email: string = '';
  rfc: string = '';
  
  constructor(private router: Router) {}

  isValid(): boolean {
    return this.email.trim() !== '' && this.rfc.trim() !== '';
  }

  sendLink(): void {
    if (!this.isValid()) {
      return;
    }

    this.currentView = 'processing';
    
    setTimeout(() => {
      this.currentView = 'list';
    }, 1500);
  }

  resetForm(): void {
    this.email = '';
    this.rfc = '';
    this.currentView = 'form';
  }

  goToOtherTeam(): void {
    window.location.href = 'https://otro-equipo.com/facturas';
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  openCamera(): void {
    this.currentView = 'camera';
  }

  closeCamera(): void {
    this.currentView = 'form';
  }
}