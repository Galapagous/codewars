// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
let test1 = " Hello there thanks for trying my Kata"
let test2 = "    Hello     World   "
let test3 = "Do We have A Hashtag"

function generateHashtag (str) {
    // check if its a valid string
    if (str.length <= 0) return false
    let NewStr = ''
    let MyStr = str.split(' ')
    //iterate over my array
    let SendHash = false
    for (let i = 0; i < MyStr.length; i++){
        let CurrStr = MyStr[i]
        //check array lenght if its valid to be added
        if(CurrStr.length >= 1){
            if (!SendHash){
                NewStr += '#'
                SendHash = true
            }
            let AlphaLetter = CurrStr[0].toUpperCase()
            CurrStr = CurrStr.slice(1)
            CurrStr = AlphaLetter += CurrStr
        }
        //capitalize and push to final result
        NewStr+=CurrStr
    }
    if (NewStr.length >= 140) {
        return false
    }else{
        return NewStr
    } 
}

console.log(generateHashtag(test3))