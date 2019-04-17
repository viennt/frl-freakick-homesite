"use strict";
var ButtonState = (function () {
    function ButtonState() {
        this.ready();
    }
    ButtonState.prototype.notReady = function () {
        this.state = 'not-ready';
    };
    ButtonState.prototype.ready = function () {
        this.state = 'ready';
    };
    ButtonState.prototype.loading = function () {
        this.state = 'loading';
    };
    ButtonState.prototype.finish = function () {
        this.state = 'finish';
    };
    ButtonState.prototype.isNotReady = function () {
        return this.state === 'not-ready';
    };
    ButtonState.prototype.isReady = function () {
        return this.state === 'ready';
    };
    ButtonState.prototype.isLoading = function () {
        return this.state === 'loading';
    };
    ButtonState.prototype.isFinished = function () {
        return this.state === 'finish';
    };
    return ButtonState;
}());
exports.ButtonState = ButtonState;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbHMvQnV0dG9uU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBR0k7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLDhCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztJQUM3QixDQUFDO0lBRU0sMkJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFTSw2QkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRU0sZ0NBQVUsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUVNLDZCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUM7SUFDbEMsQ0FBQztJQUVNLCtCQUFTLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxnQ0FBVSxHQUFqQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXRDQSxBQXNDQyxJQUFBO0FBdENZLG1CQUFXLGNBc0N2QixDQUFBIiwiZmlsZSI6ImFwcC9tb2RlbHMvQnV0dG9uU3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQnV0dG9uU3RhdGUge1xuICAgIHB1YmxpYyBzdGF0ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVhZHkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbm90UmVhZHkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnbm90LXJlYWR5JztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVhZHkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkaW5nKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2xvYWRpbmcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5pc2goKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnZmluaXNoJztcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNOb3RSZWFkeSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09ICdub3QtcmVhZHknO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1JlYWR5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gJ3JlYWR5JztcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gJ2xvYWRpbmcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0ZpbmlzaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gJ2ZpbmlzaCc7XG4gICAgfVxufVxuIl19
