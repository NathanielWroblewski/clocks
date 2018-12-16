import Grid from './models/grid.js'
import Clock from './models/clock.js'
import Clocks from './models/clocks.js'
import renderClock from './views/clock.js'
import { COLUMNS, ROWS, HEIGHT, WIDTH, RADIUS } from './constants/index.js'

const element = document.querySelector('.clocks')
const grid = new Grid({ x: 34, y: RADIUS + 10, xpad: 76, ypad: 76, columns: COLUMNS, rows: ROWS })
const collection = grid.layout(({ x, y }) => new Clock({ cx: x, cy: y, r: RADIUS }))
const clocks = new Clocks(collection)

const step = () => {
  clocks.sync(new Date())
  clocks.each(model => {
    model.ticktock()

    renderClock({ element, model })
  })

  window.requestAnimationFrame(step)
}

step()
