export default class Oystercard {
  balance: number

  constructor() {
    this.balance = 0
  }

  topUp(amount: number): number {
    return this.balance += amount
  }
}