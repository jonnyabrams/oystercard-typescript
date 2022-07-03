export default class Calculator {
  value: number 

  constructor() {
    this.value = 0
  }

  add(n: number): number {
    this.value = n
    return n
  }
}