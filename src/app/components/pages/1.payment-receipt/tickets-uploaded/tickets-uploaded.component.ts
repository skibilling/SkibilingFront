import { Component, Input, Output,EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UploadedTicketRowComponent } from "../../../molecules/uploaded-ticket-row/uploaded-ticket-row.component";
import { SimpleTextComponent } from "../../../atoms/simple-text/simple-text.component";import { TitlesComponent } from "../../../atoms/titles/titles.component";
import { CheckSelectorComponent } from "../../../atoms/check-selector/check-selector.component";
import { HintComponent } from "../../../atoms/hint/hint.component";
import { CustomButtonComponent } from "../../../atoms/custom-button/custom-button.component";
import { TicketData } from "../../../molecules/uploaded-ticket-row/uploaded-ticket-row.component";
import { TicketsUploadedListComponent } from "../../../organisms/tickets-uploaded/tickets-uploaded.component";
@Component({
  selector: 'app-tickets-uploaded',
    standalone: true,
    imports:[CommonModule,SimpleTextComponent,
        UploadedTicketRowComponent,TitlesComponent,CheckSelectorComponent,
    HintComponent,CustomButtonComponent,TicketsUploadedListComponent],
    templateUrl: './tickets-uploaded.component.html',
    styleUrls: ['./tickets-uploaded.component.css']
})

export class TicketsUploadedComponent {
  isValid: boolean = false;
  @Input() tickets:TicketData[]= [];
  @Output() back = new EventEmitter<void>();
  @Output() advance= new EventEmitter<void>();
  onBack() {
    console.log('volviendo a paso 1');
    this.back.emit();
  }
  onComplete() {
    console.log('avanzando a paso 2');
    this.advance.emit();
  }
}


