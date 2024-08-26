//Data 1
let dolphinsScore1 = [44, 23, 71];
let koalasScore1 = [23, 34, 27];

//Data 2
let dolphinsScore2 = [85, 54, 41];
let koalasScore2 = [23, 34, 27];

//calculate
const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgDolphins1 = calcAvg(...dolphinsScore1);
let avgKoalas1 = calcAvg(...koalasScore1);

let avgDolphins2 = calcAvg(...dolphinsScore2);
let avgKoalas2 = calcAvg(...koalasScore2);

function checkWinners(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
}

console.log("data 1: ");
checkWinners(avgDolphins1, avgKoalas1);

console.log("data 2: ");
checkWinners(avgDolphins2, avgKoalas2);
