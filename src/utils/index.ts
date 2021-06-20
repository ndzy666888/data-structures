export type IEqualsFunction = <T>(a: T, b: T) => boolean;
export const FAILED = -1;
export const SUCCESS = 1;
export const defaultEquals: IEqualsFunction = (a, b) => {
  return a === b;
};
export { Node as LinkedNode } from './dataStructures/models/linkedListModels';
export { default as Stack } from './dataStructures/stack';
export { default as Queue } from './dataStructures/queue';
export { default as Deque } from './dataStructures/deque';
export { default as LinkedList } from './dataStructures/linkedList';
