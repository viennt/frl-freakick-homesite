"use strict";
var Message = (function () {
    function Message(messageType, data) {
        this.messageType = messageType;
        this.data = data;
    }
    Message.fromJSON = function (messageText) {
        var result = null;
        var wrapper = JSON.parse(messageText);
        if (wrapper.data && 'EMPTY' !== wrapper.data.toUpperCase()) {
            if (wrapper.data.startsWith('{')) {
                result = new Message(wrapper.messageType, JSON.parse(wrapper.data));
            }
            else {
                result = new Message(wrapper.messageType, wrapper.data);
            }
        }
        else {
            result = new Message(wrapper.messageType);
        }
        return result;
    };
    Message.prototype.toJSON = function () {
        return JSON.stringify({
            'messageType': this.messageType,
            'data': this.data ? JSON.stringify(this.data) : 'EMPTY'
        });
    };
    return Message;
}());
exports.Message = Message;
