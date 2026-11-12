import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';

// uma anotação é uma função especial
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('uc02833');
}
