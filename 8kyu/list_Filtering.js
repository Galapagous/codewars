function filter_list(l) {
  let new_list = []
  for (let i in l) {
    if (typeof l[i] == "number") {
      new_list.push(l[i])
    }
  }
  return new_list
}

function second_filter(list) {
  let status
  list.filter((e) => {
    if (typeof (e == "number")) {
      return e
    }
  })
}
// console.log(filter_list([1, "a", "b", 0, 15]))
console.log(second_filter([1, "a", "b", 0, 15]))
