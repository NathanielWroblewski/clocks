import Grid from './models/grid.js'
import Clock from './models/clock.js'
import Clocks from './models/clocks.js'
import renderClock from './views/clock.js'
import { COLUMNS, ROWS, HEIGHT, WIDTH, RADIUS, FPS } from './constants/index.js'

const element = document.querySelector('.clocks')
const grid = new Grid({ x: 34, y: RADIUS + 10, xpad: 76, ypad: 76, columns: COLUMNS, rows: ROWS })
const collection = grid.layout(({ x, y }) => new Clock({ cx: x, cy: y, r: RADIUS }))
const clocks = new Clocks(collection)

const render = () => {
  clocks.sync(new Date())
  clocks.each(model => {
    model.ticktock()

    renderClock({ element, model })
  })
}

let prevTick = 0

const step = () => {
  window.requestAnimationFrame(step)

  const now = Math.round(FPS * Date.now() / 1000)
  if (now === prevTick) return
  prevTick = now

  render()
}

step()
