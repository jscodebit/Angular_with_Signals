import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-signals';

  item = signal<string | undefined>('hello');

  items = signal<{id: number, name: string}[]>([
    { id: 1, name: 'Andy'}, 
    { id: 2, name: 'Bob'}, 
    { id: 3, name: 'Charlie'}]);

}
