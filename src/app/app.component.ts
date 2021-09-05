import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10-output-challenge';

  onomatopoeias : string[] = [];

  onReceiveNewOnomatopia(onomatopoeia : string) {
    this.onomatopoeias?.push(onomatopoeia);
  }
}
