const rs = require('readline-sync')

const arr = []

const initiateCalculator = () => {
  const operators = "/*-+"
  const operation = rs.question('What operation would you like to perform? ')
  if (operators.includes(operation)) {
    arr.push(operation)
    enterNumber1()
  } else {
    notValidOperation()
  }
}

const notValidOperation = () => {
  console.log("That is not a valid operation. ")
  initiateCalculator()
}

const enterNumber1 = () => {
  const num1 =rs.question('Please enter the first number. ')
  if (!isNaN(num1)) {
    arr.push(num1)
    enterNumber2()
  } else {
    console.log('This is not a number. ')
    enterNumber1()
  }
}

const enterNumber2 = () => {
  const num2 = rs.question('Please enter the second number. ')
  if (!isNaN(num2)) {
    arr.push(num2)
    performOperation()
  } else {
    console.log('This is not a number. ')
    enterNumber2()
  }
}

const performOperation = () => {
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

initiateCalculator()
