import { Component } from "@angular/core";

import { CommonModule } from "@angular/common";
import { TitlesComponent } from "../../../atoms/titles/titles.component";
import { SimpleTextComponent } from "../../../atoms/simple-text/simple-text.component";
import { SelectFieldComponent } from "../../../atoms/select-field/select-field.component";
import { CustomButtonComponent } from "../../../atoms/custom-button/custom-button.component";
import { ValueChangeEvent } from "@angular/forms";

@Component({
  selector: "app-example-ticket",
    standalone: true,
    imports: [CommonModule,TitlesComponent,SimpleTextComponent,
        SelectFieldComponent,CustomButtonComponent],
    templateUrl: "./example-ticket.component.html",
    styleUrls: ["./example-ticket.component.css"]
})

export class ExampleTicketComponent {
    ServicesTypesOptions=[{image:'Bus.png',label:'Autobus',value:'bus'},
        {image:'Food.png',label:'Comida',value:'food'},
        {image:'Package.png',label:'Paqueteria',value:'package'},
    ]
}