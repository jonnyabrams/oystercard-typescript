"use strict";
exports.__esModule = true;
var Journey = /** @class */ (function () {
    function Journey(entryStation) {
        this.entryStation = entryStation || '';
        this.exitStation = '';
        this.minFare = 1;
        this.penaltyFare = 6;
    }
    Journey.prototype.startJourney = function (entryStation) {
        this.entryStation = entryStation;
    };
    Journey.prototype.endJourney = function (exitStation) {
        this.exitStation = exitStation;
    };
    Journey.prototype.recordJourney = function () {
        return { entryStation: this.entryStation, exitStation: this.exitStation, fare: this.fareCharged() };
    };
    Journey.prototype.isComplete = function () {
        return this.entryStation !== '' && this.exitStation !== '';
    };
    Journey.prototype.fareCharged = function () {
        return this.isComplete() ? this.minFare : this.penaltyFare;
    };
    return Journey;
}());
exports["default"] = Journey;
