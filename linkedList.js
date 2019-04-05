/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let linkedListArr = [];
  let head = null;
  let lastAdded = null;
  let tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(value) {
    let add = {};
    add.value = value;
    add.next = null;
    linkedListArr.push(add);

    if (head === null) {
      head = add
    } else {
      head.next = add;
    };

    tail = add;

    return add;
  }

  function get(number) {
    let getVal;
    for(let i = 0; i<number; i++){
      getVal = head.next;
    }
    if (get === undefined) {
      return false;
    };
    return getVal;
  }

  function remove(number) {
    if (number > linkedListArr.length - 1) {
      return false;
    };
    let remove = '';



    linkedListArr.splice(number, 1);
    remove = linkedListArr[number];
    head = linkedListArr[0];
    tail = linkedListArr[linkedListArr.length - 1];
    return remove;
  }

  function insert(value, number) {
    if (number > linkedListArr.length || number < 0) {
      return false;
    };

    let add = {};
    add.value = value;
    add.next = null;
    linkedListArr.splice(number, 0, add);
    head = linkedListArr[0];
    tail = linkedListArr[linkedListArr.length - 1];
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