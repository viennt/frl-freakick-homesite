import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/Observable';

const TypeWriter: string[] = [
  'Transforming the City into a Classroom'
];
const Space: string = '                    ';
const TypeWriterArray: string[] = TypeWriter.map(typeWriterText =>
  typeWriterText + Space
);

@Component({
  moduleId: module.id,
  selector: 'frk-education',
  templateUrl: 'education.component.html',
  styleUrls: ['education.component.css']
})
export class EducationComponent implements OnInit {
  public typeWriterDisplay$: any;

  public sectionOpacity: number;
  public nonFixedBackground: boolean;

  ngOnInit() {
    let twDisplays$: any[] = TypeWriterArray.map(typeWriterText =>
      Observable
        .interval(50)
        .timeInterval()
        .take(typeWriterText.length + 1)
        .map((val, index) => typeWriterText.substr(0, index))
    );
    this.typeWriterDisplay$ = Observable.concat(...twDisplays$);

    this.nonFixedBackground = false;
    this.sectionOpacity = 1;
  }

}
