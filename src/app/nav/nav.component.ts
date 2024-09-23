import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navBtn:boolean = false;
  constructor(){};

  togglePanel() {
    this.navBtn = !this.navBtn;
    console.log(this.navBtn);
  }
}
