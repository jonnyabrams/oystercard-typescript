export default class Oystercard {
  balance: number
  maxBalance: number
  isInJourney: boolean
  minFare: number
  entryStation: string

  constructor() {
    this.balance = 0
    this.maxBalance = 90
    this.isInJourney = false
    this.minFare = 1
    this.entryStation = ''
  }

  topUp(amount: number): number {
    if (this.balance === this.maxBalance || amount > this.maxBalance || this.balance + amount > this.maxBalance) throw new Error(`Cannot exceed £${this.maxBalance} limit`)

    return this.balance += amount
  }

  touchIn(entryStation: string) {
    if (this.isInJourney) throw new Error('Already in journey')
    if (this.balance < this.minFare) throw new Error('Insufficient funds')

    this.entryStation = entryStation
    this.#changeJourneyStatus()
  }

  touchOut() {
    if (!this.isInJourney) throw new Error('Not in journey')

    this.#deduct(1)
    this.entryStation = ''
    this.#changeJourneyStatus()
  }

  #deduct(amount: number): number {
    return this.balance -= amount
  }

  #changeJourneyStatus() {
    this.isInJourney = !this.isInJourney
  }

}
