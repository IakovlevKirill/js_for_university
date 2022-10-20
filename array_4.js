function binarySearch(val, arr) {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === val) {
            return "Element founded, his position is - " + mid
        }

        if (val < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1;
}

console.log(binarySearch(7, [1,2,3,4,5,6,7,8]))