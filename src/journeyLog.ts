import Journey from './journey'

export default class JourneyLog {
  currentJourney: Journey
  journeys: { entryStation: string, exitStation: string, fare: number }[]
  
  constructor(journeyClass: Journey) {
    this.currentJourney = journeyClass
    this.journeys = []
  }

  start(entryStation: string) {
    this.currentJourney.startJourney(entryStation)
  }

  finish(exitStation: string) {
    this.currentJourney.endJourney(exitStation)
    this.journeys.push({ entryStation: this.currentJourney.entryStation, exitStation: this.currentJourney.exitStation, fare: this.currentJourney.fareCharged() })
  }

  whichJourney() {
    return this.currentJourney.isComplete() ? new Journey : this.currentJourney
  }
}