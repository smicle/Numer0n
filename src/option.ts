declare global {
  type None = {type: 'None'}
  type Some<T> = {type: 'Some'; value: T}
  type Option<T> = None | Some<T>
}

/**
 * Make `some` out of values
 * @param v the value of `value`
 */
export const some = <T>(v: T): Some<T> => ({type: 'Some', value: v})

/**
 * Nothing value
 */
export const none: None = {type: 'None'}

/**
 * Returns `o.value` if `Some`, returns `undefined` if `none`
 * @param o The value you want to get
 */
export const intoValue = <T>(o: Option<T>): T | undefined => {
  // prettier-ignore
  switch (o.type) {
    case 'Some': return o.value
    case 'None': return undefined
  }
}

/**
 * Wrap value to `option`
 * @param b `bool` value of `some` or `none`
 * @param v Value to set
 */
// export const Create = <T>(b: unknown, v: T): Option<T> => (b ? some(v) : none)
