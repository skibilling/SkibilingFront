import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, RouterModule, SvgIconComponent],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() routerLink: string | any[] | null = null;
  @Input() href: string | null = null;
  @Input() openInNewTab: boolean = false;
  @Input() iconColor: string = '#f07718';

  ngOnInit(): void {
    // Asegurarse de que al menos uno de routerLink o href esté definido
    if (!this.routerLink && !this.href) {
      console.warn(
        'LinkComponent: Se requiere al menos una propiedad routerLink o href'
      );
    }
  }
}
