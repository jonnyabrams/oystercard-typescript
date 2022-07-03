import Calculator from "../src/calc"

describe('test add function', () => {
  let calc: Calculator
  
  beforeEach(() => {
    calc = new Calculator
  })

  it('should initiate with a value of 0', () => {
    expect(calc.value).toEqual(0)
  })

  it('should return 5 when adding 5 to that initial 0', () => {
    expect(calc.add(5)).toEqual(5)
  })

  it('should store this addition as the value', () => {
    calc.add(9)
    expect((calc.value)).toEqual(9)
  })

  it('should calculate multiple subsequent additions', () => {
    calc.add(9)
    calc.add(2)
    expect(calc.add(1)).toEqual(12)
  })
})