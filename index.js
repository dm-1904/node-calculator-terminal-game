const rs = require('readline-sync')


let arr = []
let operation
let operators = "/*-+"
let numbers = '0123456789'
let num1
let num2

const calculator = () => {
  operation = rs.question('What operation would you like to perform?')
  if (operators.includes(operation)) {
    arr.push(operation)
    enterNumber1()
  } else {
    badOperator()
  }
}



const badOperator = () => {
  console.log("That is not a valid operation.")
  calculator()

}


const enterNumber1 = () => {
  num1 =rs.question('Please enter the first number.')
  if (numbers.includes(num1)) {
    arr.push(num1)
    enterNumber2()
  } else {
    console.log('This is not a number.')
    enterNumber1()
  }
}

const enterNumber2 = () => {
  num2 = rs.question('Please enter the second number.')
  if (numbers.includes(num2)) {
    arr.push(num2)
    magicMath()
  } else {
    console.log('This is not a number.')
    enterNumber2()
  }
}

const magicMath = () => {
  if (arr[0] === '/') {
    console.log(parseFloat(arr[1]) / parseFloat(arr[2]))
  }
  if (arr[0] === '*') {
    console.log(parseFloat(arr[1]) * parseFloat(arr[2]))
  }
  if (arr[0] === '-') {
    console.log(parseFloat(arr[1]) - parseFloat(arr[2]))
  }
  if (arr[0] === '+') {
    console.log(parseFloat(arr[1]) + parseFloat(arr[2]))
  }
}


calculator()
