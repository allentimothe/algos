class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
reverse(){
  let node = this.head;
  this.head = this.tail;
  this.tail = node;
  let next;
  let prev = null;
  for(let i = 0; i < this.length; i++){
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}
}
