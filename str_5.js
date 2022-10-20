function replaceAll(find, replace, str) {
    let wordArray = str.split(' ')
    let replacedString = ""
    for (let i = 0; i < wordArray.length; i++ ){
        if (wordArray[i] === find) {
            replacedString += replace + " "
        } else {
            replacedString += wordArray[i]
        }
    }
    return replacedString
}

console.log(replaceAll("abc", "cab", "abc cab"))