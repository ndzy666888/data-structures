import React from 'react';
import { Deque } from './utils';

const PageDeque = () => {
  const deque: Deque<number> = new Deque();
  deque.addBack(1);
  deque.addBack(2);
  deque.addBack(3);
  deque.addFront(4);
  deque.addFront(5);
  deque.addFront(6);
  console.log(deque.toString());
  deque.removeBack();
  deque.removeFront();
  console.log(deque.toString());
  console.log(deque.peekBack());
  console.log(deque.peekFront());
  deque.clear();

  return <div>Deque</div>;
};

export default PageDeque;
