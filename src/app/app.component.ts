import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListasComponent } from './pages/listas/listas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eva64marquezjorge';
}
