import * as numer0n from './numer0n'

console.log('Game Start')

// 相手の番号
const e = numer0n.GenerateNumer0n()
for (var c = 0; true; c++) {
  // 入力した番号
  const i = numer0n.InputNumer0n()

  const eat = numer0n.CheckEat(e, i)
  const bite = numer0n.CheckBite(e, i) - eat

  console.log(`${c} ${eat}EAT-${bite}BITE\n`)

  if (eat === 3) break
}

console.log(`You guessed ${c} times`)
