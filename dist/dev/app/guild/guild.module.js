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
var shared_module_1 = require('../shared/shared.module');
var index_1 = require('../core/scroll/index');
var guild_component_1 = require('./guild.component');
var second_section_component_1 = require('./second-section/second-section.component');
var GuildModule = (function () {
    function GuildModule() {
    }
    GuildModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, index_1.ScrollModule],
            exports: [guild_component_1.GuildComponent],
            declarations: [guild_component_1.GuildComponent, second_section_component_1.SecondSectionComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], GuildModule);
    return GuildModule;
}());
exports.GuildModule = GuildModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ndWlsZC9ndWlsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUV2RCxzQkFBNkIsc0JBQXNCLENBQUMsQ0FBQTtBQUNwRCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCx5Q0FBdUMsMkNBQTJDLENBQUMsQ0FBQTtBQVFuRjtJQUFBO0lBQTJCLENBQUM7SUFONUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLG9CQUFZLENBQUM7WUFDckMsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUN6QixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLGlEQUFzQixDQUFDO1lBQ3RELFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7O21CQUFBO0lBQ3lCLGtCQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG1CQUFXLGNBQUksQ0FBQSIsImZpbGUiOiJhcHAvZ3VpbGQvZ3VpbGQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBTY3JvbGxNb2R1bGUgfSBmcm9tICcuLi9jb3JlL3Njcm9sbC9pbmRleCc7XG5pbXBvcnQgeyBHdWlsZENvbXBvbmVudCB9IGZyb20gJy4vZ3VpbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlY29uZFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL3NlY29uZC1zZWN0aW9uL3NlY29uZC1zZWN0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1NoYXJlZE1vZHVsZSwgU2Nyb2xsTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbR3VpbGRDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW0d1aWxkQ29tcG9uZW50LCBTZWNvbmRTZWN0aW9uQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBHdWlsZE1vZHVsZSB7IH1cbiJdfQ==
