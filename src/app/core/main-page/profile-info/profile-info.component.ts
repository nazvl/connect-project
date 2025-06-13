import { Component } from '@angular/core';
import {ProfilePhotoComponent} from '../../profile-photo/profile-photo.component';

@Component({
  selector: 'app-profile-info',
  imports: [
    ProfilePhotoComponent
  ],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss'
})
export class ProfileInfoComponent {
  name:string = 'Name Surname';
  status: string = 'Online';
}
