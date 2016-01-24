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
    var ExperimentsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExperimentsService = (function () {
                function ExperimentsService() {
                    this.experiments = [
                        { name: 'Experiment 1', description: 'This is an experiment', completed: 0 },
                        { name: 'Experiment 2', description: 'This is an experiment', completed: 0 },
                        { name: 'Experiment 3', description: 'This is an experiment', completed: 0 },
                        { name: 'Experiment 4', description: 'This is an experiment', completed: 0 }
                    ];
                }
                ExperimentsService.prototype.getExperiments = function () {
                    return this.experiments;
                };
                ;
                ExperimentsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ExperimentsService);
                return ExperimentsService;
            })();
            exports_1("ExperimentsService", ExperimentsService); // end ExperimentsService
        }
    }
});
//# sourceMappingURL=experiments.service.js.map