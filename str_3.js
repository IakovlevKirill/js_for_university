function palindromeCHeck(string) {
    let stringLentgth= string.length
    for (let i = 0; i < stringLentgth / 2; i++) {
        if (string.charAt(i) !== string.charAt(stringLentgth - 1 - i)) {
            return false
        }
    }
    return true
}


console.log(palindromeCHeck("Anything"))