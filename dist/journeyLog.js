"use strict";
exports.__esModule = true;
var journey_1 = require("../src/journey");
var JourneyLog = /** @class */ (function () {
    function JourneyLog(journeyClass) {
        this.currentJourney = journeyClass;
        this.journeys = [];
    }
    JourneyLog.prototype.start = function (entryStation) {
        this.currentJourney.startJourney(entryStation);
    };
    JourneyLog.prototype.finish = function (exitStation) {
        this.currentJourney.endJourney(exitStation);
        this.journeys.push({ entryStation: this.currentJourney.entryStation, exitStation: this.currentJourney.exitStation, fare: this.currentJourney.fareCharged() });
    };
    JourneyLog.prototype.whichJourney = function () {
        return this.currentJourney.isComplete() ? new journey_1["default"] : this.currentJourney;
    };
    return JourneyLog;
}());
exports["default"] = JourneyLog;
