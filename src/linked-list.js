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

    nodeAtIndex(index){
        if (index < 0 || index > this.length) {
            return null;
        }
        else{
            let curr_node = this._head;
            let c = 0;
            for (let c = 0; c < index; c++) {
                curr_node = curr_node.next;                
            }
            return curr_node;
        }
    }

    at(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        else{
            return this.nodeAtIndex(index).data;
        }
    }

    insertAt(index, data) {
        let tmp = new LinkedList();
        for (let i = 0; i < index; i++) {
            tmp.append(this.at(i));
        }
        tmp.append(data);
        for (let i = index; i < this.length; i++) {
            tmp.append(this.at(i));
        }
        this.clear();
        for (let i = 0; i < tmp.length; i++) {
            this.append(tmp.at(i));
        }
    }

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
        return this;
    }

    deleteAt(index) {
        if (this.isEmpty() != true) {
            let tmp = new LinkedList();
            for (let i = 0; i < this.length; i++) {
                if (i != index) {
                    tmp.append(this.at(i));
                }
            }
            this.clear();
            if (tmp.isEmpty() != true) {
                for (let i = 0; i < tmp.length; i++) {
                    this.append(tmp.at(i));
                }      
            }    
        }
        return this;
    }

    reverse() {
        if (this.length > 1) {
            let tmp = new LinkedList();
            for (let i = 1; i <= this.length; i++) {
                tmp.append(this.at(this.length-i));
            }
            this.clear();
            for (let i = 0; i < tmp.length; i++) {
                this.append(tmp.at(i));
            }      
        }
        return this;
    }

    indexOf(data) {
        let result = null;
        for (let i = 0; i < this.length; i++) {
            if (this.nodeAtIndex(i).data == data) {
                result = i;
            }
        }
        if (result == null) {
            return -1;
        }
        else{
            return result;
        }
    }
}

module.exports = LinkedList;
