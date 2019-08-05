import 'smicle-util'
import * as _util from 'smicle-util'
import * as readlineSync from 'readline-sync'
import {some, none} from './option'
import * as option from 'readline-sync'

/**
 * 0~9の番号
 */
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/**
 * 重複しない0~9の3桁の番号
 */
export type TreeDigit = readonly [Digit, Digit, Digit]

/**
 * 引数の値が`Digit`かどうか確認する
 * @param n 確認する数
 */
const isDigit = (n: number): n is Digit => _util.range(10).some(i => n === i)

/**
 * 引数の値を`Digit`に変換する、できない場合はエラーを出す
 * @param n 変換する数
 */
const asDigit = (n: number): Digit => {
  if (!isDigit(n)) throw new Error('A non-numeric value was entered')
  return n
}

/**
 * 重複しない0~9の3桁の番号を作成する
 */
export const GenerateTreeDigit = (): TreeDigit => {
  const n: Digit[] = _util.range(10).map(asDigit)
  return [n._sample$(), n._sample$(), n._sample$()]
}

/**
 * 標準入力を受け取る。
 */
const input = (): Option<string> => {
  const s: string = readlineSync.question()
  return s ? some(s) : none
}

/**
 * `,`と` `を潰して分割する
 * @param i 分割する値
 */
const splitToArrays = (i: string): Option<string[]> => {
  const s: string[] = i
    .replace(/,/g, '')
    .replace(/ /g, '')
    .split('')
  return s.length === 3 ? some(s) : none
}

/**
 * 文字列配列を数配列に変換する
 * @param s 変換する配列
 */
const toNumber = (s: string[]): Option<number[]> => {
  const d: number[] = s.map(Number)
  return !d.includes(NaN) ? some(d) : none
}

/**
 * 値の重複を確認する
 * @param n 確認する配列
 */
const isUniq = (n: number[]): Option<number[]> => {
  const u: number[] = n._uniq()
  return u.length === 3 ? some(u) : none
}

/**
 * 標準入力を受け取り、重複しない0~9の3桁の番号にして返す
 */
export const InputTreeDigit = (): TreeDigit => {
  for (;;) {
    // 値があるか確認
    const i = option.intoValue(input())
    if (!i) continue

    // 3桁か確認
    const s = option.intoValue(splitToArrays(i))
    if (!s) continue

    // 数値か確認
    const n = option.intoValue(toNumber(s))
    if (!n) continue

    // 重複がないか確認
    const u = option.intoValue(isUniq(n))
    if (!u) continue

    const d = u.map(asDigit)
    return [d[0], d[1], d[2]]
  }
}
