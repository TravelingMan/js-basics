/*
  Input: Score, TotalScorePossible
  Output: Muh grade
*/

const getGrade = (score, total) => {
  const percentage = (score / total) * 100
  let grade

  if (percentage < 60) {
    grade = "F"
  } else if (percentage < 70) {
    grade = "D"
  } else if (percentage < 80) {
    grade = "C"
  } else if (percentage < 90) {
    grade = "B"
  } else if ((percentage >= 90 && percentage <= 100)) {
    grade = "A"
  }

  return `You got a(n) ${grade} ${percentage}%`
}

console.log(getGrade(88, 100))
console.log(getGrade(65, 100))