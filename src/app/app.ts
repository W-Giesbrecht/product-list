import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { PoductList } from './shared/components/poduct-list/poduct-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, PoductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('product-list');
}
