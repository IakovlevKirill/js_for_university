function counter() {
    let i = 1
    return function() {return i++}
}

let counter_func = counter()

for (let i=1; i<10; i++) { 
    console.log(counter_func())
}
