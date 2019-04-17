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
var join_freakick_component_1 = require('./join-freakick.component');
var JoinFreakickModule = (function () {
    function JoinFreakickModule() {
    }
    JoinFreakickModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, index_1.ScrollModule],
            exports: [join_freakick_component_1.JoinFreakickComponent],
            declarations: [join_freakick_component_1.JoinFreakickComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], JoinFreakickModule);
    return JoinFreakickModule;
}());
exports.JoinFreakickModule = JoinFreakickModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9qb2luLWZyZWFraWNrL2pvaW4tZnJlYWtpY2subW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsc0JBQTZCLHNCQUFzQixDQUFDLENBQUE7QUFFcEQsd0NBQXNDLDJCQUEyQixDQUFDLENBQUE7QUFRbEU7SUFBQTtJQUFrQyxDQUFDO0lBTm5DO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsNEJBQVksRUFBRSxvQkFBWSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLCtDQUFxQixDQUFDO1lBQ2hDLFlBQVksRUFBRSxDQUFDLCtDQUFxQixDQUFDO1lBQ3JDLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQzs7MEJBQUE7SUFDZ0MseUJBQUM7QUFBRCxDQUFsQyxBQUFtQyxJQUFBO0FBQXRCLDBCQUFrQixxQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9qb2luLWZyZWFraWNrL2pvaW4tZnJlYWtpY2subW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2Nyb2xsTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9zY3JvbGwvaW5kZXgnO1xuXG5pbXBvcnQgeyBKb2luRnJlYWtpY2tDb21wb25lbnQgfSBmcm9tICcuL2pvaW4tZnJlYWtpY2suY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1NoYXJlZE1vZHVsZSwgU2Nyb2xsTW9kdWxlXSxcbiAgZXhwb3J0czogW0pvaW5GcmVha2lja0NvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW0pvaW5GcmVha2lja0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEpvaW5GcmVha2lja01vZHVsZSB7IH1cbiJdfQ==
