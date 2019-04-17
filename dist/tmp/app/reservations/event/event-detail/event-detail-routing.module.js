"use strict";
var event_detail_component_1 = require('./event-detail.component');
var event_images_component_1 = require('../event-images/event-images.component');
exports.EventDetailRoutes = [
    {
        path: ':id',
        component: event_detail_component_1.EventDetailComponent
    },
    {
        path: ':id/images',
        component: event_images_component_1.EventImagesComponent
    }
];
