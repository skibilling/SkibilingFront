import { Component, Output, EventEmitter } from "@angular/core";
import { CheckSelectorComponent } from "../../../atoms/check-selector/check-selector.component";
import { CustomButtonComponent } from "../../../atoms/custom-button/custom-button.component";
import { CommonModule } from "@angular/common";
import { SimpleTextComponent } from "../../../atoms/simple-text/simple-text.component";
import { TitlesComponent } from "../../../atoms/titles/titles.component";
import { HintComponent } from "../../../atoms/hint/hint.component";

@Component({
  selector: 'app-welcome-invoice',
  templateUrl: './welcome-invoice.component.html',
  styleUrl: './welcome-invoice.component.css',
  imports:[CheckSelectorComponent,CustomButtonComponent,CommonModule,SimpleTextComponent,TitlesComponent,HintComponent],
  standalone:true
})
export class WelcomeInvoiceComponent {
  @Output() startInvoicing = new EventEmitter<void>();
  isPrivacyAccepted: boolean = false;

  onPrivacyChange(accepted: boolean) {
    this.isPrivacyAccepted = accepted;
  }
  onStartInvoicing() {
    this.startInvoicing.emit();
  }
}
