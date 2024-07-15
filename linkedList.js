class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
        // console.log(this);
    }

    pop(del){
        if(!this.head) return undefined;
        
        if(this.head.val === del){
            this.head = this.head.next;
            this.length--;
            if(this.length === 0){
                this.tail =null;
            }
        } 

        var temp = this.head;
        while(temp){ //Traversal loop
            if(temp.next === null) break; //break loop if end of list reached
            if(temp.next.val === del){ //check for specific value
                if(temp.next === this.tail){
                    this.tail = temp;
                    this.tail.next = null;
                    temp.next = null; 
                }else{
                temp.next = temp.next.next;
                this.length--;
                }
            }
            // console.log(temp.val);
            temp = temp.next;
            return temp;
        }

    }

    unshift(val){
        var newNode = new Node(val);
        var temp = newNode;
        if(this.length){
            temp.next = this.head;
            this.head = temp;
            this.length++;
        }
    }

    getInfo(index){
        var count = 0;
        var temp = this.head;
        if(index < 0 || index >= this.length){
            return null;
        }
        while(count != index){
            count++;
            temp = temp.next;
        }
        return temp;
    }

    set(index, val){
        var foundNode = this.getInfo(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, insertVal){
        if(!this.head){
            this.push(insertVal);
            return true;
        }
        
        if(index < 0 || index >= this.length){
            return false;
        }else if(index == 0){
            this.unshift(insertVal);
            this.length++;
        }else if(index == this.length - 1){
            this.push(insertVal);
            return true;
        }else{
            var newNode = new Node(insertVal);
            var findNode = this.getInfo(index-1);
            newNode.next = findNode.next;
            findNode.next = newNode;
            this.length++;
            return true;
        }
    }

    remove(index) {
        if(!this.head) return false;
        var findNode = this.getInfo(index-1);
        if(index < 0 || index >= this.length){
            return false;
        }else if(index == 0){
            this.head = this.head.next;
            this.length--;
        }else if(index == this.length -1){
            // this.pop()
            findNode.next = null;
            this.tail = findNode;
            this.length--;
        }else{
            findNode.next = findNode.next.next;
            this.length--;
            return true;
        }
    }

    reverse(){
        var temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        var next;
        var prev = null;
        for(var i=0; i<this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            current = next;
        }
        return this;
    }

    printList(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
}

var lists = new singlyLinkedList();

lists.push(0);
lists.push(1);
lists.push(2);
lists.push(3);
lists.push(4);
lists.push(5);
lists.push(6);

//DELETE 
// lists.pop(2);
// lists.unshift(10);
//Print all(Traversal)
// lists.printList();
// lists.getInfo(3);
lists.insert(3, 100);
lists.printList();
// console.log(lists); 

