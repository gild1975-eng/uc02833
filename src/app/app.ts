import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// uma anotação é uma função especial
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('uc02833');
}
