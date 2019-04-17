"use strict";
var events_component_1 = require('./events.component');
var canActiveViaSecretCode_1 = require('../guards/canActiveViaSecretCode');
exports.EventsRoutes = [
    {
        path: 'events',
        component: events_component_1.EventsComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
];
