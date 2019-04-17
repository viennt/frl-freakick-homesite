import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'frk-privacy',
    templateUrl: 'privacy.component.html',
    styles: [`
      .terms {
          padding: 60px 48px;
          max-width: 960px;
          margin: auto;
      }
      .terms p {
          font-weight: 300;
          color: #23282b;
          line-height: 150%;
          margin: 0 0 15px 0;
      }
      ol {
          list-style-type: decimal;
      }
      ol > li > ol {
          list-style-type: upper-alpha;
      }

  `]
})
export class PrivacyComponent implements OnInit {
    constructor() {
        //
    }

    ngOnInit() {
        //
    }
}
