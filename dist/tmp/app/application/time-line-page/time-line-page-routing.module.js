"use strict";
var time_line_page_component_1 = require('./time-line-page.component');
var all_events_component_1 = require('./all-events/all-events.component');
var single_event_modal_component_1 = require('./single-event-modal/single-event-modal.component');
exports.TimeLinePageRoutes = [
    { path: 'newsfeed', component: time_line_page_component_1.TimeLinePageComponent, children: [
            { path: '', component: all_events_component_1.AllEventsComponent },
            { path: '?mode=standalone', redirectTo: '/', pathMatch: 'full' },
            { path: ':id', component: single_event_modal_component_1.SingleEventModalComponent, outlet: 'event' }
        ]
    }
];
