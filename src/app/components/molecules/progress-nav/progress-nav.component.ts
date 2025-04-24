import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from '../../atoms/nav-item/nav-item.component';

export interface NavStep {
  icon: string;
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-progress-nav',
  standalone: true,
  imports: [CommonModule, NavItemComponent],
  templateUrl: './progress-nav.component.html',
  styleUrl: './progress-nav.component.css'
})
export class ProgressNavComponent {
  @Input() steps: NavStep[] = [];
  @Output() stepSelected = new EventEmitter<number>();

  onStepClick(index: number) {
    this.steps.forEach((step, i) => {
      step.active = i === index;
    });
    this.stepSelected.emit(index);
  }
}
