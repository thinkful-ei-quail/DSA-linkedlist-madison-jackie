const LinkedList = require('./linkedlist');
const SLL = new LinkedList()
function main() {
    
    SLL.insertFirst('5 Tony')
    SLL.insertFirst('4 Stan')
    SLL.insertLast('6 Apollo')
    SLL.insertFirst('1 Boomer')
    SLL.insertAt('2 Jamal', 1)
    SLL.insertLast('Rhonda')
    SLL.insertBefore('3 test', '4 Stan')
    SLL.insertAfter('Between stan and tony', '4 Stan')

}
main()
SLL.display()
