function parse(data) {
  let value = 0
  let valArr = []
  data = data.split("")
  for (let a = 0; a < data.length; a++) {
    if (data[a] == "i") value += 1
    else if (data[a] == "s") value = value * value
    else if (data[a] == "d") value -= 1
    else if (data[a] == "o") valArr.push(value)
    else continue
  }
  return valArr
}
