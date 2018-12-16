const TAU = Math.PI * 2

const renderCircle = ({ element, x, y, radius = 31, width = 1, stroke = '#fff', fill = '#fff' }) => {
  const context = element.getContext('2d')

  context.beginPath()
  context.lineWidth = width
  context.strokeStyle = stroke
  context.fillStyle = fill
  context.arc(x, y, radius, 0, TAU)
  context.stroke()
  context.fill()
}

const renderHand = ({ element, src, dest, width = 2, stroke = '#666', fill = '#666' }) => {
  const context = element.getContext('2d')

  context.beginPath()
  context.lineWidth = width
  context.strokeStyle = stroke
  context.fillStyle = stroke
  context.moveTo(src[0], src[1])
  context.lineTo(dest[0], dest[1])
  context.stroke()
}

const renderClock = ({ element, model }) => {
  const { cx, cy, r, hourHand, minHand } = model.toJS()

  renderCircle({ element, x: cx, y: cy, radius: r, stroke: '#eee', fill: '#eee' })
  renderCircle({ element, x: cx, y: cy, radius: 2, stroke: '#666', fill: '#666' })
  renderHand({ element, src: [cx, cy], dest: hourHand, width: 2 })
  renderHand({ element, src: [cx, cy], dest: minHand, width: 1 })
}

export default renderClock
