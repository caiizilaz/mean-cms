import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  @Output() callback: EventEmitter<boolean> = new EventEmitter<boolean>();
  visibleNav = false;

  constructor() { }

  ngOnInit() {
  }
  toggleNav(val) {
    this.visibleNav = val;
    this.callback.emit(this.visibleNav);
  }

}
