export class Node<T> {
  /**
   * @description
   */
  element: T;
  /**
   * @description
   */
  next?: Node<T>;

  constructor(element: T, next?: Node<T>) {
    this.element = element;
    this.next = next;
  }
}
