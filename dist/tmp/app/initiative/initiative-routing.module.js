"use strict";
var initiative_component_1 = require('./initiative.component');
var canActiveViaSecretCode_1 = require('../guards/canActiveViaSecretCode');
exports.InitiativeRoutes = [
    {
        path: 'initiative',
        component: initiative_component_1.InitiativeComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
];
