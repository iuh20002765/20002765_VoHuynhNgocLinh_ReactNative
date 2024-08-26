//Data1
let massMark1 = 169
let heightMark1 = 78
let massJohn1 = 195
let heightJohn1 = 92
//Data2
let massMark2 = 188
let heightMark2 = 95
let massJohn2 = 176
let heightJohn2 = 85

//BMI1
let BMIMark1 = massMark1 / heightMark1 ** 2
let BMIJohn1 = massJohn1 / heightJohn1 ** 2

//BMI2
let BMIMark2 = massMark2 / heightMark2 ** 2
let BMIJohn2 = massJohn2 / heightJohn2 ** 2

//CompareBMI
let markHigherBMI1 = BMIMark1 > BMIJohn1
let markHigherBMI2 = BMIMark2 > BMIJohn2

//SolvesProblem
console.log('Data 1:')
console.log("Mark's BMI: ", BMIMark1)
console.log("John's BMI: ", BMIJohn1)
if (markHigherBMI1) {
  console.log(
    "Mark's BMI (",
    BMIMark1,
    ") is higher than John's (",
    BMIJohn1,
    ')!'
  )
} else {
  console.log(
    "John's BMI (",
    BMIJohn1,
    ") is higher than Mark's (",
    BMIMark1,
    ')!'
  )
}

console.log('Data 2:')
console.log("Mark's BMI: ", BMIMark2)
console.log("John's BMI: ", BMIJohn2)
if (markHigherBMI2) {
  console.log(
    "Mark's BMI (",
    BMIMark2,
    ") is higher than John's (",
    BMIJohn2,
    ')!'
  )
} else {
  console.log(
    "John's BMI (",
    BMIJohn2,
    ") is higher than Mark's (",
    BMIMark2,
    ')!'
  )
}
