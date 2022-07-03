import Calculator from "../src/calc"

describe("test add function", () => {
  it("should initiate with a value of 0", () => {
    let calc = new Calculator
    expect(calc.value).toEqual(0)
  })
})