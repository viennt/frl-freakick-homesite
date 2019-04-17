"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TermsComponent = (function () {
    function TermsComponent(el) {
        this.el = el;
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent.prototype.onToOurServices = function () {
        var x = document.querySelector("#our-services");
        if (x) {
            x.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        }
    };
    TermsComponent.prototype.onToOurData = function () {
        var x = document.querySelector("#our-data");
        if (x) {
            x.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        }
    };
    TermsComponent.prototype.onToOurCommunity = function () {
        var x = document.querySelector("#our-community");
        if (x) {
            x.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        }
    };
    TermsComponent.prototype.onToAdditonalProvisons = function () {
        var x = document.querySelector("#additonal-provisons");
        if (x) {
            x.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        }
    };
    TermsComponent.prototype.onToOther = function () {
        var x = document.querySelector("#other");
        if (x) {
            x.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        }
    };
    TermsComponent.prototype.onTop = function () {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };
    TermsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-terms',
            templateUrl: 'terms.component.html',
            styleUrls: ['terms.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TermsComponent);
    return TermsComponent;
}());
exports.TermsComponent = TermsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sZWdhbC90ZXJtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QyxlQUFlLENBQUMsQ0FBQTtBQVE5RDtJQUNFLHdCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUVsQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0gsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDSCxDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDSCxDQUFDO0lBRUQsK0NBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDNUUsQ0FBQztJQUNILENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBcERIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7O3NCQUFBO0lBZ0RGLHFCQUFDO0FBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtBQS9DWSxzQkFBYyxpQkErQzFCLENBQUEiLCJmaWxlIjoiYXBwL2xlZ2FsL3Rlcm1zLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Zyay10ZXJtcycsXG4gIHRlbXBsYXRlVXJsOiAndGVybXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGVybXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlcm1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIC8vXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL1xuICB9XG5cbiAgb25Ub091clNlcnZpY2VzKCkge1xuICAgIGxldCB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXItc2VydmljZXNcIik7XG4gICAgaWYgKHgpIHtcbiAgICAgIHguc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiwgaW5saW5lOiBcInN0YXJ0XCIgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Ub091ckRhdGEoKSB7XG4gICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291ci1kYXRhXCIpO1xuICAgIGlmICh4KSB7XG4gICAgICB4LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIsIGlubGluZTogXCJzdGFydFwiIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9PdXJDb21tdW5pdHkoKSB7XG4gICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291ci1jb21tdW5pdHlcIik7XG4gICAgaWYgKHgpIHtcbiAgICAgIHguc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiwgaW5saW5lOiBcInN0YXJ0XCIgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Ub0FkZGl0b25hbFByb3Zpc29ucygpIHtcbiAgICBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkaXRvbmFsLXByb3Zpc29uc1wiKTtcbiAgICBpZiAoeCkge1xuICAgICAgeC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiLCBpbmxpbmU6IFwic3RhcnRcIiB9KTtcbiAgICB9XG4gIH1cblxuICBvblRvT3RoZXIoKSB7XG4gICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI290aGVyXCIpO1xuICAgIGlmICh4KSB7XG4gICAgICB4LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIsIGlubGluZTogXCJzdGFydFwiIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9wKCkge1xuICAgIHdpbmRvdy5zY3JvbGwoeyB0b3A6IDAsIGxlZnQ6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfVxufVxuIl19
