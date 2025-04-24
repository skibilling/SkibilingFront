import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProgressBarComponent } from '../../organisms/progress-bar/progress-bar.component';
import { LandingComponent } from '../landing/landing.component';

@Component({
    selector: 'app-page-form',
    standalone: true,
    imports:[CommonModule,LandingComponent],
    templateUrl: './page-form.component.html',
    styleUrls: ['./page-form.component.css']
})
export class PageFormComponent {

    constructor(private bottomSheet: MatBottomSheet) {}
    openBottomSheet(): void {
      this.bottomSheet.open(ProgressBarComponent, {
        // Aquí puedes configurar distintas propiedades
        // por ejemplo, panelClass para personalizar la posición o clase CSS
        panelClass: 'custom-bottom-sheet',
        // disableClose si quieres que solo se cierre manualmente, etc.
      });
    }
}
