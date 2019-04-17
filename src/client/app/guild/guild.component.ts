import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'frk-guild',
    templateUrl: 'guild.component.html',
    styleUrls: ['guild.component.css']
})
export class GuildComponent implements OnInit {
    @ViewChild('section') section: any;

    public sectionOpacity: number;
    public nonFixedBackground: boolean;

    ngOnInit() {
        this.nonFixedBackground = false;
        this.sectionOpacity = 1;
    }

}
