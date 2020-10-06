export interface Page<T> {

  content: T[],
  totalPages: number,
  last: boolean,
  totalElements: number,
  size: number,
  number: number,
  numberOfElements: number,
  first: boolean,
  empty: boolean

}
