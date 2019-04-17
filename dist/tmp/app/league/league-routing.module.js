"use strict";
var league_component_1 = require('./league.component');
var canActiveViaSecretCode_1 = require('../guards/canActiveViaSecretCode');
exports.LeagueRoutes = [
    {
        path: 'leagues',
        component: league_component_1.LeagueComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
];
