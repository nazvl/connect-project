import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-navigation',
  imports: [NgForOf],
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss'
})
export class ProfileNavigationComponent {
  links = [
    {id: 1, name: 'Home', image: '<i class="fa-regular fa-newspaper"></i>', link: ''},
    {id: 2, name: 'Friends', image: '<i class="fa-solid fa-user-group"></i>', link: 'friends'},
    {id: 3, name: 'Messages', image: '<i class="fa-regular fa-message"></i>', link: 'messages'}
  ];

  choosenSection: number = 0;

  constructor(private router: Router) {
  }


  ngOnInit() {
    this.chooseSection(0);
    // пока что так это временное решение, TODO: сделать чтобы оно нормально сохраняло текущую страницу
  }

  pageToID(page:string):number  {
    let id = 0;
    if(page == '/'){
      id = 0;
    }
    else if(page == '/friends'){
      id = 1;
    }
    else if(page == '/messages'){
      id = 2;
    }
    return id;
  }

  chooseSection(id: number): void {
    this.choosenSection = id;
    const route = this.links.find(link => link.id - 1 === id)?.link || '';
    this.router.navigate([route]);

  }
}
