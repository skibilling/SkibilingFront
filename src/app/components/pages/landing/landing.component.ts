import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../../molecules/navigation-bar/navigation-bar.component';
import { CustomButtonComponent } from '../../atoms/custom-button/custom-button.component';
import { TitlesComponent } from '../../atoms/titles/titles.component';
import { SimpleTextComponent } from '../../atoms/simple-text/simple-text.component';
import { ProgressBarComponent } from '../../organisms/progress-bar/progress-bar.component';
import{ MatBottomSheet } from '@angular/material/bottom-sheet';
import { WelcomeInvoiceComponent } from '../1.payment-receipt/welcome-invoice/welcome-invoice.component';
import { LastInvoicesComponent } from '../last-invoices/last-invoices.component';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NavigationBarComponent, CustomButtonComponent, TitlesComponent, SimpleTextComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
      constructor(private bottomSheet: MatBottomSheet) {}
      openBottomSheet(): void {
        this.bottomSheet.open(ProgressBarComponent, {
          // Aquí puedes configurar distintas propiedades
          // por ejemplo, panelClass para personalizar la posición o clase CSS
          panelClass: 'custom-bottom-sheet',
          // disableClose si quieres que solo se cierre manualmente, etc.
        });
      }
      openMyLastBillings(): void {
        this.bottomSheet.open(LastInvoicesComponent,{
          panelClass: 'custom-bottom-sheet',
        })
      }
}
