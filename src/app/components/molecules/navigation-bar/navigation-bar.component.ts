import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../atoms/svg-icon/svg-icon.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  activeLink: string = 'inicio';

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
