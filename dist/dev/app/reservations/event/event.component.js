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
var EventsComponent = (function () {
    function EventsComponent() {
    }
    Object.defineProperty(EventsComponent.prototype, "fadeIn", {
        get: function () {
            return 'in';
        },
        enumerable: true,
        configurable: true
    });
    EventsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.HostBinding('@fadeIn'), 
        __metadata('design:type', Object)
    ], EventsComponent.prototype, "fadeIn", null);
    EventsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-events',
            templateUrl: 'event.component.html',
            styles: ["\n      :host {\n          display: block;\n          min-height: calc(100vh - 200px)\n      }\n  "],
            animations: [
                core_1.trigger('fadeIn', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('void => *', core_1.animate(1000, core_1.keyframes([
                        core_1.style({ opacity: 0, offset: 0 }),
                        core_1.style({ opacity: 1, offset: 1 })
                    ]))),
                    core_1.transition('* => void', core_1.animate(1000, core_1.keyframes([
                        core_1.style({ opacity: 1, offset: 0 }),
                        core_1.style({ opacity: 0, offset: 1 })
                    ])))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvZXZlbnQvZXZlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFHTyxlQUFlLENBQUMsQ0FBQTtBQTBCdkI7SUFLRTtJQUVBLENBQUM7SUFOdUIsc0JBQUksbUNBQU07YUFBVjtZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7SUFNRCxrQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQVZEO1FBQUMsa0JBQVcsQ0FBQyxTQUFTLENBQUM7O2lEQUFBO0lBekJ6QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxNQUFNLEVBQUUsQ0FBQyxvR0FLUixDQUFDO1lBQ0YsVUFBVSxFQUFFO2dCQUNWLGNBQU8sQ0FBQyxRQUFRLEVBQUU7b0JBQ2hCLFlBQUssQ0FBQyxJQUFJLEVBQUUsWUFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQyxDQUFDLENBQUM7b0JBQ2hELGlCQUFVLENBQUMsV0FBVyxFQUFFLGNBQU8sQ0FBQyxJQUFJLEVBQUUsZ0JBQVMsQ0FBQzt3QkFDOUMsWUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7d0JBQzlCLFlBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO3FCQUMvQixDQUFDLENBQUMsQ0FBQztvQkFDSixpQkFBVSxDQUFDLFdBQVcsRUFBRSxjQUFPLENBQUMsSUFBSSxFQUFFLGdCQUFTLENBQUM7d0JBQzlDLFlBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO3dCQUM5QixZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztxQkFDL0IsQ0FBQyxDQUFDLENBQUM7aUJBQ0wsQ0FBQzthQUNIO1NBQ0YsQ0FBQzs7dUJBQUE7SUFjRixzQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksdUJBQWUsa0JBYTNCLENBQUEiLCJmaWxlIjoiYXBwL3Jlc2VydmF0aW9ucy9ldmVudC9ldmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgSG9zdEJpbmRpbmcsXG4gIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwga2V5ZnJhbWVzLCB0cmFuc2l0aW9uLCBhbmltYXRlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdmcmstZXZlbnRzJyxcbiAgdGVtcGxhdGVVcmw6ICdldmVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpXG4gICAgICB9XG4gIGBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmFkZUluJywgW1xuICAgICAgc3RhdGUoJ2luJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknfSkpLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgYW5pbWF0ZSgxMDAwLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDF9KVxuICAgICAgXSkpKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoMTAwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAxfSlcbiAgICAgIF0pKSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnQGZhZGVJbicpIGdldCBmYWRlSW4oKSB7XG4gICAgcmV0dXJuICdpbic7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9cbiAgfVxuXG59XG4iXX0=
