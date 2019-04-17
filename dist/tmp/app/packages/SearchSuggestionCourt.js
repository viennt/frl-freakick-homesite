"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'SEARCH_SUGGESTION_COURT';
var SearchSuggestionCourt = (function (_super) {
    __extends(SearchSuggestionCourt, _super);
    function SearchSuggestionCourt() {
        _super.call(this, API_ENDPOINT);
    }
    SearchSuggestionCourt.prototype.setKeyWord = function (keyWord) {
        this.keyWord = keyWord;
        return this;
    };
    return SearchSuggestionCourt;
}(Package_1.Package));
exports.SearchSuggestionCourt = SearchSuggestionCourt;
