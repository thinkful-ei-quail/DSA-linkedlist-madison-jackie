class functions {
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  size() {
      let count = 0;
      while(current) {
          current = current.next;
          count++;
      }
      console.log(count)
  }
  isEmpty() {
    if(this.head === null) {
        console.log('is empty')
    }
  }
  findPrevious(item) {
    let current = this.head;
    let previous;
    if(!item) {
      throw 'must contain item'
    }
    if (!this.head) {
      return null;
    }
    while (current.value !== item) {
      if (current.next === null) {
        return null;
      } else {
        previous = current;
        current = current.next;
      }
    }
    console.log(previous.value);
  }

module.exports = functions;
