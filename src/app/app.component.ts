import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task0';
  constructor(){
    
  setTimeout(() => {
    this.title = "New Title after 3 seconds"
  },5);
  }
}
