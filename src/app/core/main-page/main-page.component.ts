import { Component } from '@angular/core';
import {ProfileInfoComponent} from './profile-info/profile-info.component';
import {ProfileNavigationComponent} from './profile-navigation/profile-navigation.component';

@Component({
  selector: 'app-main-page',
  imports: [
    ProfileInfoComponent,
    ProfileNavigationComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
