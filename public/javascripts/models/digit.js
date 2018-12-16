const EMPTY = [null, null]
const PIECES = {
  " -": [  0,   0],
  "L":  [  0, 270],
  "--": [180,   0],
  "-'": [180, 270],
  "- ": [180, 180],
  "-,": [180,  90],
  ",-": [ 90,   0],
  "|":  [270,  90],
  ",":  [ 90,  90],
  "'": [270,  270],
  ",":  [ 90,  90],
}

class Digit {
  static parse (digit) {
    switch (digit) {
      case '0': return this.zero()
      case '1': return this.one()
      case '2': return this.two()
      case '3': return this.three()
      case '4': return this.four()
      case '5': return this.five()
      case '6': return this.six()
      case '7': return this.seven()
      case '8': return this.eight()
      case '9': return this.nine()
    }
  }

  static zero () {
    return [
      PIECES[",-"], PIECES["-,"],
      PIECES["|"],   PIECES["|"],
      PIECES["L"],  PIECES["-'"]
    ]
  }

  static one () {
    return [
      EMPTY, PIECES[","],
      EMPTY,  PIECES["|"],
      EMPTY, PIECES["'"],
    ]
  }

  static two () {
    return [
      PIECES[" -"], PIECES["-,"],
      PIECES[",-"], PIECES["-'"],
      PIECES["L"], PIECES["- "],
    ]
  }

  static three () {
    return [
      PIECES[" -"], PIECES["-,"],
      PIECES[" -"],  PIECES["|"],
      PIECES[" -"], PIECES["-'"],
    ]
  }

  static four () {
    return [
      PIECES[","], PIECES[","],
      PIECES["L"], PIECES["|"],
            EMPTY, PIECES["'"],
    ]
  }

  static five () {
    return [
      PIECES[",-"], PIECES["- "],
      PIECES["L"],  PIECES["-,"],
      PIECES[" -"], PIECES["-'"],
    ]
  }

  static six () {
    return [
      PIECES[",-"], PIECES["- "],
      PIECES["|"],  PIECES["-,"],
      PIECES["L"], PIECES["-'"],
    ]
  }

  static seven () {
    return [
      PIECES[" -"], PIECES["-,"],
             EMPTY,  PIECES["|"],
             EMPTY,  PIECES["'"],
    ]
  }

  static eight () {
    return [
      PIECES[",-"], PIECES["-,"],
      PIECES[" -"], PIECES["- "],
      PIECES["L"],  PIECES["-'"]
    ]
  }

  static nine () {
    return [
      PIECES[",-"], PIECES["-,"],
      PIECES["L"],   PIECES["|"],
      PIECES[' -'], PIECES["-'"]
    ]
  }
}

export default Digit
