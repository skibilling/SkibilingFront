import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitlesComponent } from "../../../../atoms/titles/titles.component";
import { SimpleTextComponent } from "../../../../atoms/simple-text/simple-text.component";
import { CustomButtonComponent } from "../../../../atoms/custom-button/custom-button.component";

@Component({
  selector: "app-help-photo",
    standalone: true,
    imports:[CommonModule,TitlesComponent,SimpleTextComponent,CustomButtonComponent],
    templateUrl: "./help-photo.component.html",
    styleUrls: ["./help-photo.component.css"],
})
export class HelpPhotoComponent {
    
}