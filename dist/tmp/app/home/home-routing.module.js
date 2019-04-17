"use strict";
var home_component_1 = require('./home.component');
var canActiveViaSecretCode_1 = require('../guards/canActiveViaSecretCode');
exports.HomeRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
];
