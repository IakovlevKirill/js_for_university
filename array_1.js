function arrayToSet(array) {
    let setArray = new Set(array)
    let uniqArray = Array.from(setArray)
    return uniqArray
}

console.log(arrayToSet(["1","2","3","1"]))