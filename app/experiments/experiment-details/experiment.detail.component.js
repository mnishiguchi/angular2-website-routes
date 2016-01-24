System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ExperimentDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Defines the ExperimentDetailComponent.
            ExperimentDetailComponent = (function () {
                function ExperimentDetailComponent() {
                }
                ExperimentDetailComponent.prototype.doExperiment = function () {
                    this.experiment.completed += 1;
                };
                ;
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExperimentDetailComponent.prototype, "experiment", void 0);
                ExperimentDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'experiment',
                        templateUrl: 'app/experiments/experiment-details/experiment.detail.component.html',
                        styles: ["\n    .experiment {\n      cursor: pointer;\n      outline: 1px lightgray solid;\n      padding: 5px;\n      margin: 5px;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExperimentDetailComponent);
                return ExperimentDetailComponent;
            })();
            exports_1("ExperimentDetailComponent", ExperimentDetailComponent); // end ExperimentDetailComponent
        }
    }
});
//# sourceMappingURL=experiment.detail.component.js.map