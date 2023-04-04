const beeramid = (bonus, price) => {
  let number_of_beer = bonus / price
  let total = 0
  let myBear = 0
  let counter = 1
  while (total < number_of_beer) {
    total += counter * counter
    counter += 1
    myBear += 1
  }
  console.log(myBear - 1)
}
console.log(beeramid(1500, 2))
