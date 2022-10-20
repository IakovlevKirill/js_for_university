function strClear(string) {
    let clearString = ""
    for (let i = 0; i < string.length; i++ ) {
        let currentSymbol = string[i]
        if ((currentSymbol.toLowerCase() != currentSymbol.toUpperCase()) || (!isNaN(currentSymbol))) {
            clearString += currentSymbol
        }
    }
    return clearString
}

console.log(strClear("4324324j#$_$324FDFLSsfsdfsd"))