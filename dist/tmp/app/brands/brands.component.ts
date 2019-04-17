import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'frk-brands',
    templateUrl: 'brands.component.html',
    styleUrls: ['brands.component.css']
})
export class BrandsComponent implements OnInit {
    @ViewChild('section') section: any;

    public sectionOpacity: number;
    public nonFixedBackground: boolean;

    constructor() {
        //
    }

    ngOnInit() {
        this.nonFixedBackground = false;
        this.sectionOpacity = 1;
    }

    // @HostListener('window:scroll', ['$event']) calcFirstSectionOpacity(event: any) {
    //     let elHeight = this.section.nativeElement.offsetHeight;
    //     let scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
    //     let opacity = 1 - (scrollToTop / (elHeight / 3));
    //
    //     this.sectionOpacity = (opacity < 0.3) ? 0.3 : opacity;
    //     this.nonFixedBackground = (scrollToTop + window.innerHeight) >= elHeight;
    // }

}
