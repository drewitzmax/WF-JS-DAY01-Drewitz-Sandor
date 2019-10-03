let numbers = prompt("Write 3 numbers with ,")
console.log(numbers)

numbers = numbers.split(',')
console.log(numbers)

let newNumbers

let sum = numbersumavg(numbers)

function numbersumavg(arr) {

    let a, b, c
    [a, b, c] = arr
    a = parseInt(a)
    b = parseInt(b)
    c = parseInt(c)
    
    console.log(a+b+c)
    console.log((a+b+c)/numbers.length)
    
}