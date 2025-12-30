import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //tyleUrls: ['./app.component.css']
  styles : [`
    h1{
      color : dodgerblue;
      }
    `]
})
export class AppComponent {
  title = 'NewApp';
}
