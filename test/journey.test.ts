import Journey from '../src/journey'

describe('Journey', () => {
  let journey: Journey

  const station = { name: 'Camden', zone: 2 }

  beforeEach(() => {
    journey = new Journey(station.name)
  })

  it('knows if a journey is not complete', () => {
    expect(journey.isComplete()).toBe(false)
  })
})