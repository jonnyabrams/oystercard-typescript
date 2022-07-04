import Station from "../src/station"

describe('Station', () => {
  let station: Station

  beforeEach(() => {
    station = new Station('Camden', 2)
  })

  it('has a name', () => {
    expect(station.name).toEqual('Camden')
  })

  it('has a zone', () => {
    expect(station.zone).toEqual(2)
  })
})