function minMax(arr) {
  let min = arr[0],
    max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
  }
  return [min, max] // fix me!
}
console.log(minMax([2, 3, 7, 6, 4, 1, 9]))
