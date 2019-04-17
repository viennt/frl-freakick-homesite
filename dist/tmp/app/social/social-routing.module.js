"use strict";
var social_component_1 = require('./social.component');
var canActiveViaSecretCode_1 = require('../guards/canActiveViaSecretCode');
exports.SocialRoutes = [
    {
        path: 'social',
        component: social_component_1.SocialComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
];
