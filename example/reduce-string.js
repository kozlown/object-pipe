require('..')()

const reduce = Array.prototype.reduce
const sumFunction = (accumulator, number) => accumulator + parseInt(number)

let sum = '13544862'.do(reduce, sumFunction, 0)

console.info(sum) // 33

sum = sum.toString().do(reduce, sumFunction, 0)

console.info(sum) // 6