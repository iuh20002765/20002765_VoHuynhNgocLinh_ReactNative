//Data1
let dolphinsScore1 = [96, 108, 89]
let koalasScore1 = [88, 91, 110]
//DataBonus1
let dolphinsScoreB1 = [97, 112, 101]
let koalasScoreB1 = [109, 95, 123]
//DataBonus2
let dolphinsScoreB2 = [97, 112, 101]
let koalasScoreB2 = [109, 95, 106]

//AverageFunction
function calculateAverage(scoreArray) {
  let sum = scoreArray.reduce((a, b) => a + b, 0)
  return sum / scoreArray.length
}
//DetermineWinner1
function determineWinner(scoreDolphins, scoreKoalas) {
  let avgDolphins = calculateAverage(scoreDolphins)
  let avgKoalas = calculateAverage(scoreKoalas)

  if (avgDolphins > avgKoalas) {
    console.log(
      `Dolphins win with an average score of ${avgDolphins.toFixed(1)}!`
    )
  } else if (avgKoalas > avgDolphins) {
    console.log(`Koalas win with an average score of ${avgKoalas.toFixed(1)}!`)
  } else if (avgDolphins == avgKoalas) {
    console.log(
      `It's a draw! Both teams have an average score of ${avgDolphins.toFixed(
        1
      )}!`
    )
  } else {
    console.log('No team wins the trophy!')
  }
}
//DetermineWinnerBonus1
function determineWinnerB1(scoreDolphins, scoreKoalas) {
  let avgDolphins = calculateAverage(scoreDolphins)
  let avgKoalas = calculateAverage(scoreKoalas)

  if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log(
      `Dolphins win with an average score of ${avgDolphins.toFixed(1)}!`
    )
  } else if (avgKoalas >= 100 && avgKoalas > avgDolphins) {
    console.log(`Koalas win with an average score of ${avgKoalas.toFixed(1)}!`)
  } else if (avgDolphins == avgKoalas) {
    console.log(
      `It's a draw! Both teams have an average score of ${avgDolphins.toFixed(
        1
      )}!`
    )
  } else {
    console.log('No team wins the trophy!')
  }
}
//DetermineWinnerBonus2
function determineWinnerB2(scoreDolphins, scoreKoalas) {
  let avgDolphins = calculateAverage(scoreDolphins)
  let avgKoalas = calculateAverage(scoreKoalas)

  if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log(
      `Dolphins win with an average score of ${avgDolphins.toFixed(1)}!`
    )
  } else if (avgKoalas >= 100 && avgKoalas > avgDolphins) {
    console.log(`Koalas win with an average score of ${avgKoalas.toFixed(1)}!`)
  } else if (
    avgDolphins >= 100 &&
    avgKoalas >= 100 &&
    avgDolphins == avgKoalas
  ) {
    console.log(
      `It's a draw! Both teams have an average score of ${avgDolphins.toFixed(
        1
      )}!`
    )
  } else {
    console.log('No team wins the trophy!')
  }
}
console.log('Data: ')
determineWinner(dolphinsScore1, koalasScore1)
console.log('Data Bonus 1: ')
determineWinnerB1(dolphinsScoreB1, koalasScoreB1)
console.log('Data Bonus 2: ')
determineWinnerB2(dolphinsScoreB2, koalasScoreB2)
