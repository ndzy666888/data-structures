import React from 'react';
import { Stack } from './utils';

const PageStack = () => {
  const stack: Stack<number> = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.pop();
  stack.isEmpty();
  stack.peek();
  console.log(stack.toString());
  stack.clear();
  stack.size();
  console.log(stack.toString());
  return <div>Stack</div>;
};

export default PageStack;
