import { Component, Input } from '@angular/core';
// import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-profile-photo',
  imports: [
    // NgOptimizedImage
  ],
  templateUrl: './profile-photo.component.html',
  styleUrl: './profile-photo.component.scss'
})
export class ProfilePhotoComponent {
  @Input() link: string = '#';
  @Input() photo: string = '#';
}
