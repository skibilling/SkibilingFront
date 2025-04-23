import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../../molecules/navigation-bar/navigation-bar.component';
import { CustomButtonComponent } from '../../atoms/custom-button/custom-button.component';
import { TitlesComponent } from '../../atoms/titles/titles.component';
import { SimpleTextComponent } from '../../atoms/simple-text/simple-text.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NavigationBarComponent, CustomButtonComponent, TitlesComponent, SimpleTextComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {}
