import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelpPhotoComponent } from "../help-photo/help-photo.component";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { CustomButtonComponent } from "../../../../atoms/custom-button/custom-button.component";

@Component({
  selector: "app-photo-take",
    standalone: true,
    imports: [CommonModule,CustomButtonComponent],
    templateUrl: "./photo-take.component.html",
    styleUrls: ["./photo-take.component.css"],
})
export class PhotoTakeComponent {
    constructor(private bottomSheet: MatBottomSheet) {}
    openHelp(): void {
      this.bottomSheet.open(HelpPhotoComponent, {
        // Aquí puedes configurar distintas propiedades
        // por ejemplo, panelClass para personalizar la posición o clase CSS
        panelClass: 'custom-bottom-sheet',
        // disableClose si quieres que solo se cierre manualmente, etc.
      });
    }
}