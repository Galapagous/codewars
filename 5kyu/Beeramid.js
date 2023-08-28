const beeramid = (bonus, price) => {
  if(bonus < price) return 0
  let numberOfBeer = bonus / price
  let totalBeer = 0
  let levelCounter = 1
  while (true) {
    totalBeer += (levelCounter ** 2)
    let nextLevel = (totalBeer + ((levelCounter + 1) ** 2))
    if(nextLevel > numberOfBeer){
      break
    }
    levelCounter += 1
  }
    return levelCounter
}
console.log(beeramid(5000, 3))
