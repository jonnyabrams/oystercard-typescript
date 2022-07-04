import Journey from './journey'

export default class Oystercard {
  balance: number
  maxBalance: number
  minFare: number
  journeyHistory: { entryStation: string, exitStation: string, fare: number }[]
  currentJourney: Journey

  constructor() {
    this.balance = 0
    this.maxBalance = 90
    this.minFare = 1
    this.currentJourney = new Journey
    this.journeyHistory = []
  }

  topUp(amount: number): number {
    if (this.balance === this.maxBalance || amount > this.maxBalance || this.balance + amount > this.maxBalance) throw new Error(`Cannot exceed £${this.maxBalance} limit`)

    return this.balance += amount
  }

  touchIn(entryStation: string) {
    if (this.currentJourney.entryStation !== '') throw new Error('Already in journey')
    if (this.balance < this.minFare) throw new Error('Insufficient funds')

    this.currentJourney.startJourney(entryStation)
  }

  touchOut(exitStation: string) {
    if (this.currentJourney.entryStation === '') throw new Error('Not in journey')

    this.currentJourney.endJourney(exitStation)
    this.#handleTouchOut()
  }

  #deduct(): number {
    return this.balance -= this.currentJourney.fareCharged()
  }

  #handleTouchOut() {
    this.journeyHistory.push({ entryStation: this.currentJourney.entryStation, exitStation: this.currentJourney.exitStation, fare: this.currentJourney.fareCharged() })
    this.#deduct()
    this.currentJourney = new Journey
  }
}
