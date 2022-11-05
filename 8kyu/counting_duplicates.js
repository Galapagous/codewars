function counting_Duplicate(arrayList) {
  let i, j
  let count = 0
  result = []
  for (i = 0; i < arrayList.length; i++) {
    for (j = i + 1; j < arrayList.length; j++) {
      if ((arrayList[i] = arrayList[j])) {
        count++
      }
      if (count > 0) {
        result.push(count)
      }
    }
  }
  return result
}

console.log(counting_Duplicate([1, "e", "c", "e", 2, 2, 2, 2]))
