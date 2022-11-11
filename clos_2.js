function sum(a) {

    return function(b) {
        return a + b // берёт "a" из внешнего лексического окружения
    }

}
for (let i=1; i<5; i++) {
    console.log(sum(i*3)(i*2))
}
