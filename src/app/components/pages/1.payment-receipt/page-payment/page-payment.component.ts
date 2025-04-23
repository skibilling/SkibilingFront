import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from '../../../organisms/bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PaymentReceiptComponent } from '../steps/payment-receipt.component';
@Component({
    selector: 'app-page-payment',
    standalone: true,
    imports:[CommonModule],
    templateUrl: './page-payment.component.html',
    styleUrls: ['./page-payment.component.css']
})
export class PagePaymentComponent {

    constructor(private bottomSheet: MatBottomSheet) {}
    openBottomSheet(): void {
      this.bottomSheet.open(PaymentReceiptComponent, {
        // Aquí puedes configurar distintas propiedades
        // por ejemplo, panelClass para personalizar la posición o clase CSS
        panelClass: 'custom-bottom-sheet',
        // disableClose si quieres que solo se cierre manualmente, etc.
      });
    }
}
