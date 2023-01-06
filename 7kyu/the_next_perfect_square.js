function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    let nextNum = sq + 1
    while (Number.isInteger(Math.sqrt(nextNum)) == false) {
      nextNum += 1
    }
    return nextNum
  }
  return -1
  return -1
}
