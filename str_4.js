function charCheck(string) {
    let uniqString = ""
    for(let i = 0; i < string.length; i++){
        if (string[i] !== " ") {
            if (uniqString.includes(string[i]) === false) {
                uniqString += string[i]
            }
        } else {
            uniqString += string[i]
        }
    }
    return uniqString
}

console.log(charCheck("AAAA BBB  DDDD"))