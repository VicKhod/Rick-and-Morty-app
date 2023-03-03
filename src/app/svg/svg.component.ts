import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
})
export class SvgFemComponent implements OnInit {
  constructor (private _sanitizer: DomSanitizer) {}

  activePageDataChunk = [];

  ngOnInit() {
    this.activePageDataChunk.push(this.svg);
  }
  
  getSVGImage(image) {
    return this._sanitizer.bypassSecurityTrustHtml(`${image}`);
  }
  
  svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
</svg>`;
}
