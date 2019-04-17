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
var TimeLinePageComponent = (function () {
    function TimeLinePageComponent() {
    }
    TimeLinePageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-time-line',
            template: "<app-layout-three-columns>     <div page-body>         <app-posting-event-box></app-posting-event-box>         <router-outlet></router-outlet>         <router-outlet name=\"event\"></router-outlet>     </div>     <div page-right-sidebar>         <!-- TODO: Place by sponsored event or weather box -->         <div class=\"portlet light bordered\">             <div class=\"portlet-title\">                 <div class=\"caption\">                     <span class=\"caption-subject bold\">Sponsored by Adidas</span>                 </div>             </div>             <div class=\"portlet-body\">                 <div class=\"mt-element-overlay\">                     <div class=\"row\">                         <div class=\"col-md-12\">                             <div class=\"mt-overlay-2 mt-overlay-2-grey\">                                 <img src=\"./assets/images/ads.jpg\">                                 <div class=\"mt-overlay\">                                     <a class=\"mt-info btn default btn-outline\" href=\"javascript:;\">Learn More</a>                                 </div>                             </div>                         </div>                     </div>                 </div>             </div>         </div>         <div class=\"portlet light bordered\">             <div class=\"portlet-title\">                 <div class=\"caption\">                     <span class=\"caption-subject bold\">Sponsored by Adidas</span>                 </div>             </div>             <div class=\"portlet-body\">                 <div class=\"mt-element-overlay\">                     <div class=\"row\">                         <div class=\"col-md-12\">                             <div class=\"mt-overlay-2 mt-overlay-2-grey\">                                 <img src=\"./assets/images/ads2.jpg\">                                 <div class=\"mt-overlay\">                                     <a class=\"mt-info btn default btn-outline\" href=\"javascript:;\">Learn More</a>                                 </div>                             </div>                         </div>                     </div>                 </div>             </div>         </div>     </div> </app-layout-three-columns>"
        }), 
        __metadata('design:paramtypes', [])
    ], TimeLinePageComponent);
    return TimeLinePageComponent;
}());
exports.TimeLinePageComponent = TimeLinePageComponent;
