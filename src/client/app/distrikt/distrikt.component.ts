import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'frk-distrikt',
    templateUrl: 'distrikt.component.html',
    styleUrls: ['distrikt.component.css']
})
export class DistriktComponent implements OnInit {
    @ViewChild('section') section: any;

    public sectionOpacity: number;
    public nonFixedBackground: boolean;

    ngOnInit() {
        this.nonFixedBackground = false;
        this.sectionOpacity = 1;
    }

}
