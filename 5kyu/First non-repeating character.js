function firstNonRepeatingLetter(s) {
  console.log(s)
  if (s.length <= 1) return s
  let myHash = {}
  for (let i = 0; i < s.length; i++) {
    let letCounter = 0
    for (let j = i + 1; j < s.length; j++) {
      if (s[i].toLowerCase() == s[j].toLowerCase()) letCounter += 1
    }
    if (!myHash[s[i]] && letCounter === 0) {
      return s[i]
    } else {
      myHash[s[i]] = letCounter
    }
  }
  return ""
}
