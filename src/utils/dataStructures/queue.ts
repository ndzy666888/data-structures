/**
 * @description 队
 */
export default class Queue<T> {
  /**
   * @description 队成员数
   */
  count: number;
  /**
   * @description 队首成员位置
   */
  lowestCount: number;
  /**
   * @description 队
   */
  items: { [p: number]: T };

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /**
   * @description 入队
   * @param element
   */
  enqueue(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  /**
   * @description 出队
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  /**
   * @description 获取队首成员
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  /**
   *@description 判断队是否为空
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * @description 清空队
   */
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  /**
   * @description 队成员个数
   */
  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
