import React from 'react';
import { LinkedList } from './utils';

const PageLinkedList = () => {
  const linkedList: LinkedList<number> = new LinkedList();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  linkedList.push(4);
  linkedList.insert(2.5, 2);
  linkedList.remove(3);
  console.log(linkedList);
  console.log(linkedList.getElementAt(1));
  return <div>LinkedList</div>;
};

export default PageLinkedList;
