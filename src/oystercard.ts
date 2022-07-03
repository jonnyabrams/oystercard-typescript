export default class Oystercard {
  balance: number
  maxBalance: number

  constructor() {
    this.balance = 0
    this.maxBalance = 90
  }

  topUp(amount: number): number {
    if (this.balance === this.maxBalance || amount > this.maxBalance || this.balance + amount > this.maxBalance) throw new Error(`Cannot exceed £${this.maxBalance} limit`)

    return this.balance += amount
  }

  deduct(amount: number): number {
    return this.balance -= amount
  }
}