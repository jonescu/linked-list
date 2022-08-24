class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Prepend node 
  prepend(value){
    this.head = new Node(value, this.head)
    this.size++
  }

  // Append node
  append(value) {
    let node = new Node(value)
    let currentNode

    // If empty, then make head
    if (this.head === null) {
      this.head = node
    } else {
      currentNode = this.head

      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = node
    }

    this.size++
  }

  // Insert at index
  insertAt(value, index) {
    if (index > 0 && index > this.size) {
      return
    }

    if (index === 0) {
      this.prepend(value)
      return
    }

    const node = new Node(value)
    let currentNode, previousNode

    // Set currentNode to first
    currentNode = this.head
    let count = 0

    while (count < index) {
      previousNode = currentNode
      count++
      currentNode = currentNode.next
    }

    node.next = currentNode
    previousNode.next = node

    this.size++
  }

  // Returns true if value is found in list, false if not
  contains(value) {
    let currentNode = this.head

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next
    }

    console.log(currentNode == null ? false : true)
  }

  // Returns the index of the node containing value, null if not found
  find(value) {
    let currentNode = this.head
    let count = 0

    while (currentNode) {
      if (value === currentNode.value) {
        console.log(count)
        return
      } 

      count ++
      currentNode = currentNode.next
    }
    console.log(null)
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return
    }

    let currentNode = this.head
    let previousNode
    let count = 0

    // Remove first
    if (index === 0) {
      this.head = currentNode.next
    } else {
      while (count < index) {
        count++
        previousNode = currentNode
        currentNode = currentNode.next
      }

      previousNode.next = currentNode.next
    }

    this.size--
  }

  // Find size of the list
  findSize() {
    console.log(this.size)
  }

  // Return the head of the list
  findHead() {
    console.log(this.head)
  }

  // Return the last node in the list
  findTail() {
    let currentNode = this.head

    while (currentNode.next) {
      if(currentNode.next.next === null) {
        console.log(currentNode.next.value)
      }
    
      currentNode = currentNode.next
    }
  }

  // Removes last element from list
  pop() {
    if (!this.head) {
      return null
    }

    // If only one node is in the list
    if (!this.head.next) {
      this.head = null
      return
    }

    let previousNode = this.head
    let tail = this.head.next

    while(tail.next !== null) {
      previousNode = tail
      tail = tail.next
    }

    previousNode.next = null
    this.size--
    return this.head
  }

  // Represents linked list objects as strings
  toString() {
    let currentNode = this.head
    let str = ""

    while(currentNode) {
      str += `(${currentNode.value})  -> `
      currentNode = currentNode.next
    }

    str += "(null)"

    console.log(str)
    return 
  }
  

  // Clear list
  clearList() {
    this.head = null
    this.size = 0
  }

  // Print list data
  printListValues() {
    let currentNode = this.head

    while (currentNode) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }
}

const ll = new LinkedList()

ll.prepend(100)
ll.prepend(200)
ll.prepend(300)
ll.append(400)
ll.printListValues()