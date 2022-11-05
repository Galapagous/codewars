function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let myTime, sharkTime, status
  dolphin && sharkSpeed / 2
  if (sharkDistance < pontoonDistance) {
    status = "Shark Bait!"
    return status
  }
  myTime = pontoonDistance / youSpeed
  sharkTime = sharkDistance / sharkSpeed
  myTime < sharkTime ? (status = "Alive!") : "Shark Bait!"
  return status
}

console.log(shark(24, 0, 4, 8, true))
