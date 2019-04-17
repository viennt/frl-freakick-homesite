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
var TimeLineLoadingComponent = (function () {
    function TimeLineLoadingComponent() {
    }
    TimeLineLoadingComponent.prototype.ngOnInit = function () {
    };
    TimeLineLoadingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-template-time-line-loading',
            template: "<div class=\"blog-page blog-content-1 animated fadeIn\">     <div *ngFor=\"let i of [1, 2]\" class=\"blog-post-lg bordered blog-container\">         <div class=\"blog-title-transparent\">             <div class=\"blog-post-desc loading-content\">.</div>         </div>         <div class=\"blog-post-content\">             <h2 class=\"blog-title blog-post-title loading-content\">.</h2>             <p class=\"blog-post-desc loading-content\">                 . <br/> <br/> <br/> <br/>             </p>             <div class=\"blog-post-foot loading-content\">.</div>         </div>     </div> </div>",
            styles: [".timeline-badge-userpic{height:80px;width:80px}.btn-group.open .dropdown-toggle{box-shadow:none}.blog-content-1{padding:0}.blog-page .blog-container{margin:0}.blog-content-1 .blog-post-lg>.blog-img-thumb{height:180px}.blog-content-1 .blog-post-content>.blog-post-title{margin:0 0 15px;line-height:.7}.blog-content-1 .blog-post-content>.blog-post-desc{margin:0}.timeline-body-alerttitle,.timeline-body-time,.timeline-body-title{display:block;margin-left:0}.blog-content-1 .blog-post-desc>>>*{font-size:16px;line-height:1.3;font-weight:400;font-family:MuseoSans,sans-serif;margin:0;padding:0;background:transparent;box-shadow:none;border:none}.blog-content-1 .blog-post-desc>>>:not(a){color:#a0a9b4}.blog-content-1 .blog-post-lg>.blog-post-content>.blog-post-foot{border:none;padding:0}.blog-content-1 .blog-post-content>.blog-post-foot>.blog-post-meta>a{font-weight:400}"]
        }), 
        __metadata('design:paramtypes', [])
    ], TimeLineLoadingComponent);
    return TimeLineLoadingComponent;
}());
exports.TimeLineLoadingComponent = TimeLineLoadingComponent;
