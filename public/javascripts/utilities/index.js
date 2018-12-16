export const degToRad = degrees => degrees * Math.PI / 180

export const polarToCartesian = (r, theta) => {
  const x = r * Math.cos(degToRad(theta))
  const y = r * Math.sin(degToRad(theta))

  return [x, y]
}

export const leftPad = (string, size = 2, padString = '0') => (
  new Array(size).fill(padString).concat(String(string).split('')).slice(-size).join('')
)
