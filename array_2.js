function summingArray(array) {
    let sum = 0
    let current = ""
    for (let i = 0; i < array.length; i++) {
        current = Number(array[i])
        sum += current
    }
    return sum
}

console.log(summingArray(["1","2","4"]))