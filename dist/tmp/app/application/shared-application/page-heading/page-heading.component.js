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
var PageHeadingComponent = (function () {
    function PageHeadingComponent() {
    }
    PageHeadingComponent.prototype.ngOnInit = function () {
    };
    PageHeadingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-page-heading',
            template: "<div class=\"page-heading\">     <div class=\"container\">         <div class=\"row\">             <div class=\"col-md-10 col-md-offset-1\">                 <h1 class=\"page-heading__title\">Team <span class=\"highlight\">Newsfeed</span></h1>                 <!--<ol class=\"page-heading__breadcrumb breadcrumb\">-->                     <!--<li><a href=\"_soccer_index.html\">Home</a></li>-->                     <!--<li><a href=\"_soccer_team-overview.html\">The Team</a></li>-->                     <!--<li class=\"active\">Overview</li>-->                 <!--</ol>-->             </div>         </div>     </div> </div>",
            styles: [".page-heading{background-image:url(assets/images/application/page-heading.jpg)}.page-heading:before{background-image:url(assets/images/application/page-heading-pattern.png)}@media (min-width:992px){.page-heading{padding:50px 0}}"]
        }), 
        __metadata('design:paramtypes', [])
    ], PageHeadingComponent);
    return PageHeadingComponent;
}());
exports.PageHeadingComponent = PageHeadingComponent;
