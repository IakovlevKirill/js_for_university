function uppperEachSymbolStr(hardString) {
    let splitStr = hardString.split(" ");
    let currentWord = ""
    let finalString = ""
    for (let j = 0; j < splitStr.length; j++) {
        currentWord = splitStr[j]
        let editedString = currentWord.slice(0, 1).toUpperCase() + currentWord.substring(1) + " "
        finalString += editedString
    }
    return finalString
}

console.log(uppperEachSymbolStr("ANything yOu wanT"))