import 'smicle-util'
import * as _util from 'smicle-util'
import {TreeDigit} from './digit'

/**
 * EATとBITEにマッチする数
 */
type Matches = 0 | 1 | 2 | 3

/**
 * 引数の値が`Matches`かどうか確認する
 * @param n 確認する数
 */
const isMatches = (n: number): n is Matches => _util.range(4).some(i => n === i)

/**
 * 引数の値を`Matches`に変換する、できない場合はエラーを出す
 * @param n 変換する数
 */
const asMatches = (n: number): Matches => {
  if (!isMatches(n)) throw new Error('It became impossible numerical value')
  return n
}

/**
 * 相手の番号と入力した番号からEATの数を返す
 * @param e 相手の番号
 * @param i 入力した番号
 */
export const CheckEat = (e: TreeDigit, i: TreeDigit): Matches =>
  asMatches(e.filter((n, m) => n === i[m]).length)

/**
 * 相手の番号と入力した番号からBITEの数を取得し、引いた値を返す
 * @param e 相手の番号
 * @param i 入力した番号
 * @param eat EATの数
 */
export const CheckBite = (e: TreeDigit, i: TreeDigit, eat: Matches): Matches =>
  asMatches(i.filter(v => e.includes(v)).length - eat)
