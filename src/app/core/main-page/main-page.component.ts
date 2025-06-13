import { Component } from '@angular/core';
import {ProfileInfoComponent} from './profile-info/profile-info.component';
import {ProfileNavigationComponent} from './profile-navigation/profile-navigation.component';
import {SendPostPlaceComponent} from './send-post-place/send-post-place.component';

@Component({
  selector: 'app-main-page',
  imports: [
    ProfileInfoComponent,
    ProfileNavigationComponent,
    SendPostPlaceComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
