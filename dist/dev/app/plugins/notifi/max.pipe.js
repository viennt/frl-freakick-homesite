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
var MaxPipe = (function () {
    function MaxPipe() {
    }
    MaxPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var allowed = args[0];
        var received = value.length;
        if (received > allowed && allowed !== 0) {
            var toCut = allowed - received;
            return value.slice(0, toCut);
        }
        return value;
    };
    MaxPipe = __decorate([
        core_1.Pipe({ name: 'max' }), 
        __metadata('design:paramtypes', [])
    ], MaxPipe);
    return MaxPipe;
}());
exports.MaxPipe = MaxPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbHVnaW5zL25vdGlmaS9tYXgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBR3BEO0lBQUE7SUFZQSxDQUFDO0lBWEMsMkJBQVMsR0FBVCxVQUFVLEtBQWE7UUFBRSxjQUFjO2FBQWQsV0FBYyxDQUFkLHNCQUFjLENBQWQsSUFBYztZQUFkLDZCQUFjOztRQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUU1QixFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksS0FBSyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQVpIO1FBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDOztlQUFBO0lBYXBCLGNBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLGVBQU8sVUFZbkIsQ0FBQSIsImZpbGUiOiJhcHAvcGx1Z2lucy9ub3RpZmkvbWF4LnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOiAnbWF4J30pXG5leHBvcnQgY2xhc3MgTWF4UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgIGxldCBhbGxvd2VkID0gYXJnc1swXTtcbiAgICBsZXQgcmVjZWl2ZWQgPSB2YWx1ZS5sZW5ndGg7XG5cbiAgICBpZiAocmVjZWl2ZWQgPiBhbGxvd2VkICYmIGFsbG93ZWQgIT09IDApIHtcbiAgICAgIGxldCB0b0N1dCA9IGFsbG93ZWQgLSByZWNlaXZlZDtcbiAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgwLCB0b0N1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iXX0=
