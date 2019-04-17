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
var ClassSchedule_1 = require('../../../models/ClassSchedule');
var ClassScheduleComponent = (function () {
    function ClassScheduleComponent() {
    }
    ClassScheduleComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if ('classSchedule' === propName) {
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ClassSchedule_1.ClassSchedule)
    ], ClassScheduleComponent.prototype, "classSchedule", void 0);
    ClassScheduleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-class-schedule',
            template: "<div class=\"modal-dialog\" role=\"document\">   <div class=\"modal-content\">     <div class=\"modal-header\">       <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">         <span aria-hidden=\"true\">&times;</span>       </button>       <h4 class=\"modal-title\" id=\"myModalLabel\">Schedule</h4>     </div>     <div class=\"modal-body field-information\">       <table class=\"table table-hover\">         <thead>         <tr>           <th></th>           <th>Time</th>           <th>Address</th>           <th>Field/Room/Location</th>         </tr>         </thead>         <tbody>         <tr *ngIf=\"classSchedule.monday\">           <td><div class=\"date\"><span>Monday</span></div></td>           <td><span class=\"time\">{{ classSchedule.monday.from }} - {{ classSchedule.monday.to }}</span></td>           <td>{{ classSchedule.monday.field.branch.address }}</td>           <td>{{ classSchedule.monday.field.fieldCode }}</td>         </tr>         <tr *ngIf=\"classSchedule.tuesday\">           <td><div class=\"date\"><span>Tuesday</span></div></td>           <td><span class=\"time\">{{ classSchedule.tuesday.from }} - {{ classSchedule.tuesday.to }}</span></td>           <td>{{ classSchedule.tuesday.field.branch.address }}</td>           <td>{{ classSchedule.tuesday.field.fieldCode }}</td>         </tr>         <tr *ngIf=\"classSchedule.wednesday\">           <td><div class=\"date\"><span>Wednesday</span></div></td>           <td><span class=\"time\">{{ classSchedule.wednesday.from }} - {{ classSchedule.wednesday.to }}</span></td>           <td>{{ classSchedule.wednesday.field.branch.address }}</td>           <td>{{ classSchedule.wednesday.field.fieldCode }}</td>         </tr>         <tr *ngIf=\"classSchedule.thursday\">           <td><div class=\"date\"><span>Thursday</span></div></td>           <td><span class=\"time\">{{ classSchedule.thursday.from }} - {{ classSchedule.thursday.to }}</span></td>           <td>{{ classSchedule.thursday.field.branch.address }}</td>           <td>{{ classSchedule.thursday.field.fieldCode }}</td>         </tr>         <tr *ngIf=\"classSchedule.friday\">           <td><div class=\"date\"><span>Friday</span></div></td>           <td><span class=\"time\">{{ classSchedule.friday.from }} - {{ classSchedule.friday.to }}</span></td>           <td>{{ classSchedule.friday.field.branch.address }}</td>           <td>{{ classSchedule.friday.field.fieldCode }}</td>         </tr>         <tr *ngIf=\"classSchedule.saturday\">           <td><div class=\"date\"><span>Saturday</span></div></td>           <td><span class=\"time\">{{ classSchedule.saturday.from }} - {{ classSchedule.saturday.to }}</span></td>           <td>{{ classSchedule.saturday.field.branch.address }}</td>           <td>{{ classSchedule.saturday.field.fieldCode }}</td>         </tr>         <tr *ngIf=\"classSchedule.sunday\">           <td><div class=\"date\"><span>Sunday</span></div></td>           <td><span class=\"time\">{{ classSchedule.sunday.from }} - {{ classSchedule.sunday.to }}</span></td>           <td>{{ classSchedule.sunday.field.branch.address }}</td>           <td>{{ classSchedule.sunday.field.fieldCode }}</td>         </tr>         </tbody>       </table>     </div>   </div> </div>",
            styles: [".field-information>table td{line-height:2}.field-information>table th{color:#787878}.field-information>table td,.field-information>table th{border:none}.field-information>table td div.date{width:12vmin;border-radius:2vmin;background-color:#68cdff;color:#fcfcfc;display:table;text-align:center;font-weight:700}.field-information>table td div.date span{display:table-cell;vertical-align:middle}.field-information>table td span.time{color:#101010}.field-information>table td span.address{color:#787878}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ClassScheduleComponent);
    return ClassScheduleComponent;
}());
exports.ClassScheduleComponent = ClassScheduleComponent;
