class Grid {
  constructor ({ x, y, xpad, ypad, columns, rows }) {
    this.x = x
    this.y = y
    this.xpad = xpad
    this.ypad = ypad
    this.columns = columns
    this.rows = rows
  }

  layout (fn) {
    const results = []

    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        const x = this.x + (column * this.xpad)
        const y = this.y + (row * this.ypad)

        results.push(fn({ x, y }))
      }
    }

    return results
  }
}

export default Grid
