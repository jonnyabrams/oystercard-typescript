export default class Oystercard {
  balance: number
  maxBalance: number
  isInJourney: boolean

  constructor() {
    this.balance = 0
    this.maxBalance = 90
    this.isInJourney = false
  }

  topUp(amount: number): number {
    if (this.balance === this.maxBalance || amount > this.maxBalance || this.balance + amount > this.maxBalance) throw new Error(`Cannot exceed £${this.maxBalance} limit`)

    return this.balance += amount
  }

  deduct(amount: number): number {
    return this.balance -= amount
  }

  touchIn() {
    if (this.isInJourney) throw new Error('Already in journey')

    this.#changeJourneyStatus()
  }

  touchOut() {
    if (!this.isInJourney) throw new Error('Not in journey')

    this.#changeJourneyStatus()
  }

  #changeJourneyStatus() {
    this.isInJourney = !this.isInJourney
  }

}
