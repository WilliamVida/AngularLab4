import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  counter: number = 0;

  count() {
    this.counter++;
  }

  showhide: boolean = true;

  clickTwice() {
    if (this.showhide == true) {
      this.showhide = false;
    }
    else {
      this.showhide = true;
    }
  }
}
