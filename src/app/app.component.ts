import { Component } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'yl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: ActivatedRoute) {

  }
}
