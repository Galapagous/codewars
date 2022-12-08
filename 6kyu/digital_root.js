function digital_root(n) {
  let theString = n.toString()
  while (theString.length != 1) {
    myString = theString.split("")
    let new_val = 0
    for (let a = 0; a < theString.length; a++) {
      new_val += parseInt(myString[a])
    }
    theString = new_val.toString()
  }
  return theString.toString()
}
// console.log(digital_root(493193))
