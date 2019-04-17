"use strict";
var ButtonState = (function () {
    function ButtonState() {
        this.ready();
    }
    ButtonState.prototype.notReady = function () {
        this.state = 'not-ready';
    };
    ButtonState.prototype.ready = function () {
        this.state = 'ready';
    };
    ButtonState.prototype.loading = function () {
        this.state = 'loading';
    };
    ButtonState.prototype.finish = function () {
        this.state = 'finish';
    };
    ButtonState.prototype.isNotReady = function () {
        return this.state === 'not-ready';
    };
    ButtonState.prototype.isReady = function () {
        return this.state === 'ready';
    };
    ButtonState.prototype.isLoading = function () {
        return this.state === 'loading';
    };
    ButtonState.prototype.isFinished = function () {
        return this.state === 'finish';
    };
    return ButtonState;
}());
exports.ButtonState = ButtonState;
