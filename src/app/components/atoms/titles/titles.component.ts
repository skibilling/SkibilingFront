import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-titles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent {
  @Input() text: string = '';
  @Input() color: string = '#000';
}
