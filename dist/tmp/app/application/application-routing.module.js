"use strict";
var application_component_1 = require('./application.component');
var canActiveViaSecretCode_1 = require('../guards/canActiveViaSecretCode');
var canActivateViaAuthGuard_1 = require('../guards/canActivateViaAuthGuard');
var demo_graphic_routing_module_1 = require('./demo-graphic/demo-graphic-routing.module');
var time_line_page_routing_module_1 = require('./time-line-page/time-line-page-routing.module');
exports.ApplicationRoutes = [
    {
        path: 'app',
        component: application_component_1.ApplicationComponent,
        canActivate: [canActiveViaSecretCode_1.CanActivateViaSecretCode, canActivateViaAuthGuard_1.CanActivateViaAuthGuard],
        children: [
            { path: '', redirectTo: 'newsfeed', pathMatch: 'full' }
        ].concat(demo_graphic_routing_module_1.DemoGraphicRoutes, time_line_page_routing_module_1.TimeLinePageRoutes, [
            { path: '**', redirectTo: 'newsfeed', pathMatch: 'full' }
        ])
    },
];
