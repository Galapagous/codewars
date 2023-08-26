function josephus(items,k){
    if(items.length === 0){
        return []
    }else if(items.length === 1){
        return [items[0]]
    }
    //your code here
    let soldierArray = items
    let result = []
    let counter = 3
    console.log(soldierArray.splice(counter - 1, 1)[0])
    console.log({InitalArray: soldierArray})

    // while(soldierArray.length){
    //     if(counter % 3 === 0){
    //         console.log(soldierArray.splice(counter, 1))
    //         counter = 0
    //     }
    //     counter ++
    // }
  }
  let theArray = [1,2,3,4,5,6,7]
  josephus(theArray, 3)