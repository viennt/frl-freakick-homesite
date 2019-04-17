"use strict";
var GameStatus = (function () {
    function GameStatus(options) {
        this.id = options && options.id || 0;
        this.statusCode = options && options.statusCode || '';
        this.statusName = options && options.statusName || '';
    }
    GameStatus.prototype.isAccepted = function () {
        return this.statusCode === 'AC';
    };
    GameStatus.prototype.isOnGoing = function () {
        return this.statusCode === 'ON';
    };
    GameStatus.prototype.isDone = function () {
        return this.statusCode === 'DO';
    };
    return GameStatus;
}());
exports.GameStatus = GameStatus;
