import Oystercard from "../src/oystercard"

describe('Oystercard', () => {
  let card: Oystercard

  beforeEach(() => {
    card = new Oystercard
  })

  it('initialises with a balance of 0', () => {
    expect(card.balance).toEqual(0)
  })

  describe('topUp', () => {
    it('can add money to the balance', () => {
      card.topUp(10)
      expect(card.balance).toEqual(10)
    })
  })
})