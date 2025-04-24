import { Component,EventEmitter,Output } from "@angular/core";
import { Router } from "@angular/router";
import { FinalMessageComponent } from "../final-message/final-message.component";
import { TicketsUploadedComponent } from "../../1.payment-receipt/tickets-uploaded/tickets-uploaded.component";
import { CustomButtonComponent } from "../../../atoms/custom-button/custom-button.component";
import { SimpleTextComponent } from "../../../atoms/simple-text/simple-text.component";
import { HintComponent } from "../../../atoms/hint/hint.component";
import { CheckSelectorComponent } from "../../../atoms/check-selector/check-selector.component";
import { TitlesComponent } from "../../../atoms/titles/titles.component";
import { InputFieldComponent } from "../../../atoms/input-field/input-field.component";
import { SelectFieldComponent } from "../../../atoms/select-field/select-field.component";
import { TicketsUploadedListComponent } from "../../../organisms/tickets-uploaded/tickets-uploaded.component";

@Component({
    selector: 'app-page-validation',
    templateUrl: './page-validation.component.html',
    styleUrls: ['./page-validation.component.css'],
    standalone: true,
    imports: [
        FinalMessageComponent,
        TicketsUploadedComponent,
        CustomButtonComponent,
        SimpleTextComponent,
        HintComponent,
        CheckSelectorComponent,
        TitlesComponent,
        InputFieldComponent,
        SelectFieldComponent,
        TicketsUploadedListComponent
    ]
})
export class PageValidationComponent {
    @Output() goTo = new EventEmitter<number>();
    @Output() complete = new EventEmitter<void>();
    
    currentView: string = 'validation';
    currentStep: number = 1;
    saveData: boolean = false;
    
    CFDIUsesOptions = [
        { value: 'G01', label: 'Adquisición de mercancías' },
        { value: 'G02', label: 'Devoluciones, descuentos o bonificaciones' },
        { value: 'G03', label: 'Gastos en general' }
    ];

    constructor(private router: Router) {}

    onComplete() {
        this.complete.emit();
        this.currentView = 'final-message';
        this.currentStep = 2;
    }

    onBack() {
        this.currentView = 'validation';
        this.currentStep = 1;
    }

    onGenerateInvoice() {
        console.log('Generando factura...');
        // Aquí podrías añadir lógica para procesar la factura
        // Por ejemplo, una llamada a un servicio
        this.currentView = 'final-message';
        this.complete.emit(); // Notificar que se completó el proceso
    }

    onReload() {
        this.currentView = 'validation';
        this.goTo.emit(1); // Regresar al inicio del flujo
    }

    onContactPage() {
        this.router.navigate(['/contact']);
    }

    onMyInvoices() {
        this.router.navigate(['/my-invoices']);
    }

    onHome() {
        this.router.navigate(['/']);
    }

    // Métodos para la navegación entre pasos
    onEditOrCorrectStepOne() {
        console.log('Editando paso 1: Comprobantes');
        this.goTo.emit(1); // Navegar al paso 1
    }
    
    onEditOrCorrectStepTwo() {
        console.log('Editando paso 2: Datos Fiscales');
        this.goTo.emit(2); // Navegar al paso 2
    }
    
    onEditOrCorrectStepThree() {
        console.log('Editando paso 3: Información Personal y Dirección');
        this.goTo.emit(3); // Navegar al paso 3
    }
}

