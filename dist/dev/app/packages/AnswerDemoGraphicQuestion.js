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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9BbnN3ZXJEZW1vR3JhcGhpY1F1ZXN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdCQUF3QixXQUFXLENBQUMsQ0FBQTtBQVFwQyxJQUFNLFlBQVksR0FBRyw4QkFBOEIsQ0FBQztBQUVwRDtJQUErQyw2Q0FBTztJQU1wRDtRQUNFLGtCQUFNLFlBQVksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTSwrQ0FBVyxHQUFsQixVQUFtQixNQUFjO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sZ0RBQVksR0FBbkIsVUFBb0IsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxnREFBWSxHQUFuQixVQUFvQixTQUFpQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHVEQUFtQixHQUExQixVQUEyQixnQkFBMEI7UUFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUgsZ0NBQUM7QUFBRCxDQTlCQSxBQThCQyxDQTlCOEMsaUJBQU8sR0E4QnJEO0FBOUJZLGlDQUF5Qiw0QkE4QnJDLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL0Fuc3dlckRlbW9HcmFwaGljUXVlc3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWNrYWdlIH0gZnJvbSAnLi9QYWNrYWdlJztcblxuLyoqXG4gKiBKaXJhIHRpY2tldDogICAgICAgICAgIEdMRC0yOTMgKGh0dHBzOi8vZnJlYWtpY2suYXRsYXNzaWFuLm5ldC9icm93c2UvR0xELTI5MylcbiAqIEFQSSBFbmRwb2ludDogICAgICAgICAgQU5TV0VSX0RFTU9HUkFQSElDX1FVRVNUSU9OU1xuICogU3VjY2VzcyBtZXNzYWdlIHR5cGU6ICBBTlNXRVJfREVNT0dSQVBISUNfUVVFU1RJT05TX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgUkVRVUVTVF9FUlJPUlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnQU5TV0VSX0RFTU9HUkFQSElDX1FVRVNUSU9OUyc7XG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJEZW1vR3JhcGhpY1F1ZXN0aW9uIGV4dGVuZHMgUGFja2FnZSB7XG4gIHByaXZhdGUgZ2VuZGVySWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBiaXJ0aERhdGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBnYW1lTGV2ZWw6IG51bWJlcjtcbiAgcHJpdmF0ZSBsc3RJbnRlcmVzdFNwb3J0SWQ6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKEFQSV9FTkRQT0lOVCk7XG4gIH1cblxuICBwdWJsaWMgc2V0R2VuZGVySWQoZ2VuZGVyOiBudW1iZXIpOiBBbnN3ZXJEZW1vR3JhcGhpY1F1ZXN0aW9uIHtcbiAgICB0aGlzLmdlbmRlcklkID0gTnVtYmVyKGdlbmRlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2V0QmlydGhEYXRlKGJpcnRoRGF0ZTogbnVtYmVyKTogQW5zd2VyRGVtb0dyYXBoaWNRdWVzdGlvbiB7XG4gICAgdGhpcy5iaXJ0aERhdGUgPSBOdW1iZXIoYmlydGhEYXRlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRHYW1lTGV2ZWwoZ2FtZUxldmVsOiBudW1iZXIpOiBBbnN3ZXJEZW1vR3JhcGhpY1F1ZXN0aW9uIHtcbiAgICB0aGlzLmdhbWVMZXZlbCA9IE51bWJlcihnYW1lTGV2ZWwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldEludGVyZXN0U3BvcnRJZHMoaW50ZXJlc3RTcG9ydElkczogbnVtYmVyW10pOiBBbnN3ZXJEZW1vR3JhcGhpY1F1ZXN0aW9uIHtcbiAgICB0aGlzLmxzdEludGVyZXN0U3BvcnRJZCA9IGludGVyZXN0U3BvcnRJZHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuIl19
