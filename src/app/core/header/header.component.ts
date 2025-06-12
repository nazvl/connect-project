import { Component } from '@angular/core';
import {LogoImageComponent} from './logo-image/logo-image.component';
import {SearchComponent} from './search/search.component';
import {ProfilePhotoComponent} from '../profile-photo/profile-photo.component';

@Component({
  selector: 'app-header',
  imports: [
    LogoImageComponent,
    SearchComponent,
    ProfilePhotoComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
