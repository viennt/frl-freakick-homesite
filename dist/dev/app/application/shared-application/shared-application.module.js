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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vc2hhcmVkLWFwcGxpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLGlDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBRS9ELHNDQUFvQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzFFLHVDQUFxQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzdFLDBDQUF1Qyw2Q0FBNkMsQ0FBQyxDQUFBO0FBRXJGLHFDQUF5QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3JGLHdDQUE0QyxpREFBaUQsQ0FBQyxDQUFBO0FBYzlGO0lBQUE7SUFDQSxDQUFDO0lBYkQ7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHFCQUFZLENBQUM7WUFDckMsT0FBTyxFQUFFO2dCQUNQLGtDQUFlO2dCQUNmLCtDQUF3QixFQUFFLHFEQUEyQjthQUN0RDtZQUNELFlBQVksRUFBRTtnQkFDWiwyQ0FBbUIsRUFBRSw2Q0FBb0IsRUFBRSxrREFBc0I7Z0JBQ2pFLCtDQUF3QixFQUFFLHFEQUEyQjthQUN0RDtZQUNELFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQzs7K0JBQUE7SUFFRiw4QkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksK0JBQXVCLDBCQUNuQyxDQUFBIiwiZmlsZSI6ImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vc2hhcmVkLWFwcGxpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVGVtcGxhdGVzTW9kdWxlIH0gZnJvbSAnLi90ZW1wbGF0ZXMvdGVtcGxhdGVzLm1vZHVsZSc7XG5cbmltcG9ydCB7IFBhZ2VIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlSGVhZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1oZWFkaW5nL3BhZ2UtaGVhZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Vjb25kTWVudUJhckNvbXBvbmVudCB9IGZyb20gJy4vc2Vjb25kLW1lbnUtYmFyL3NlY29uZC1tZW51LWJhci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBPbmVDb2x1bW5MYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvb25lLWNvbHVtbi9vbmUtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaHJlZUNvbHVtbnNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvdGhyZWUtY29sdW1ucy90aHJlZS1jb2x1bW5zLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZW1wbGF0ZXNNb2R1bGUsXG4gICAgT25lQ29sdW1uTGF5b3V0Q29tcG9uZW50LCBUaHJlZUNvbHVtbnNMYXlvdXRDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGFnZUhlYWRlckNvbXBvbmVudCwgUGFnZUhlYWRpbmdDb21wb25lbnQsIFNlY29uZE1lbnVCYXJDb21wb25lbnQsXG4gICAgT25lQ29sdW1uTGF5b3V0Q29tcG9uZW50LCBUaHJlZUNvbHVtbnNMYXlvdXRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkQXBwbGljYXRpb25Nb2R1bGUge1xufVxuIl19
