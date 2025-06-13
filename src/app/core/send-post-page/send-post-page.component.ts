import { Component } from '@angular/core';
import {SendPostPlaceComponent} from "./send-post-place/send-post-place.component";
import {PostTemplateComponent} from './post-template/post-template.component';

@Component({
  selector: 'app-send-post-page',
  imports: [
    SendPostPlaceComponent,
    PostTemplateComponent
  ],
  templateUrl: './send-post-page.component.html',
  styleUrl: './send-post-page.component.scss'
})
export class SendPostPageComponent {

}
