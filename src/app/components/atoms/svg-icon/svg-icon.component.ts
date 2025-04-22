import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgLoaderService } from '../../../services/svg-loader.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="svg-icon"
      [class.svg-icon-loaded]="svgLoaded"
      [ngStyle]="getStyles()"
    >
      <div *ngIf="svgLoaded" [innerHTML]="svgContent"></div>
    </div>
  `,
  styles: [
    `
      .svg-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .svg-icon-loaded svg {
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class SvgIconComponent implements OnChanges {
  @Input() icon: string = '';
  @Input() color: string = 'currentColor';
  @Input() width: string = '20px';
  @Input() height: string = '20px';

  svgContent: SafeHtml | null = null;
  svgLoaded = false;

  constructor(private svgLoaderService: SvgLoaderService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['icon'] || changes['color']) && this.icon) {
      this.loadSvg();
    }
  }

  loadSvg(): void {
    this.svgLoaderService
      .loadSvg(this.icon, this.color)
      .subscribe((content) => {
        this.svgContent = content;
        this.svgLoaded = !!content;
      });
  }

  getStyles() {
    return {
      width: this.width,
      height: this.height,
    };
  }
}
