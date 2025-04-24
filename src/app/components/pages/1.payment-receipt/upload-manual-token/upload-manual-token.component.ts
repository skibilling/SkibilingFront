import { Component,EventEmitter,Output   } from "@angular/core";
import { TitlesComponent } from "../../../atoms/titles/titles.component";
import { SimpleTextComponent } from "../../../atoms/simple-text/simple-text.component";
import { CustomButtonComponent } from "../../../atoms/custom-button/custom-button.component";
import { HintComponent } from "../../../atoms/hint/hint.component";
import { InputFieldComponent } from "../../../atoms/input-field/input-field.component";

@Component({
    selector: 'app-upload-manual-token',
    templateUrl: './upload-manual-token.component.html',
    styleUrls: ['./upload-manual-token.component.css'],
    imports: [TitlesComponent,SimpleTextComponent,CustomButtonComponent,HintComponent,InputFieldComponent],
    standalone: true
})
export class UploadManualTokenComponent {
    token: string = '';
    @Output() back = new EventEmitter<void>();
    @Output() complete = new EventEmitter<any>();
    
    isTokenValid: boolean = false;
    onTokenChange(value: string) {
        this.token = value;
        this.isValid(this.token) 
    }
    isValid(token: string) {
        if (token.length > 0) {
            this.isTokenValid = true;
        } else {
            this.isTokenValid = false;
        }
    }
    onTokenSubmit(event: Event) {
        event.preventDefault();
        if (this.token.length > 0) {
            console.log('Token enviado:', this.token);
        }
        this.complete.emit();
    }
    onGoBack() {
        this.back.emit();
      }
      
}
