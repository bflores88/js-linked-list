/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    if (tail === null) {
      return null;
    };

    tail = head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }

  function add(value) {
    let newNode = {};
    newNode.value = value;
    newNode.next = null;

    if (head === null) {
      head = newNode;
    } else {
      let addToTail = getTail();
      addToTail.next = newNode;
    };

    tail = newNode;
    return newNode;
  }

  function get(number) {
    let currentNode = head;
    let counter = 0;

    while (currentNode) {
      if (counter === number) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
    return false;
  }

  function remove(number) {
    if(!head){
      return {};
    }

    if (number === 0) {
      head = head.next;
      return head;
    }
    
    let previousNode = get(number - 1);
    if (!previousNode || !previousNode.next) {
      return false;
    }

    previousNode.next = previousNode.next.next;
    return;
  }

  function insert(value, number) {
    if (get(number) === false) {
      return false;
    };

    if (!head) {
      add(value);
    };

    if (number === 0) {
      let newNode = {};
      newNode.value = value;
      newNode.next = head;
      head = newNode;
    }

    let previousNode = get(number - 1);
    let newNode = {};
    newNode.value = value;
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    return;
  }

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  }

}