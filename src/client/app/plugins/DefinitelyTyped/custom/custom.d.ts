/// <reference path="../jquery/jquery.d.ts"/>
declare var Switchery: any;
declare var NProgress: any;
declare var $expand: any;
interface JQuery {
    YTPlayer(): JQuery;
    YTPlayer(options?: any): JQuery;
    smartresize(fn?: any): JQuery;
    mCustomScrollbar(fn?: any): JQuery;
    tooltip(fn?: any): JQuery;
    progressbar(fn?: any): JQuery;
    daterangepicker(fn?: any, callback?: any): JQuery;
}