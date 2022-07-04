export default class Journey {
  entryStation: string
  exitStation: string
  minFare: number
  penaltyFare: number

  constructor(entryStation?: string) {
    this.entryStation = entryStation || ''
    this.exitStation = ''
    this.minFare = 1
    this.penaltyFare = 6
  }

  startJourney(entryStation: string) {
    this.entryStation = entryStation
  }

  endJourney(exitStation: string) {
    this.exitStation = exitStation
  }

  recordJourney(): object {
    return { entryStation: this.entryStation, exitStation: this.exitStation, fare: this.fareCharged }
  }

  isComplete(): boolean {
    return this.entryStation !== '' && this.exitStation !== ''
  }

  fareCharged(): number {
    return this.isComplete() ? this.minFare : this.penaltyFare
  }
}