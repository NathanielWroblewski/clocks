import { polarToCartesian } from '../utilities/index.js'

class Clock {
  constructor ({ cx, cy, r = 31, theta1, theta2 }) {
    this.cx = cx
    this.cy = cy
    this.r = r
    this.theta1 = theta1 || Math.floor(Math.random() * 360)
    this.theta2 = theta2 || Math.floor(Math.random() * 360)
  }

  ticktock () {
    if (this.theta1 !== this.stop1) {
      this.theta1 = (this.theta1 + 1) % 360
    }

    if (this.theta2 !== this.stop2) {
      const difference = (this.theta2 - 1) % 360

      this.theta2 = difference < 0 ? 360 + difference : difference
    }
  }

  setStops (stops = []) {
    const [stop1, stop2] = stops

    this.stop1 = stop1
    this.stop2 = stop2
  }

  toJS () {
    const { cx, cy, r, theta1, theta2 } = this
    const [x1, y1] = polarToCartesian(r, theta1)
    const [x2, y2] = polarToCartesian(r, theta2)

    return {
      cx, cy, r, theta1, theta2,
      hourHand: [x1 + cx, y1 + cy],
      minHand: [x2 + cx, y2 + cy],
    }
  }
}

export default Clock
