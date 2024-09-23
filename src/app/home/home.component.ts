import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('changeBgColor', [
      state('start', style({
        backgroundColor: 'blue'
      })),
      state('end', style({
        backgroundColor: 'red'
      })),
      transition('start => end', animate('1s')),
      transition('end => start', animate('0.5s'))
    ])
  ]
})
export class HomeComponent {
  currentState = 'start';

  toggleState() {
    this.currentState = this.currentState === 'start' ? 'end' : 'start';
  }
}
