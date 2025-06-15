import { Component } from '@angular/core';
import {SearchComponent} from '../header/search/search.component';
import {CategoryChangerComponent} from './category-changer/category-changer.component';
import {FriendsListComponent} from './friends-list/friends-list.component';

@Component({
  selector: 'app-friends-page',
  imports: [
    SearchComponent,
    FriendsListComponent
  ],
  templateUrl: './friends-page.component.html',
  styleUrl: './friends-page.component.scss'
})
export class FriendsPageComponent {

}
