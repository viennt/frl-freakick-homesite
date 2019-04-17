import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hp-what-on-freakick',
  templateUrl: 'what-on-freakick.component.html',
  styleUrls: ['what-on-freakick.component.css']
})
export class WhatOnFreakickComponent {
  @Output() scroll: EventEmitter<string> = new EventEmitter<string>();

  scrollTo(section: string) {
    this.scroll.emit(section);
  }
}
