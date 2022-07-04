import Oystercard from "../src/oystercard"

describe('Oystercard', () => {
  let card: Oystercard

  beforeEach(() => {
    card = new Oystercard
  })

  const touchInAndOut = () => {
    card.touchIn('Camden')
    card.touchOut('Euston')
  }

  it('initialises with a balance of 0', () => {
    expect(card.balance).toEqual(0)
  })

  it('initialises with an empty array for storing journey history', () => {
    expect(card.journeyHistory).toEqual([])
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

  describe('touchIn', () => {
    // it('sets isInJourney to true', () => {
    //   card.topUp(1)
    //   card.touchIn('Camden')
    //   expect(card.isInJourney()).toBe(true)
    // })

    it('cannot touch in if already in journey', () => {
      card.topUp(1)
      card.touchIn('Camden')
      expect(() => {card.touchIn('Euston')}).toThrowError('Already in journey')
    })

    it('cannot touch in if balance is under £1', () => {
      expect(() => {card.touchIn('Camden')}).toThrowError('Insufficient funds')
    })

    it('records the entry station', () => {
      card.topUp(1)
      card.touchIn('Camden')
      expect(card.currentJourney.entryStation).toEqual('Camden')
    })
  })

  describe('touchOut', () => {
    // it('sets isInJourney to false', () => {
    //   card.topUp(1)
    //   touchInAndOut()
    //   expect(card.isInJourney()).toBe(false)
    // })

    it('cannot touch out if it was not in journey', () => {
      expect(() => {card.touchOut('Paddington')}).toThrowError('Not in journey')
    })

    it('deducts the minimum fare from the balance', () => {
      card.topUp(1)
      touchInAndOut()
      expect(card.balance).toEqual(0)
      card.topUp(10)
      touchInAndOut()
      expect(card.balance).toEqual(9)
      card.topUp(11)
      card.touchIn('Victoria')
      card.touchOut('Paddington')
      expect(card.balance).toEqual(19)
    })

    it('resets the entryStation to an empty string', () => {
      card.topUp(1)
      touchInAndOut()
      expect(card.currentJourney.entryStation).toEqual('')
    })
  })

  it('stores a complete journey in journeyHistory', () => {
    card.topUp(1)
    touchInAndOut()
    expect(card.journeyHistory).toEqual([{ entryStation: 'Camden', exitStation: 'Euston', fare: 1 }])
    card.topUp(1)
    card.touchIn('Bank')
    card.touchOut('Victoria')
    expect(card.journeyHistory).toEqual([{ entryStation: 'Camden', exitStation: 'Euston', fare: 1 }, { entryStation: 'Bank', exitStation: 'Victoria', fare: 1 }])
  })
})