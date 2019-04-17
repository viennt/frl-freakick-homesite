"use strict";
var reference_agreement_component_1 = require('./reference-agreement.component');
var canActiveViaSecretCode_1 = require('../guards/canActiveViaSecretCode');
exports.ReferenceAgreementRoutes = [
    {
        path: 'reference-agreement',
        component: reference_agreement_component_1.ReferenceAgreementComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
];
