import JourneyLog from '../src/journeyLog'
import Journey from '../src/journey'

describe('JourneyLog', () => {
  let journeyLog: JourneyLog

  beforeEach(() => {
    journeyLog = new JourneyLog(new Journey)
  })

  it('initializes with an empty array for storing journeys', () => {
    expect(journeyLog.journeys).toEqual([])
  })

  describe('start', () => {
    it('starts a new journey and records the entry station', () => {
      journeyLog.start('Camden')
      expect(journeyLog.currentJourney.entryStation).toEqual('Camden')
    })
  })

  describe('finish', () => {
    it('finishes a journey and records the exit station', () => {
      journeyLog.start('Camden')
      journeyLog.finish('Euston')
      expect(journeyLog.currentJourney.exitStation).toEqual('Euston')
    })

    it('stores the completed journey in the journeys array', () => {
      journeyLog.start('Camden')
      journeyLog.finish('Euston')
      expect(journeyLog.journeys).toEqual([{ entryStation: 'Camden', exitStation: 'Euston', fare: 1 }])
    })
  })

  describe('whichJourney', () => {
    it('knows which journey it is on', () => {
      journeyLog.start('Camden')
      expect(journeyLog.whichJourney()).toEqual(journeyLog.currentJourney)
      journeyLog.finish('Euston')
      expect(journeyLog.whichJourney()).toEqual(new Journey)
    })
  })

})