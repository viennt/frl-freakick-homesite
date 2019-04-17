"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Event_1 = require('../../../../../models/Event');
var ShortEventDetailComponent = (function () {
    function ShortEventDetailComponent() {
    }
    ShortEventDetailComponent.prototype.ngOnInit = function () {
        if (this.event.images && this.event.images.length) {
            this.displayEventImageIndex = 0;
            this.displayEventImage = this.event.images[this.displayEventImageIndex];
        }
    };
    ShortEventDetailComponent.prototype.ngAfterViewInit = function () {
        this.onResize(null);
    };
    ShortEventDetailComponent.prototype.onResize = function (event) {
        if (window.innerWidth >= 768) {
            var parentOffsetHeight = this.postInner.nativeElement.parentElement.offsetHeight + 'px';
            this.postThumb.nativeElement.style.height = parentOffsetHeight;
            this.postInner.nativeElement.style.height = parentOffsetHeight;
        }
        else {
            this.postThumb.nativeElement.style.height = 'auto';
            this.postInner.nativeElement.style.height = 'auto';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Event_1.Event)
    ], ShortEventDetailComponent.prototype, "event", void 0);
    __decorate([
        core_1.ViewChild('postThumb'), 
        __metadata('design:type', Object)
    ], ShortEventDetailComponent.prototype, "postThumb", void 0);
    __decorate([
        core_1.ViewChild('postInner'), 
        __metadata('design:type', Object)
    ], ShortEventDetailComponent.prototype, "postInner", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ShortEventDetailComponent.prototype, "onResize", null);
    ShortEventDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-template-short-event-detail',
            template: "<div *ngIf=\"event\" class=\"posts posts--cards posts--cards-thumb-left post-list\">     <div class=\"post-list__item\">         <div class=\"posts__item posts__item--card posts__item--category-1 card no-space\">             <figure class=\"posts__thumb\" #postThumb>                 <a><img [src]=\"displayEventImage\" alt=\"\" (error)=\"$event.target.style.display = 'none'\"></a>             </figure>             <div class=\"posts__inner\" #postInner>                 <div class=\"card__content\">                     <div class=\"posts__cat\">                         <span class=\"label posts__cat-label\">                             {{ event.eventTypeName }}                             <span *ngIf=\"event.status && event.status.id === 1\">                                 <i data-toggle=\"tooltip\" title=\"Personal\"                                    class=\"fa fa-user fa-fw\"></i>                                 Personal                             </span>                             <span *ngIf=\"event.status && event.status.id === 2\">                                 <i data-toggle=\"tooltip\" title=\"Public\"                                    class=\"fa fa-globe fa-fw\"></i>                                 Public                             </span>                             <span *ngIf=\"event.status && event.status.id === 3\">                                 <i data-toggle=\"tooltip\" title=\"Canceled\"                                    class=\"fa fa-remove fa-fw\"></i>                                 Canceled                             </span>                         </span>                     </div>                     <h6 class=\"posts__title\"><a href=\"#\">{{ event.name }}</a></h6>                     <time *ngIf=\"event.startDate\" datetime=\"2016-08-23\" class=\"posts__date\">{{ event.startDate | date:shortDate }}</time>                     <div *ngIf=\"event.description\" class=\"posts__excerpt\">                     <span *ngIf=\"expandEventDescription\"                           [innerHTML]=\"event.description\"></span>                         <span *ngIf=\"!expandEventDescription\"                               [innerHTML]=\"event.description.slice(0, 150)\"></span>                         <span *ngIf=\"event.description.length > 150 && !expandEventDescription\">...</span>                         <a *ngIf=\"event.description.length > 150 && !expandEventDescription\"                            (click)=\"expandEventDescription = !expandEventDescription\" class=\"see-more\">                             see more</a>                     </div>                     <div *ngIf=\"event.address\">                         <a class=\"font-grey-cascade\">                             <i class=\"icon-pointer\"></i> {{ event.address }}                         </a>                     </div>                     <div *ngIf=\"event.latitude && event.longitude\" class=\"blog-post-desc animated fadeIn\">                         <div class=\"event-location\">                             <img [src]=\"'https://maps.googleapis.com/maps/api/staticmap?center=' + event.latitude + ',' + event.longitude + '&markers=color:red:G%7C' + event.latitude + ',' + event.longitude + '&zoom=15&size=640x160&maptype=terrain&key=AIzaSyAkdzOcR6yEpBmtHEuXxCQFYTSywnuckEI'\" alt=\"\">                         </div>                     </div>                     <div *ngIf=\"event.ageGroups && event.ageGroups.length\" class=\"hidden-xs\">                         <div class=\"posts__excerpt\">                     <span *ngFor=\"let group of event.ageGroups\">                           <span class=\"badge bg-grey bg-font-grey\">{{ group.groupName }}</span>                     </span>                         </div>                     </div>                 </div>                 <footer class=\"posts__footer card__footer\">                     <div *ngIf=\"event.createdBy\" class=\"post-author\">                         <figure class=\"post-author__avatar\">                             <img [src]=\"event.createdBy.userImage\" alt=\"Post Author Avatar\">                         </figure>                         <div class=\"post-author__info\">                             <h4 class=\"post-author__name\">{{ event.createdBy.fullName }}</h4>                         </div>                     </div>                     <app-template-time-line-card-action [event]=\"event\" class=\"post__meta meta\">                     </app-template-time-line-card-action>                 </footer>             </div>         </div>     </div> </div>",
            styles: [".card{border:none;background:#1e2024;min-height:80vh}.event-location img{width:100%;-webkit-mask-image:linear-gradient(left,transparent,#000,transparent);-webkit-mask-image:-webkit-linear-gradient(left,transparent,#000,transparent)}.posts--cards-thumb-left .posts__inner{padding-bottom:61px;background:#fff}@media (min-width:768px){.posts--cards-thumb-left .posts__thumb{display:table;max-width:50%;min-width:50%}.posts--cards-thumb-left .posts__thumb a{display:table-cell;vertical-align:middle}}.card__content{overflow:auto;height:100%;width:100%}.card__content::-webkit-scrollbar{width:5px;background-color:#f5f5f5}.card__content::-webkit-scrollbar-thumb{border-radius:10px;background-color:#38a9ff}.card__content::-webkit-scrollbar-track{border-radius:10px;background-color:#f5f5f5}.posts__item--card .posts__footer{height:auto;position:absolute;bottom:0}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ShortEventDetailComponent);
    return ShortEventDetailComponent;
}());
exports.ShortEventDetailComponent = ShortEventDetailComponent;
