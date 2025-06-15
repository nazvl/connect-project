import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FriendCardComponent} from './friend-card/friend-card.component';
import {CategoryChangerComponent} from '../category-changer/category-changer.component';


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
    FriendCardComponent,
    CategoryChangerComponent,
    NgIf
  ],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.scss'
})

export class FriendsListComponent {

  choosedCategory: number = 0;

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
  friends2: Friend[] = [
    {
      id: 0,
      name: 'Oleg Fedorov',
      profilePhoto: 'https://randomuser.me/api/portraits/men/52.jpg',
      job: 'System Architect',
      link: '#'
    },
    {
      id: 1,
      name: 'Irina Sokolova',
      profilePhoto: 'https://randomuser.me/api/portraits/women/53.jpg',
      job: 'Scrum Master',
      link: '#'
    },
    {
      id: 2,
      name: 'Maxim Egorov',
      profilePhoto: 'https://randomuser.me/api/portraits/men/54.jpg',
      job: 'Security Specialist',
      link: '#'
    },
    {
      id: 3,
      name: 'Olga Popova',
      profilePhoto: 'https://randomuser.me/api/portraits/women/55.jpg',
      job: 'Technical Writer',
      link: '#'
    },
    {
      id: 4,
      name: 'Vladimir Kozlov',
      profilePhoto: 'https://randomuser.me/api/portraits/men/56.jpg',
      job: 'Cloud Engineer',
      link: '#'
    }
  ];
  friends3: Friend[] = [
    {
      id: 0,
      name: 'Tatiana Romanova',
      profilePhoto: 'https://randomuser.me/api/portraits/women/57.jpg',
      job: 'Data Scientist',
      link: '#'
    },
    {
      id: 1,
      name: 'Andrey Pavlov',
      profilePhoto: 'https://randomuser.me/api/portraits/men/58.jpg',
      job: 'ML Engineer',
      link: '#'
    },
    {
      id: 2,
      name: 'Ekaterina Ivanova',
      profilePhoto: 'https://randomuser.me/api/portraits/women/59.jpg',
      job: 'Technical Recruiter',
      link: '#'
    },
    {
      id: 3,
      name: 'Nikolay Gribov',
      profilePhoto: 'https://randomuser.me/api/portraits/men/60.jpg',
      job: 'IT Consultant',
      link: '#'
    },
    {
      id: 4,
      name: 'Veronika Melnikova',
      profilePhoto: 'https://randomuser.me/api/portraits/women/61.jpg',
      job: 'UX Researcher',
      link: '#'
    }
  ];

}
