"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var time_line_card_standard_component_1 = require('../time-line-card-standard/time-line-card-standard.component');
var TimeLineCardMatchupComponent = (function (_super) {
    __extends(TimeLineCardMatchupComponent, _super);
    function TimeLineCardMatchupComponent() {
        _super.call(this);
    }
    TimeLineCardMatchupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-template-time-line-card-matchup',
            templateUrl: 'time-line-card-matchup.component.html',
            styles: ["\n      .game-result__team-logo img {\n          max-height: 100%;\n      }\n      @media (min-width: 992px) {\n          .game-result__team {\n              text-align: center;\n          }\n      }\n      @media (min-width: 992px) {\n          .game-result__team--first .game-result__team-logo {\n              margin: 0 0 10px 0;\n              float: none;\n          }\n      }\n      @media (min-width: 992px) {\n          .game-result__team--second .game-result__team-logo {\n              margin: 0 0 10px 0;\n              float: none;\n          }\n      }\n      @media (min-width: 992px) {\n          .game-result__team-info {\n              padding-top: 10px;\n          }\n      }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], TimeLineCardMatchupComponent);
    return TimeLineCardMatchupComponent;
}(time_line_card_standard_component_1.TimeLineCardStandardComponent));
exports.TimeLineCardMatchupComponent = TimeLineCardMatchupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vdGVtcGxhdGVzL3RpbWUtbGluZS1jYXJkL3RpbWUtbGluZS1jYXJkLW1hdGNodXAvdGltZS1saW5lLWNhcmQtbWF0Y2h1cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLGtEQUE4Qyw4REFBOEQsQ0FBQyxDQUFBO0FBa0M3RztJQUFrRCxnREFBNkI7SUFDN0U7UUFDRSxpQkFBTyxDQUFDO0lBQ1YsQ0FBQztJQW5DSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFDQUFxQztZQUMvQyxXQUFXLEVBQUUsdUNBQXVDO1lBQ3BELE1BQU0sRUFBRSxDQUFDLDRyQkEwQlIsQ0FBQztTQUNILENBQUM7O29DQUFBO0lBS0YsbUNBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKaUQsaUVBQTZCLEdBSTlFO0FBSlksb0NBQTRCLCtCQUl4QyxDQUFBIiwiZmlsZSI6ImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vdGVtcGxhdGVzL3RpbWUtbGluZS1jYXJkL3RpbWUtbGluZS1jYXJkLW1hdGNodXAvdGltZS1saW5lLWNhcmQtbWF0Y2h1cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGltZUxpbmVDYXJkU3RhbmRhcmRDb21wb25lbnQgfSBmcm9tICcuLi90aW1lLWxpbmUtY2FyZC1zdGFuZGFyZC90aW1lLWxpbmUtY2FyZC1zdGFuZGFyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtdGVtcGxhdGUtdGltZS1saW5lLWNhcmQtbWF0Y2h1cCcsXG4gIHRlbXBsYXRlVXJsOiAndGltZS1saW5lLWNhcmQtbWF0Y2h1cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICAgIC5nYW1lLXJlc3VsdF9fdGVhbS1sb2dvIGltZyB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgIC5nYW1lLXJlc3VsdF9fdGVhbSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAuZ2FtZS1yZXN1bHRfX3RlYW0tLWZpcnN0IC5nYW1lLXJlc3VsdF9fdGVhbS1sb2dvIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAuZ2FtZS1yZXN1bHRfX3RlYW0tLXNlY29uZCAuZ2FtZS1yZXN1bHRfX3RlYW0tbG9nbyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgLmdhbWUtcmVzdWx0X190ZWFtLWluZm8ge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVMaW5lQ2FyZE1hdGNodXBDb21wb25lbnQgZXh0ZW5kcyBUaW1lTGluZUNhcmRTdGFuZGFyZENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiJdfQ==
