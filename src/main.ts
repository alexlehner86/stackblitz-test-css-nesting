import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { Card1Component } from './app/card1/card1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Card1Component],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-card1></app-card1>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
