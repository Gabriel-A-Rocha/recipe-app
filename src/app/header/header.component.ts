import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export type TabOptions = 'Recipes' | 'Shopping List';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() tabClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleTabSelection(tab: TabOptions) {
    this.tabClick.emit(tab);
  }
}
