"use strict";
var event_component_1 = require('./event.component');
var event_detail_routing_module_1 = require('./event-detail/event-detail-routing.module');
exports.EventsRoutes = [
    {
        path: 'event',
        component: event_component_1.EventsComponent,
        children: event_detail_routing_module_1.EventDetailRoutes.slice()
    },
];
