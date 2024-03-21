import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { Card1Component } from './app/card1/card1.component';
import { Card2Component } from './app/card2/card2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Card1Component, Card2Component],
  template: `
    <h1>CSS Nesting Demo</h1>
    <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting">
      Learn more about native CSS nesting
    </a>
    <app-card1></app-card1>
    <app-card2></app-card2>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
