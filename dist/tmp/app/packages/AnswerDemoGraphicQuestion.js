"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'ANSWER_DEMOGRAPHIC_QUESTIONS';
var AnswerDemoGraphicQuestion = (function (_super) {
    __extends(AnswerDemoGraphicQuestion, _super);
    function AnswerDemoGraphicQuestion() {
        _super.call(this, API_ENDPOINT);
    }
    AnswerDemoGraphicQuestion.prototype.setGenderId = function (gender) {
        this.genderId = Number(gender);
        return this;
    };
    AnswerDemoGraphicQuestion.prototype.setBirthDate = function (birthDate) {
        this.birthDate = Number(birthDate);
        return this;
    };
    AnswerDemoGraphicQuestion.prototype.setGameLevel = function (gameLevel) {
        this.gameLevel = Number(gameLevel);
        return this;
    };
    AnswerDemoGraphicQuestion.prototype.setInterestSportIds = function (interestSportIds) {
        this.lstInterestSportId = interestSportIds;
        return this;
    };
    return AnswerDemoGraphicQuestion;
}(Package_1.Package));
exports.AnswerDemoGraphicQuestion = AnswerDemoGraphicQuestion;
