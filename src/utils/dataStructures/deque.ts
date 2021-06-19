/**
 * @description 双端队列
 */
export default class Deque<T> {
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
   * @description 队首入队
   * @param element
   */
  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.items[0] = element;
    }
  }

  /**
   * @description 队尾入队
   * @param element
   */
  addBack(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  /**
   * @description 队首出队
   */
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  /**
   * @description 队尾出队
   */
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  /**
   * @description 队首元素
   */
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  /**
   * @description 队尾元素
   */
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  /**
   * @description 判断队是否为空
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
