"use strict";
var Message_1 = require('../models/Message');
var Package = (function () {
    function Package(apiEndpoint) {
        Package.API_ENDPOINT = apiEndpoint;
    }
    Package.prototype.getMessage = function () {
        return new Message_1.Message(Package.API_ENDPOINT, this);
    };
    return Package;
}());
exports.Package = Package;
