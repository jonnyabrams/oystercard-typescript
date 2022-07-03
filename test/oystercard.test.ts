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

    it('can only add a maximum of £90 in total', () => {
      card.topUp(90)
      expect(() => { card.topUp(1) }).toThrowError('Cannot exceed £90 limit')
      const card2 = new Oystercard
      expect(() => { card2.topUp(93) }).toThrowError('Cannot exceed £90 limit')
      const card3 = new Oystercard
      card3.topUp(60)
      expect(() => { card3.topUp(38) }).toThrowError('Cannot exceed £90 limit')
    })
  })
})