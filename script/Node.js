//this class will be imported by LinkedList.js class
export class Node
{
    //create node object
    constructor (data)
    {
        this.node = data;
        this.next  =null;
    }

/*  @description: to retrive the value of a node
    @param: none
    @return: node value */
  
    getNode()
    {
        return this.node;
    }

    
/*  @description: to change the value of a node
    @param: the new value for the node you want to change 
    @return: none */
  
    setNode(data)
    {
        this.node = data;
    }
}
