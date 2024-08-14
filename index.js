const rs = require('readline-sync')


let arr = []
let operation
let operators = "/*-+"

const calculator = () => {
  operation = rs.question('What operation would you like to perform?')
  if (operators.includes(operation)) {
    arr.push(operation)
  } else {
    badOperator()
  }
}



const badOperator = () => {
  console.log("That is not a valid operation.")
  calculator()
  
}


calculator()
