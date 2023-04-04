function isMerge(s, part1, part2) {
  let a  = 0
  for (let a = 0; a < s.length; a++){
    let firstCount = 0; 
    let secondCount = 0;
    while (part1[firstCount] || part2[secondCount]){
      if (part1[firstCount] === s[a]){
        s = s.replace(s[a], "")
        firstCount ++;
      }else if(part2[secondCount] === s[a]){
        s = s.replace(s[a], "")
        secondCount ++;
      }
    }
  }
  return s.length === 0 ? true : false 
}

console.log(isMerge('musa', 'ms', 'ua'))