"use strict";
var demo_graphic_component_1 = require('./demo-graphic.component');
var canActiveViaSecretCode_1 = require('../../guards/canActiveViaSecretCode');
var canActivateViaAuthGuard_1 = require('../../guards/canActivateViaAuthGuard');
exports.DemoGraphicRoutes = [
    {
        path: 'demo-graphic',
        component: demo_graphic_component_1.DemoGraphicComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode, canActivateViaAuthGuard_1.CanActivateViaAuthGuard]
    },
];
