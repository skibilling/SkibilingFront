import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitlesComponent } from "../../../../atoms/titles/titles.component";
import { SimpleTextComponent } from "../../../../atoms/simple-text/simple-text.component";
import { SelectFieldComponent } from "../../../../atoms/select-field/select-field.component";
import { CustomButtonComponent } from "../../../../atoms/custom-button/custom-button.component";

@Component({
    selector: "app-example-receipt",
    standalone: true,
    imports: [CommonModule,TitlesComponent,SimpleTextComponent,SelectFieldComponent,CustomButtonComponent],
    templateUrl: "./example-receipt.component.html",
    styleUrls: ["./example-receipt.component.css"],
    
})
export class ExampleReceiptComponent {
    selectedOption: string = "option1";
    options: { value: string; label: string }[] = [
        { value: "Bus", label: "Autobuses" },
        { value: "Box", label: "Paqueteria" },
        { value: "Food", label: "Comida" },
    ];

    onOptionChange(event: any) {
        this.selectedOption = event.target.value;
    }
}   