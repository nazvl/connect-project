import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-profile-navigation',
  imports: [
    NgForOf
  ],
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss'
})
export class ProfileNavigationComponent {
  links = [
    { id: 1, name: 'Home', image: '<i class="fa-regular fa-newspaper"></i>', link: '#' },
    { id: 2, name: 'Friends', image: '<i class="fa-solid fa-user-group"></i>', link: '#' },
    { id: 3, name: 'Messages', image: '<i class="fa-regular fa-message"></i>', link: '#' }
  ];
  choosenSection: number = 0;
  chooseSection(id: number): void {
    this.choosenSection = id;
  }
}

