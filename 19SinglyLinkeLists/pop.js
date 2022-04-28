class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
traverse(){
  let current = this.head;
  while(current){
    console.log(current.val);
    current = current.next;
  }
 } 
pop(){
  if(!this.head) return undefined;
  let current = this.head;
  let newTail = current;
  while(current.next){
    newTail = current;
    current = current.next;
  }
  this.tail = newTail;
  this.tail.next = null;
  this.length--;
  if(this.length === 0){
    this.head = null;
    this.tail = null;
  }
  return current;
 }
}