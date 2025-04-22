import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hint',
  imports: [],
  templateUrl: './hint.component.html',
  styleUrl: './hint.component.css'
})
export class HintComponent {
  @Input() information: string = "";
}
