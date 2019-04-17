"use strict";
var brands_component_1 = require('./brands.component');
var canActiveViaSecretCode_1 = require('../guards/canActiveViaSecretCode');
exports.BrandsRoutes = [
    {
        path: 'brands',
        component: brands_component_1.BrandsComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode]
    },
];
