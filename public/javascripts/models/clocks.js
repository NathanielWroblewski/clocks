import Digit from './digit.js'
import { leftPad } from '../utilities/index.js'

const WIPE = [
  [ 0],
  [ 1,  8],
  [ 2,  9, 16],
  [ 3, 10, 17],
  [ 4, 11, 18],
  [ 5, 12, 19],
  [ 6, 13, 20],
  [ 7, 14, 21],
  [15, 22],
  [23],
]

class Clocks {
  constructor (clocks = []) {
    this.clocks = clocks
  }

  digitsFor (time) {
    const hours = leftPad(time.getHours() % 12).split('')
    const mins = leftPad(time.getMinutes()).split('')

    return [...hours, ...mins]
  }

  sync (time) {
    const digits = this.digitsFor(time)

    if (time.getSeconds() < 58) {
      digits.forEach((digit, index) => this.syncDigit(digit, index))
    } else {
      WIPE.forEach((grouping, index) => {
        setTimeout((group, clocks) => {
          group.forEach(i => clocks[i].setStops([null, null]))
        }, 200 * index, grouping, this.clocks)
      })
    }
  }

  syncDigit (digit, index) {
    const clocks = this.clocksForPosition(index)
    const angles = Digit.parse(digit)

    angles.forEach((thetas, index) => {
      const clock = clocks[index]

      clock.setStops(thetas)
    })
  }

  // abstract hardcoded numbers, very least constantize
  clocksForPosition (position) {
    const results = []

    for (let row = 0; row < 3; row++) {
      for (let column = 2 * position; column < (2 * position) + 2; column++) {
        const i = (row * 8) + column

        results.push(this.clocks[i])
      }
    }

    return results
  }

  each (fn) {
    this.clocks.forEach(fn)
  }
}

export default Clocks
