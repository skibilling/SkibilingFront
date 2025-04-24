import { Component,EventEmitter,Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitlesComponent } from "../../../atoms/titles/titles.component";
import { SimpleTextComponent } from "../../../atoms/simple-text/simple-text.component";
import { CustomButtonComponent } from "../../../atoms/custom-button/custom-button.component";
import { HintComponent } from "../../../atoms/hint/hint.component";
import { UploadPhotoComponent } from "../upload-photo/upload-photo.component";
import { UploadFileComponent } from "../upload-file/upload-file.component";
import { UploadManualTokenComponent } from "../upload-manual-token/upload-manual-token.component";
import { TicketsListComponent } from "../../../organisms/tickets-list/tickets-list.component";
import { TicketsUploadedComponent } from "../tickets-uploaded/tickets-uploaded.component";

@Component({
    selector: 'app-step-one',
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        TitlesComponent,
        SimpleTextComponent,
        CustomButtonComponent,
        HintComponent,
        UploadPhotoComponent,
        UploadFileComponent,
        UploadManualTokenComponent,
        TicketsUploadedComponent
    ]
})
export class StepOneComponent {
    // Estado actual: '' (inicial), 'photo', 'file', 'token'
    currentView: string = '';
    @Output() advance = new EventEmitter<void>();
    // Método para mostrar la vista de subir foto
    openUploadPhoto() {
        this.currentView = 'photo';
    }
    
    // Método para mostrar la vista de subir archivo
    openUploadFile() {
        this.currentView = 'file';
    }
    
    // Método para mostrar la vista de ingreso manual de token
    openManualCapture() {
        this.currentView = 'token';
    }
    
    // Método para volver a la vista inicial
    backToMain() {
        this.currentView = '';
    }
    goToTickets() {
        this.currentView = 'tickets';
    }
    
    // Método para manejar cuando se completa un proceso
    onComplete(data: any) {
        console.log('Proceso completado:', data);
        // Aquí puedes guardar los datos o enviarlos a un servicio
        // antes de volver a la vista principal
        this.goToTickets();
    }
    advanceToStepTwo(){
        console.log('avanzando a paso 2');
        this.advance.emit();
    }
}