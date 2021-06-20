import { FAILED } from '../index';

/**
 * @description 栈
 */
class Stack<T> {
  /**
   * @description 栈成员数
   */
  count: number;
  /**
   * @description 栈
   */
  items: { [p: number]: T };

  constructor() {
    this.count = 0;
    this.items = {};
  }

  /**
   * @description 添加栈成员
   * @param element
   */
  push(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  /**
   * @description 成员出栈
   */
  pop() {
    if (this.isEmpty()) {
      return FAILED;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  /**
   * @description 栈顶成员
   */
  peek() {
    if (this.isEmpty()) {
      return FAILED;
    }
    return this.items[this.count - 1];
  }

  /**
   * @description 判断栈是否为空
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * @description 栈成员个数
   */
  size() {
    return this.count;
  }

  /**
   * @description 清空栈
   */
  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
export default Stack;
