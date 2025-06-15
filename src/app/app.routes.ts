import { Routes } from '@angular/router';
import { SendPostPageComponent } from './core/send-post-page/send-post-page.component';
import { FriendsPageComponent } from './core/friends-page/friends-page.component';
import { MessagesPageComponent } from './core/messages-page/messages-page.component';

export const routes: Routes = [
  { path: '', component: SendPostPageComponent },
  { path: 'friends', component: FriendsPageComponent },
  { path: 'messages', component: MessagesPageComponent },
];
