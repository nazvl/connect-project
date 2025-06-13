import { Component, OnInit } from '@angular/core';
import { LogoImageComponent } from './logo-image/logo-image.component';
import { SearchComponent } from './search/search.component';
import { ProfilePhotoComponent } from '../profile-photo/profile-photo.component';
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
  selector: 'app-header',
  imports: [
    LogoImageComponent,
    SearchComponent,
    ProfilePhotoComponent,
    NavigationComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit  {
  colorTheme: string = 'dark';

  ngOnInit() {

    const saveTheme = localStorage.getItem('colorTheme');
    if (saveTheme) {
      this.colorTheme = saveTheme;
    }

    this.colorChanger();
  }

  changeTheme() {
    if (this.colorTheme === 'dark') {
      this.colorTheme = 'light';
    } else {
      this.colorTheme = 'dark';
    }
    this.colorChanger();

    localStorage.setItem('colorTheme', this.colorTheme);

    console.log(this.colorTheme);
  };

  colorChanger() {
    const root = document.documentElement;
    if (this.colorTheme === 'dark') {
      root.style.setProperty('--background', '#121417');
      root.style.setProperty('--text', 'white');
      root.style.setProperty('--gray-secondary', '#A3ABB2');
      root.style.setProperty('--text-secondary', '#a89eff');
      root.style.setProperty('--gray-darker', '#2B3036');
      root.style.setProperty('--gray-darkest', '#1f2124');
    }
    else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--text', '#000000');
      root.style.setProperty('--gray-secondary', '#959595');
      root.style.setProperty('--text-secondary', '#3333ff');
      root.style.setProperty('--gray-darker', '#dddddd');
      root.style.setProperty('--gray-darkest', '#eeeeee');
    }
  }
}
