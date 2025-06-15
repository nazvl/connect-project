import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {FriendCardComponent} from './friend-card/friend-card.component';

interface Friend {
  id: number;
  name: string;
  profilePhoto: string;
  job: string;
  link: string;
}

@Component({
  selector: 'app-friends-list',
  imports: [
    NgForOf,
    FriendCardComponent
  ],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.scss'
})

export class FriendsListComponent {
  friends: Friend[] = [
    {
      id: 0,
      name: 'Ivan Petrov',
      profilePhoto: 'https://avatars.githubusercontent.com/u/1?v=4',
      job: 'UI/UX Designer',
      link: '#'
    },
    {
      id: 1,
      name: 'Petr Ivanov',
      profilePhoto: 'https://avatars.githubusercontent.com/u/2?v=4',
      job: 'Frontend Developer',
      link: '#'
    },
    {
      id: 2,
      name: 'Ivanoid Gratis',
      profilePhoto: 'https://avatars.githubusercontent.com/u/3?v=4',
      job: 'Backend Engineer',
      link: '#'
    },
    {
      id: 3,
      name: 'Anna Smirnova',
      profilePhoto: 'https://randomuser.me/api/portraits/women/44.jpg',
      job: 'Project Manager',
      link: '#'
    },
    {
      id: 4,
      name: 'Dmitry Volkov',
      profilePhoto: 'https://randomuser.me/api/portraits/men/45.jpg',
      job: 'DevOps Engineer',
      link: '#'
    },
    {
      id: 5,
      name: 'Maria Kuznetsova',
      profilePhoto: 'https://randomuser.me/api/portraits/women/47.jpg',
      job: 'QA Tester',
      link: '#'
    },
    {
      id: 6,
      name: 'Sergey Nikolaev',
      profilePhoto: 'https://randomuser.me/api/portraits/men/49.jpg',
      job: 'Fullstack Developer',
      link: '#'
    },
    {
      id: 7,
      name: 'Elena Vasilieva',
      profilePhoto: 'https://randomuser.me/api/portraits/women/50.jpg',
      job: 'Product Owner',
      link: '#'
    },
    {
      id: 8,
      name: 'Alexey Lebedev',
      profilePhoto: 'https://avatars.githubusercontent.com/u/4?v=4',
      job: 'Game Developer',
      link: '#'
    },
    {
      id: 9,
      name: 'Natalia Orlova',
      profilePhoto: 'https://randomuser.me/api/portraits/women/51.jpg',
      job: 'Business Analyst',
      link: '#'
    }
  ];

}
