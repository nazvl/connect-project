import {Component} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() searchTitle: string | undefined;
}
