import { CommonModule } from "@angular/common";
import { Component,EventEmitter,Output } from "@angular/core";
import { SimpleTextComponent } from "../../../atoms/simple-text/simple-text.component";
import { SvgIconComponent } from "../../../atoms/svg-icon/svg-icon.component";
import { CustomButtonComponent } from "../../../atoms/custom-button/custom-button.component";
import { TitlesComponent } from "../../../atoms/titles/titles.component";

@Component({
    selector: 'app-final-message',
    templateUrl: './final-message.component.html',
    styleUrls: ['./final-message.component.css'],
    imports:[CommonModule,SimpleTextComponent,SvgIconComponent,CustomButtonComponent,TitlesComponent]
})
export class FinalMessageComponent {
    hasError: boolean = false;
    @Output() reload = new EventEmitter<void>();
    @Output() toContactPage = new EventEmitter<void>();
    @Output() toMyInvoices = new EventEmitter<void>();
    @Output() toHome = new EventEmitter<void>();
    Reload(){
        this.reload.emit();
    }
    goToContactPage(){
        this.toContactPage.emit();
    }
    goToMyInvoices(){
        this.toMyInvoices.emit();
    }
    goToHome(){
        this.toHome.emit();
    }
    
}