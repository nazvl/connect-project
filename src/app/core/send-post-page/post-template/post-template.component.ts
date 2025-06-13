import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ProfilePhotoComponent} from '../../profile-photo/profile-photo.component';

@Component({
  selector: 'app-post-template',
  imports: [
    NgForOf,
    ProfilePhotoComponent,
    NgIf
  ],
  templateUrl: './post-template.component.html',
  styleUrl: './post-template.component.scss'
})


export class PostTemplateComponent {
  now = new Date();
  formatted = this.now.toLocaleString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  posts = [
    {
      id: 1,
      author: 'Johan Smith',
      time: this.formatted,
      photo: '',
      liked: false,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper libero vitae porttitor porta. Curabitur commodo risus sapien, ac auctor erat faucibus at. Nulla imperdiet dolor sagittis nisl aliquam, vel tristique est molestie. In sem sem, vestibulum sed luctus sed, sagittis at dui. Suspendisse potenti. Sed varius, libero ut finibus placerat, ex dui sagittis leo, vitae tempor enim ligula sit amet nunc. Mauris nec tortor eleifend, imperdiet massa at, efficitur enim. Fusce lobortis efficitur arcu sit amet facilisis. Praesent vitae nisi et libero volutpat interdum. Fusce quis lectus eu purus rhoncus commodo sit amet vitae mauris. Suspendisse sed nibh nisl. Proin id imperdiet erat. Nulla congue, nulla suscipit rutrum molestie, ipsum metus sagittis velit, sit amet suscipit lectus odio ac ex. ',
    },
    {
      id: 2,
      author: 'Ivan Petrov',
      time: this.formatted,
      photo: 'https://picsum.photos/700/900',
      liked: false,
      text: 'Я люблю чебуреки'},
    {
      id: 3,
      author: 'Garmon Igraet',
      time: this.formatted,
      photo: 'https://picsum.photos/300/600',
      liked: false,
      text: 'Хурма это лучший продукт в мире'
    }
  ]
  likedPost(id:number) {
    if (this.posts[id].liked) {
      this.posts[id].liked = false;
    }
    else {
      this.posts[id].liked = true;
    }
  }
}
