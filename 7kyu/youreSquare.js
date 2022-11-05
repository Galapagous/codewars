function isQuare(n) {
  if (n == 0) return true
  for (let i = 0; i < n / 2; i++) {
    if (n / i == i) {
      console.log(`true`)
      return 0
    }
  }
  console.log("false")
  return 0
}

isQuare(2378)
