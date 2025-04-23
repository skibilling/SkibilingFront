import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.css']
})
export class SimpleTextComponent {
  @Input() text: string = '';
  @Input() color: string = '#000';
}
