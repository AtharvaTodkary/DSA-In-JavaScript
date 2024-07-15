class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return this;
    }

    dequeue(){
        var temp = this.first;
        if(!this.first) return null;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

    traverse(){
        var current = this.first;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}

var q = new Queue();

q.enqueue(1)
q.enqueue(6)
q.enqueue(7)
q.enqueue(5)
q.enqueue(2)
// q.traverse()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()

q.traverse()
