import Calculator from "../src/calc"

describe('test add function', () => {
  it('should initiate with a value of 0', () => {
    let calc = new Calculator
    expect(calc.value).toEqual(0)
  })

  it('should return 5 when adding 5 to that initial 0', () => {
    let calc = new Calculator
    expect(calc.add(5)).toEqual(5)
  })

  it('should store this addition as the value', () => {
    let calc = new Calculator
    calc.add(9)
    expect((calc.value)).toEqual(9)
  })
})