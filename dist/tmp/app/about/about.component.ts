import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/Observable';

const TypeWriter: string[] = [
  'Delication to removing barriers to opportunity, so people can live to their full potential.',
];
const Space: string = '                    ';
const TypeWriterArray: string[] = TypeWriter.map(typeWriterText =>
  typeWriterText + Space
);

@Component({
  moduleId: module.id,
  selector: 'frk-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {
  public typeWriterDisplay$: any;

  ngOnInit() {
    let twDisplays$: any[] = TypeWriterArray.map(typeWriterText =>
      Observable
        .interval(50)
        .timeInterval()
        .take(typeWriterText.length + 1)
        .map((val, index) => typeWriterText.substr(0, index))
    );
    this.typeWriterDisplay$ = Observable.concat(...twDisplays$);
  }

}
