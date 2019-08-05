import * as digit from './digit'
import * as matches from './matches'

console.log('Game Start')

// 相手の番号
const e = digit.GenerateTreeDigit()
for (var c = 0; true; c++) {
  // 入力した番号
  const i = digit.InputTreeDigit()

  const eat = matches.CheckEat(e, i)
  const bite = matches.CheckBite(e, i, eat)

  console.log(`${c} ${eat}EAT-${bite}BITE\n`)

  if (eat === 3) break
}

console.log(`You guessed ${c} times`)
