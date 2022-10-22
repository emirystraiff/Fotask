import {Node} from "./Node.js";

export class LinkedList
{
    //starts with an empty list
    constructor()
    {
        this.head = this.tail = null;
        this.length = 0;
    }

    
/*  @description: adds the element at front of list (before the current head) 
    @param: element/node you want to add
    @return: none */

    prepend(element)
    {
        //if list is empty
        if(!this.head)
        {
            const newNode = new Node(element);
            this.head = this.tail = newNode;
            this.length++;
        }
        else //if list is not empty
        {
            const newNode = new Node(element);
            let current = this.head;
            newNode.next = current;
            this.head = newNode;
            this.length++;
        }
    }


/*  @description: adds the element at the back of list (after the current tail) 
    @param: element/node you want to add
    @return: none */

    append(element)
    {
        //if list is empty
        if(!this.tail)
        {
            const newNode = new Node(element);
            this.tail = this.head = newNode;
            this.length++;
        }
        else //if list is not empty
        {
            const newNode = new Node(element);
            let current = this.tail;
            this.tail = newNode;
            current.next = newNode;
            this.length++;
        }
    }


/*  @description: adds the element at the given index 
    @param: element you want to add and the specified index where you want the new node to be inserted at. 
    @return: none */

    insert(element, index)
    {
        //if list is empty or index = 0
        if (!this.head || index == 0)
        {
            this.prepend(element);
            return true;
        }

        //if index out of bounds
        if (index < 0 || index > this.length)
        {
            return false;
        }

        //if index == length
        if (index == this.length)
        {
            this.append(element);
            return true;
        }

        let traverse = this.head;
        for (let x = 1 ; x < index ; x++)
        {
            traverse = traverse.next;
        }
        //now the traverse points to the node right before the specified index

        //create new node and insert 
        const newNode = new Node(element);
        newNode.next = traverse.next;
        traverse.next= newNode;
        this.length++;

    }


/*  @description: remove the first element of list (head) 
    @param: none
    @return: the value of the node that was removed OR null if the list is empty */
    
    removeHead()
    {
        let elementToRemove;
        //if list is empty
        if (!this.head)
        {
            return null;
        }
        else 
        {
            if (this.head == this.tail) //if list only contains one element
            {
            elementToRemove = this.head;
            this.head = this.tail = null;
            this.length=0;
            }
            else //if list contains more than one element
            {
            elementToRemove = this.head;
            this.head = elementToRemove.next;
            this.length--;
            }  
            
            return elementToRemove.getNode();
        }
    }


/*  @description: remove the last element of list (tail) 
    @param: none
    @return: the value of the node that was removed OR null if the list is empty */

    removeTail()
    {
        let elementToRemove;
        //if list is empty
        if (!this.tail)
        {
            return null;
        }
        else 
        {
            if (this.head == this.tail) //if list only contains one element
            {
            elementToRemove = this.tail;
            this.tail = this.head = null;
            this.length=0;
            }
            else //if list contains more than one element
            {
                //to delete the last node of LinkedList, find the second to last node and change its pointer to null. 

                let previous = this.head;
                let traverse = this.head.next;
                while(traverse.next)
                {
                    previous = traverse;
                    traverse = traverse.next;
                } 
                
                elementToRemove = this.tail;
                previous.next = null;
                this.length--;
            }  
            
            return elementToRemove.getNode();
        }
    }




/*  @description: retrieve the value of the first element in the list (head) 
    @param: none
    @return: the value of the head element OR null if the list is empty */

    getHead()
    {
        //if list is empty
        if(this.head == null)
        {
            return null;
        }
        else //if list is not empty
        {
            return this.head.getNode();
        }
    }


/*  @description: retrieve the value of the last element in the list (tail) 
    @param: none
    @return: the value of the tail element OR null if the list is empty */

    getTail()
    {
        //if list is empty
        if(this.tail == null)
        {
            return null;
        }
        else //if list is not empty
        {
            return this.tail.getNode();
        }       
    }

/*  @description: removes all elements in the list, resulting with an empty/null list. 
    @param: none
    @return: none */

    clear()
    {
        //if list is not empty
        if(this.head != null)
        {
            this.head = this.tail = null;
            length=0;
        }

    }


/*  @description: prints the Linkedlist length/size
    @param: none
    @return: length of list */

    size()
    {
        return this.length;
    }


/*  @description: prints the Linkedlist 
    @param: none
    @return: none */

    print()
    {
        let current = this.head;
        let printStr = "";
        while(current != null)
        {
            printStr+= current.getNode() + "->";
            current = current.next;
        }
        console.log(printStr);
    }

} 
