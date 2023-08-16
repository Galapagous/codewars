function sumPairs(ints, s) {
    //iterate over sum
    let seen = {}
    let result = []
    for(let i = 0; i < ints.length; i++){
    //find currValue companion
      let numToFind = (s - ints[i])
    //check if companion has been found before
      if(seen[numToFind]){
        //console.log({first: ints[i], second: numToFind})
        result.push(numToFind)
        result.push(ints[i])
        return result
      }else{
        seen[ints[i]] = true
      }
    }
    return undefined ;
  }