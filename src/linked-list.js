const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        let node = new Node(data);
        if (this.length != 0) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        else{
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head == null) {
            return null;
        }
        else{
            return this._head.data;
        }
    }

    tail() {
        if (this._tail == null) {
            return null;
        }
        else{
            return this._tail.data;
        }
    }

    at(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        else{
            let curr_node = this._head;
            let c = 0;
            for (let c = 0; c < index; c++) {
                curr_node = curr_node.next;                
            }
            return curr_node.data;
        }
    }

    insertAt(index, data) {}

    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        else{
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    deleteAt(index) {}

    reverse() {
        let tmp = new LinkedList();
        for (let i = 1; i <= this.length; i++) {
            tmp.append(this.at(this.length-i));
            
        }
        console.log('HERE');
        console.log(tmp.head());
        console.log(tmp.tail());

        //this = tmp;
    }

    indexOf(data) {

    }
}

module.exports = LinkedList;
