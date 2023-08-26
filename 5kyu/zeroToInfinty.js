function going(n) {
    // multiply the first instance with the second instance
    // un = (1 / n!) * (1! + 2! + 3! + ... + n!)
    if (n === 1) return 1
    let factorialSum = 0
    let prevFactorial = 1
    let counter = 1
    while(counter <= n){
        prevFactorial *= counter
        factorialSum += prevFactorial 
        counter++
    }
        // perform calculation and satisfy decimal place
    const result = ((1/prevFactorial) * factorialSum)
    if(result.toString().length > 8){
        return Number(result.toString().split('').slice(0, 8).join(''))
    }
    return result
}

console.log(going(7))