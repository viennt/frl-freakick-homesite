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
var ButtonDirective = (function () {
    function ButtonDirective(el) {
        this.el = el;
        this.loadingElement = document.createElement('I');
        var spaceElement = document.createElement('SPAN');
        spaceElement.innerHTML = ' ';
        this.el.nativeElement.appendChild(this.loadingElement);
        this.el.nativeElement.appendChild(spaceElement);
    }
    ButtonDirective.prototype.ngOnChanges = function (changes) {
        if ('not-ready' === this.state) {
            this.notReadyState();
        }
        else if ('ready' === this.state) {
            this.readyState();
        }
        else if ('loading' === this.state) {
            this.loadingState();
        }
        else if ('finish' === this.state) {
            this.finishState();
        }
    };
    ButtonDirective.prototype.notReadyState = function () {
        this.loadingElement.className = '';
        this.el.nativeElement.setAttribute('disabled', true);
    };
    ButtonDirective.prototype.readyState = function () {
        this.loadingElement.className = '';
        this.el.nativeElement.removeAttribute('disabled');
    };
    ButtonDirective.prototype.loadingState = function () {
        this.loadingElement.className = 'fa fa-spinner fa-spin';
        this.el.nativeElement.setAttribute('disabled', true);
    };
    ButtonDirective.prototype.finishState = function () {
        this.loadingElement.className = 'fa fa-check';
        this.el.nativeElement.removeAttribute('disabled');
    };
    __decorate([
        core_1.Input('loadingState'), 
        __metadata('design:type', String)
    ], ButtonDirective.prototype, "state", void 0);
    ButtonDirective = __decorate([
        core_1.Directive({
            selector: '[loadingState]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ButtonDirective);
    return ButtonDirective;
}());
exports.ButtonDirective = ButtonDirective;
