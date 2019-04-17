import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'frk-terms',
  templateUrl: 'terms.component.html',
  styleUrls: ['terms.component.css']
})
export class TermsComponent implements OnInit {
  constructor(private el: ElementRef) {
    //
  }

  ngOnInit() {
    //
  }

  onToOurServices() {
    let x = document.querySelector("#our-services");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  }

  onToOurData() {
    let x = document.querySelector("#our-data");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  }

  onToOurCommunity() {
    let x = document.querySelector("#our-community");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  }

  onToAdditonalProvisons() {
    let x = document.querySelector("#additonal-provisons");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  }

  onToOther() {
    let x = document.querySelector("#other");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  }

  onTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
