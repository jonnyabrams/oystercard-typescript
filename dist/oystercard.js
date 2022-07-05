"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Oystercard_instances, _Oystercard_deduct, _Oystercard_handleTouchOut;
exports.__esModule = true;
var journey_1 = require("../src/journey");
var Oystercard = /** @class */ (function () {
    function Oystercard() {
        _Oystercard_instances.add(this);
        this.balance = 0;
        this.maxBalance = 90;
        this.minFare = 1;
        this.currentJourney = new journey_1["default"];
        this.journeyHistory = [];
    }
    Oystercard.prototype.topUp = function (amount) {
        if (this.balance === this.maxBalance || amount > this.maxBalance || this.balance + amount > this.maxBalance)
            throw new Error("Cannot exceed \u00A3".concat(this.maxBalance, " limit"));
        return this.balance += amount;
    };
    Oystercard.prototype.touchIn = function (entryStation) {
        if (this.currentJourney.entryStation !== '')
            throw new Error('Already in journey');
        if (this.balance < this.minFare)
            throw new Error('Insufficient funds');
        this.currentJourney.startJourney(entryStation);
    };
    Oystercard.prototype.touchOut = function (exitStation) {
        if (this.currentJourney.entryStation === '')
            throw new Error('Not in journey');
        __classPrivateFieldGet(this, _Oystercard_instances, "m", _Oystercard_handleTouchOut).call(this, exitStation);
    };
    return Oystercard;
}());
exports["default"] = Oystercard;
_Oystercard_instances = new WeakSet(), _Oystercard_deduct = function _Oystercard_deduct() {
    return this.balance -= this.currentJourney.fareCharged();
}, _Oystercard_handleTouchOut = function _Oystercard_handleTouchOut(exitStation) {
    this.currentJourney.endJourney(exitStation);
    this.journeyHistory.push({ entryStation: this.currentJourney.entryStation, exitStation: this.currentJourney.exitStation, fare: this.currentJourney.fareCharged() });
    __classPrivateFieldGet(this, _Oystercard_instances, "m", _Oystercard_deduct).call(this);
    this.currentJourney = new journey_1["default"];
};
