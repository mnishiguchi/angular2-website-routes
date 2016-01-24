System.register(['angular2/core', '../common/experiments.service', '../common/state.service', './experiment-details/experiment.detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, experiments_service_1, state_service_1, experiment_detail_component_1;
    var ExperimentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (experiments_service_1_1) {
                experiments_service_1 = experiments_service_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            },
            function (experiment_detail_component_1_1) {
                experiment_detail_component_1 = experiment_detail_component_1_1;
            }],
        execute: function() {
            // Defines the ExperimentsComponent.
            ExperimentsComponent = (function () {
                function ExperimentsComponent(_StateService, _ExperimentsService) {
                    this._StateService = _StateService;
                    this._ExperimentsService = _ExperimentsService;
                    this.title = 'Experiments Page';
                    this.body = 'This is the about experiments body';
                }
                ExperimentsComponent.prototype.ngOnInit = function () {
                    this.experiments = this._ExperimentsService.getExperiments();
                    this.message = this._StateService.getMessage();
                };
                ExperimentsComponent.prototype.updateMessage = function (m) {
                    this._StateService.setMessage(m);
                };
                ExperimentsComponent = __decorate([
                    core_1.Component({
                        selector: 'experiments',
                        templateUrl: 'app/experiments/experiments.component.html',
                        directives: [experiment_detail_component_1.ExperimentDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [state_service_1.StateService, experiments_service_1.ExperimentsService])
                ], ExperimentsComponent);
                return ExperimentsComponent;
            })();
            exports_1("ExperimentsComponent", ExperimentsComponent); // end ExperimentsComponent
        }
    }
});
//# sourceMappingURL=experiments.component.js.map