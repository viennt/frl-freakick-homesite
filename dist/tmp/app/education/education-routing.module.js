"use strict";
var education_component_1 = require('./education.component');
var canActiveViaSecretCode_1 = require('../guards/canActiveViaSecretCode');
exports.EducationRoutes = [
    {
        path: 'education',
        component: education_component_1.EducationComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
];
