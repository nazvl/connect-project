import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './core/header/header.component';
import {MainPageComponent} from './core/main-page/main-page.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainPageComponent],
  // imports: [RouterOutlet, HeaderComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'song-battle';
}
