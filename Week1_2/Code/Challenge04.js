//Data

let bills = [275, 40, 430];

const calculateTip = (bill) => {
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

bills.forEach((bill) => {
  let tip = calculateTip(bill);
  let total = bill + tip;
  console.log(
    `The bill was ${bill}, the tip was ${tip.toFixed(
      2
    )}, and the total value ${total.toFixed(2)}`
  );
});
