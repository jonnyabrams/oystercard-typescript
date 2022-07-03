import Oystercard from "../src/oystercard"

describe('Oystercard', () => {
  let card: Oystercard

  beforeEach(() => {
    card = new Oystercard
  })

  it('initialises with a balance of 0', () => {
    expect(card.balance).toEqual(0)
  })

  it('initialises with isInJourney set to false', () => {
    expect(card.isInJourney).toBe(false)
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
      const card4 = new Oystercard
      card4.topUp(89)
      expect(() => { card4.topUp(1) }).not.toThrowError
      expect(() => { card4.topUp(2) }).toThrowError('Cannot exceed £90 limit')
    })
  })

  describe('deduct', () => {
    it('takes money from the balance', () => {
      card.topUp(10)
      card.deduct(6)
      expect(card.balance).toEqual(4)
    })
  })

  describe('touchIn', () => {
    it('sets isInJourney to true', () => {
      card.touchIn()
      expect(card.isInJourney).toBe(true)
    })

    it('cannot touch in if already in journey', () => {
      const card2 = new Oystercard
      card2.touchIn()
      expect(() => {card2.touchIn()}).toThrowError('Already in journey')
    })
  })

  describe('touchOut', () => {
    it('sets isInJourney to false', () => {
      card.touchIn()
      card.touchOut()
      expect(card.isInJourney).toBe(false)
    })

    it('cannot touch out if it was not in journey', () => {
      expect(() => {card.touchOut()}).toThrowError('Not in journey')
    })
  })
})