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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var templates_module_1 = require('./templates/templates.module');
var page_header_component_1 = require('./page-header/page-header.component');
var page_heading_component_1 = require('./page-heading/page-heading.component');
var second_menu_bar_component_1 = require('./second-menu-bar/second-menu-bar.component');
var one_column_component_1 = require('./layouts/one-column/one-column.component');
var three_columns_component_1 = require('./layouts/three-columns/three-columns.component');
var SharedApplicationModule = (function () {
    function SharedApplicationModule() {
    }
    SharedApplicationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            exports: [
                templates_module_1.TemplatesModule,
                one_column_component_1.OneColumnLayoutComponent, three_columns_component_1.ThreeColumnsLayoutComponent
            ],
            declarations: [
                page_header_component_1.PageHeaderComponent, page_heading_component_1.PageHeadingComponent, second_menu_bar_component_1.SecondMenuBarComponent,
                one_column_component_1.OneColumnLayoutComponent, three_columns_component_1.ThreeColumnsLayoutComponent
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], SharedApplicationModule);
    return SharedApplicationModule;
}());
exports.SharedApplicationModule = SharedApplicationModule;
