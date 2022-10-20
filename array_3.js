function intersection(arr1, arr2) {
    let intersectionArray = arr1.filter(x => arr2.includes(x))
    return intersectionArray
}

console.log(intersection(['1','2','3'],['2','3']))