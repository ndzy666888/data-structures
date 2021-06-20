import {
  IEqualsFunction,
  defaultEquals,
  LinkedNode,
  FAILED,
  SUCCESS,
} from '../index';

/**
 * @description 链表
 */
export default class LinkedList<T> {
  /**
   * @description 链表成员个数
   */
  count = 0;
  /**
   * @description 链表
   */
  head: LinkedNode<T> | undefined;
  equalsFn: IEqualsFunction;

  constructor(equalsFn: IEqualsFunction = defaultEquals) {
    this.equalsFn = equalsFn;
  }

  /**
   * @description 添加成员
   * @param element
   */
  push(element: T) {
    const node = new LinkedNode(element);
    let current;

    if (this.head === undefined) {
      this.head = node;
    } else {
      current = this.head;

      // 获取最后一项
      while (current.next !== undefined) {
        current = current.next;
      }

      current.next = node; // 建立链接
    }
    this.count++;
  }

  /**
   * @description 获取 index 位置的链表
   * @param index
   */
  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && current !== undefined; i++) {
        current = current.next;
      }
      return current;
    }
    return FAILED;
  }

  /**
   * @description 指定位置插入成员
   * @param element
   * @param index
   */
  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new LinkedNode(element);

      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        if (previous !== -1 && previous) {
          node.next = previous.next;
          previous.next = node;
        }
      }
      this.count++;
      return SUCCESS;
    }
    return FAILED;
  }

  /**
   * @description 移除指定索引成员
   * @param index
   */
  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (current) {
        if (index === 0) {
          this.head = current.next;
        } else {
          const previous = this.getElementAt(index - 1);
          if (previous !== -1 && previous) {
            current = previous.next;
            previous.next = current?.next;
          }
        }
        this.count--;
        return current?.element;
      }
    }
    return FAILED;
  }

  /**
   * @description 移除指定成员
   * @param element
   */
  remove(element: T) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  /**
   * @description 获取指定成员索引
   * @param element
   */
  indexOf(element: T) {
    let current = this.head;

    for (let i = 0; i < this.size() && current !== undefined; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }

    return FAILED;
  }

  /**
   * @description 判断链表是否为空
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * @description 链表大小
   */
  size() {
    return this.count;
  }

  /**
   * @description 获取链表
   */
  getHead() {
    return this.head;
  }

  /**
   * @description 清空链表
   */
  clear() {
    this.head = undefined;
    this.count = 0;
  }

  toString() {
    if (this.head === undefined) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current !== undefined; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
