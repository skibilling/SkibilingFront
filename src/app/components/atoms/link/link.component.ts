import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, RouterModule, SvgIconComponent],
  template: `
    <a
      [routerLink]="routerLink"
      [href]="!routerLink ? href : null"
      [target]="openInNewTab ? '_blank' : '_self'"
      class="link-container"
      [class.with-icon]="icon"
    >
      <app-svg-icon
        *ngIf="icon"
        [icon]="icon"
        [color]="iconColor"
        width="24px"
        height="24px"
        class="link-icon"
      >
      </app-svg-icon>
      <span class="link-text">{{ text }}</span>
    </a>
  `,
  styles: [
    `
      .link-container {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: #f07718;
        font-size: 16px;
        padding: 8px 16px;
        border-radius: 5px;
        border: 1px dashed #f07718;
        background-color: rgba(240, 119, 24, 0.05);
        transition: background-color 0.2s;
        cursor: pointer;
      }

      .link-container:hover {
        background-color: rgba(240, 119, 24, 0.1);
      }

      .link-icon {
        margin-right: 8px;
      }

      .link-text {
        font-weight: 500;
      }
    `,
  ],
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
