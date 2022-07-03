export default class Oystercard {
  balance: number

  constructor() {
    this.balance = 0
  }

  topUp(amount: number): number {
    if (this.balance === 90 || amount > 90 || this.balance + amount > 90) throw new Error('Cannot exceed £90 limit')

    return this.balance += amount
  }
}