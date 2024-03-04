import Node from './node.mjs';

export default class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
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

	//Check if a particular key is in the list
	listContains(key) {
		let current = this.head;
		while (current.next !== null) {
			let nodeKey = current.key;
			if (nodeKey == key) return console.log(true);
			current = current.next;
		}
		let nodeKey = current.key;
		if (nodeKey == key) return console.log(true);
		return console.log(false);
	}

	removeKey(key) {
		let current = this.head;
		let previous;
		let index = 0;
		if (current.key == key && index == 0) {
			this.size--;
			return (this.head = current.next);
		}
		while (current.next !== null) {
			previous = current;
			current = current.next;
			index++;
		}
		if (current.key != key) return;
		this.size--;
		return (previous.next = current.next);
	}
}
