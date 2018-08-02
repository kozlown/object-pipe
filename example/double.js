require('..')()

function double () {
  return this + this
}

console.info((5).do(double)) // 10

console.info('Hey'.do(double)) // "HeyHey"

console.info([1, 2, 3].do(double)) // "1,2,31,2,3"