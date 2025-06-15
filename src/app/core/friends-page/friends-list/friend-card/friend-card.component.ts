import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ProfilePhotoComponent} from '../../../profile-photo/profile-photo.component';

@Component({
  selector: 'app-friend-card',
  imports: [
    NgForOf,
    ProfilePhotoComponent
  ],
  templateUrl: './friend-card.component.html',
  styleUrl: './friend-card.component.scss'
})
export class FriendCardComponent {
  @Input() name: string = 'Name SurName';
  @Input() photo: string = ''; // пустое фото, можно вставить заглушку
  @Input() job: string = 'Job';
  @Input() link: string = '#';
}
