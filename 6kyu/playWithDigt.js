function digPow(n, p) {
  let numStr = n.toString()
  let sum = 0
  for (let len = 0; len < numStr.length; len++) {
    let total = parseInt(numStr[len]) ** (p + len)
    sum += total
  }
  return sum % n == 0 ? sum / n : -1
}
console.log(digPow(46288, 3))
