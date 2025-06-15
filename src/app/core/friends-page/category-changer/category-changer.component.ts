import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-category-changer',
  imports: [
    NgForOf
  ],
  templateUrl: './category-changer.component.html',
  styleUrl: './category-changer.component.scss'
})


export class CategoryChangerComponent {
  categories: Category[] = [
    {
      id: 0,
      name: 'All Friends',
    },
    {
      id: 1,
      name: 'Suggestions',
    },
    {
      id: 2,
      name: 'Requests',
    },
  ];

  public choosedCategory:number = 0;

  chooseCategory(id : number) {
    this.choosedCategory = id;
  }
}
