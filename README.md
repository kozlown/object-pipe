# object-pipe [![Build Status](https://travis-ci.com/kozlown/super-curry.svg?branch=master)](https://travis-ci.com/kozlown/object-pipe) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Extend Object prototype with pipe function.

## Installation

```bash
yarn add object-pipe
```
or
```bash
npm install object-pipe
```

## Usage

```js
require('object-pipe')()
```
Nothing else needed, this will mutate the Object prototype.
By default the pipe function is named `do` and it's used like this in the examples below.

But you can setup another name for it
```js
require('object-pipe')('pipe')
// the pipe function will be 'pipe'
```

## Examples

### Double

```js
require('object-pipe')()

function double () {
  return this + this
  // 'this' is referring to the object calling the pipe function
}

console.info((5).do(double)) // 10

console.info('Hey'.do(double)) // "HeyHey"

console.info([1, 2, 3].do(double)) // "1,2,31,2,3"
```

### Reduce on string
```js
require('object-pipe')()
const reduce = Array.prototype.reduce
const sumFunction = (accumulator, number) => accumulator + parseInt(number)

let sum = '13544862'.do(reduce, sumFunction, 0)

console.info(sum) // 33

sum = sum.toString().do(reduce, sumFunction, 0)

console.info(sum) // 6
```
