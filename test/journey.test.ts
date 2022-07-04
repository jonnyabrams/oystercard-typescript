import Journey from '../src/journey'

describe('Journey', () => {
  let journey: Journey
  let journey2: Journey

  const station = { name: 'Camden', zone: 2 }
  const station2 = { name: 'Euston', zone: 2 }

  beforeEach(() => {
    journey = new Journey(station.name)
    journey2 = new Journey
  })

  const startAndEndJourney = () => {
    journey.startJourney(station.name)
    journey.endJourney(station2.name)
  }

  it('initialises with an empty entryStation unless specified', () => {
    expect(journey.entryStation).toEqual('Camden')
    expect(journey2.entryStation).toEqual('')
  })

  describe('startJourney', () => {
    it('records the entry station', () => {
      startAndEndJourney()
      expect(journey.entryStation).toEqual('Camden')
    })
  })

  describe('endJourney', () => {
    it('records the exit station', () => {
      startAndEndJourney()
      expect(journey.exitStation).toEqual('Euston')
    })
  })

  describe('recordJourney', () => {
    it('records the full journey and fare', () => {
      startAndEndJourney()
      expect(journey.recordJourney()).toEqual({ entryStation: 'Camden', exitStation: 'Euston', fare: 1 })
    })
  })

  describe('isComplete', () => {
    it('knows if a journey is complete or not', () => {
      expect(journey.isComplete()).toBe(false)
      startAndEndJourney()
      expect(journey.isComplete()).toBe(true)
    })
  })

  describe('fareCharged', () => {
    it('is 1 for complete journey, 6 for incomplete journey', () => {
      startAndEndJourney()
      expect(journey.fareCharged()).toEqual(1)
      const journey3 = new Journey
      journey3.startJourney('')
      journey3.endJourney('Waterloo')
      expect(journey3.fareCharged()).toEqual(6)
      const journey4 = new Journey
      journey4.startJourney('Chalk Farm')
      journey4.endJourney('')
      expect(journey4.fareCharged()).toEqual(6)
    })
  })
})