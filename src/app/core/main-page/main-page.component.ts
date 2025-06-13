import { Component } from '@angular/core';
import {ProfileInfoComponent} from './profile-info/profile-info.component';
import {ProfileNavigationComponent} from '../profile-navigation/profile-navigation.component';
// import {SendPostPlaceComponent} from '../send-post-page/send-post-place/send-post-place.component';
// import {SendPostPageComponent} from '../send-post-page/send-post-page.component';
// import {FriendsPageComponent} from '../friends-page/friends-page.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [
    ProfileInfoComponent,
    ProfileNavigationComponent,
    // SendPostPageComponent,
    // FriendsPageComponent,
    RouterOutlet
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
