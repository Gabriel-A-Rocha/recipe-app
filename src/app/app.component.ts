import { Component } from '@angular/core';
import { TabOptions } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tab: TabOptions = 'Recipes';

  handleTabClick(tab: TabOptions) {
    this.tab = tab;
  }
}
