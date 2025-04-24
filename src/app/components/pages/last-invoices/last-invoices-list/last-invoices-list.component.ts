import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitlesComponent } from "../../../atoms/titles/titles.component";
import { SimpleTextComponent } from "../../../atoms/simple-text/simple-text.component";
import { CustomButtonComponent } from "../../../atoms/custom-button/custom-button.component";
import { HintComponent } from "../../../atoms/hint/hint.component";
import { SvgIconComponent } from "../../../atoms/svg-icon/svg-icon.component";

interface Invoice {
  id: string;
  description: string;
  date: string;
  status: 'Cancelada' | 'Lista' | 'Procesando' | 'Error';
  amount: number;
}

@Component({
    selector: 'app-last-invoices-list',
    templateUrl: './last-invoices-list.component.html',
    styleUrls: ['./last-invoices-list.component.css'],
    standalone: true,
    imports: [
      CommonModule,
      TitlesComponent,
      SimpleTextComponent,
      CustomButtonComponent,
      HintComponent,
      SvgIconComponent
    ]
})
export class LastInvoicesListComponent {
    invoices: Invoice[] = [
        {
            id: 'FAC-001',
            description: 'Compra en Walmart',
            date: '2024-03-20',
            status: 'Lista',
            amount: 1500.00
        },
        {
            id: 'FAC-002',
            description: 'Compra en Oxxo',
            date: '2024-03-19',
            status: 'Procesando',
            amount: 250.00
        },
        {
            id: 'FAC-003',
            description: 'Compra en Liverpool',
            date: '2024-03-18',
            status: 'Cancelada',
            amount: 3500.00
        },
        {
            id: 'FAC-004',
            description: 'Compra en Soriana',
            date: '2024-03-17',
            status: 'Error',
            amount: 850.00
        }
    ];

    getStatusColor(status: string): string {
        switch (status) {
            case 'Lista':
                return '#4CAF50';
            case 'Procesando':
                return '#FF9800';
            case 'Cancelada':
                return '#F44336';
            case 'Error':
                return '#F44336';
            default:
                return '#000000';
        }
    }

    getStatusIcon(status: string): string {
        switch (status) {
            case 'Lista':
                return 'CircleCheckBig.svg';
            case 'Procesando':
                return 'CircleCheckBig.svg';
            case 'Cancelada':
                return 'CircleCheckBig.svg';
            case 'Error':
                return 'CircleCheckBig.svg';
            default:
                return 'CircleCheckBig.svg';
        }
    }
}