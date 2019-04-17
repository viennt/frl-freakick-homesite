"use strict";
var Group = (function () {
    function Group(options) {
        this.groupId = options && options.groupId || -1;
        this.groupName = options && options.groupName || 'Unknown group';
        this.groupCode = options && options.groupCode || 'Unknown code';
        this.description = options && options.description || '';
    }
    return Group;
}());
exports.Group = Group;
