import React from 'react';
import { Queue } from './utils';

const PageQueue = () => {
  const queue: Queue<number> = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.toString());
  queue.dequeue();
  queue.peek();
  queue.size();
  queue.isEmpty();
  queue.clear();
  return <div>Queue</div>;
};

export default PageQueue;
