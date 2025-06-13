import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-logo-image',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './logo-image.component.html',
  styleUrl: './logo-image.component.scss'
})
export class LogoImageComponent {

}
