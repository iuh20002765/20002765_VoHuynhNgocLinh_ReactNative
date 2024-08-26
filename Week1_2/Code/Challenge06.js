//Bills
const bills = [125, 555, 44]

//Tips
const tips = bills.map(calcTip)

//Array
const total = bills.map((bill, index) => bill + tips[index])

//calTips
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15 // 15% tip
  } else {
    return bill * 0.2 // 20% tip
  }
}

//Resolves the problem
console.log('Bills:', bills)
console.log('Tips:', tips)
console.log('Total:', total)
