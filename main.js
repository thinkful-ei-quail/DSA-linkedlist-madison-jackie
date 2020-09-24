const LinkedList = require('./linkedlist');
const SLL = new LinkedList()
function main() {

    SLL.insertFirst('Boomer')
    SLL.insertFirst('Capi')
    SLL.insertBefore('test', 'Capi')

}
main()
SLL.display()
