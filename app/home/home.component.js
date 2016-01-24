System.register(['angular2/core', '../common/state.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, state_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            }],
        execute: function() {
            // Defines the HomeComponent.
            HomeComponent = (function () {
                function HomeComponent(_StateService) {
                    this._StateService = _StateService;
                    this.title = 'Home Page';
                    this.body = 'This is the about home body';
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.message = this._StateService.getMessage();
                };
                HomeComponent.prototype.updateMessage = function (m) {
                    this._StateService.setMessage(m);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/home/home.component.html'
                    }), 
                    __metadata('design:paramtypes', [state_service_1.StateService])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent); // end HomeComponent
        }
    }
});
//# sourceMappingURL=home.component.js.map