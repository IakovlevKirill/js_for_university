let generate = (function () {

    return function() {

        let arr = []
        let num

        function rand(min, max) {
            return Math.floor(Math.random() * (max-min+1)) + min
        }

        while (arr.length < 100 ) {

            num = rand(1, 100)

            if (arr.length == 0) {
                arr.push(num)
            }
            let bool = true

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == num ) {
                    bool = false
                    break
                }
            }
            if (bool) {
                arr.push(num)

            }
        }
        return arr
    }

}())

console.log(generate())
console.log(generate().sort(function(a,b){return a-b}))