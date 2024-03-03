import Node from './node.mjs';

export default class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// Output the first node
	headNode() {
		if (!this.head) return console.log('This list is empty');
		return console.log(this.head);
	}

	// Output the last node
	tailNode() {
		if (!this.head) return console.log('This list is empty');
		let current = this.head;
		while (current.next !== null) {
			current = current.next;
		}
		return console.log(current);
	}

	// Remove the last node
	popNode() {
		if (!this.head) return console.log('This list is empty');
		let current = this.head;
		let previous;
		while (current.next !== null) {
			previous = current;
			current = current.next;
		}
		previous.next = null;
		this.size--;
	}

	// Return the value at given index
	valueAtIndex(index) {
		let current = this.head;
		if (!this.head) return console.log('This list is empty');
		if (index < 0) return console.log('Negative index not allowed');
		if (index == 0)
			return console.log(`The value at index ${index} is ${current.value}`);
		if (index > this.size - 1)
			return console.log(`The last index is ${this.size - 1}`);
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return console.log(`The value at index ${index} is ${current.value}`);
	}

	//Find the value of a key
	find(key) {
		let current = this.head;
		while (current.next !== null) {
			let nodeKey = current.key;
			if (nodeKey === key) return console.log(`${key} = ${current.value}`);
			current = current.next;
		}
		// To iterate also over the las node
		let nodeKey = current.key;
		if (nodeKey === key) return console.log(`${key} = ${current.value}`);
		return;
	}

	// Prepend a new node at the start
	prepend(value) {
		this.head = new Node(value, this.head);
		this.size++;
	}

	// Append a new node at the end
	append(key, value) {
		// If the list is empty create the head node and return
		if (!this.head) {
			this.size++;
			return (this.head = new Node(key, value, this.head));
		}
		let current = this.head;
		while (current.next !== null) {
			current = current.next;
		}
		current.next = new Node(key, value);
		this.size++;
	}

	//Check if a particular value is in the list
	listContains(value) {
		let current = this.head;
		while (current.next !== null) {
			let nodeValue = current.value;
			if (nodeValue == value) return console.log(true);
			current = current.next;
		}
		let nodeValue = current.value;
		if (nodeValue == value) return console.log(true);
		return console.log(false);
	}

	// Print a string with the nodes values
	toString() {
		let current = this.head;
		let string = '';
		while (current) {
			string += `(${current.value}) --> `;
			current = current.next;
		}
		string += 'null';
		console.log(string);
	}

	// Print total number of nodes
	listSize() {
		console.log(`This list has ${this.size} nodes`);
	}

	// Inserts a new node with the provided value at the given index
	insertAt(value, index) {
		let current = this.head;
		let previous;
		let listIndex = 0;
		if (index == 0) {
			this.head = new Node(value);
			let newHead = this.head;
			newHead.next = current;
			this.size++;
		}
		while (listIndex < index) {
			previous = current;
			current = current.next;
			listIndex++;
		}
		let newNode = new Node(value);
		newNode.next = current;
		previous.next = newNode;
		this.size++;
	}

	// Remove the node at given index
	removeAt(index) {
		let current = this.head;
		let previous;
		let listIndex = 0;
		if (index == 0) {
			this.head = current.next;
			this.size--;
		}
		while (listIndex < index) {
			previous = current;
			current = current.next;
			listIndex++;
		}
		previous.next = current.next;
		this.size--;
	}
}
