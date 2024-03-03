import LinkedList from './list.mjs';

class hashMap {
	constructor() {
		this.array = [];
	}

	// The hashing algo
	hash(key) {
		let hashCode = 0;
		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 10;
		}
		return hashCode;
	}

	// Add a key/value pair to the map
	set(key, value) {
		let index = this.hash(key);
		if (!this.array[index]) {
			let list = new LinkedList();
			list.append(key, value);
			return (this.array[index] = list);
		}
		let bucketList = this.array[index];
		bucketList.append(key, value);
	}

	// Takes one argument as a key and returns the value
	// that is assigned to this key, If a key is not found, return null.
	get(key) {
		let index = this.hash(key);
		let bucket = this.array[index];
		if (!bucket) return console.log(null);
		return console.log(bucket.find(key));
	}

	//Returns the array with the values inside
	values() {
		// Initialize an array just for formatting and display
		// content of the hashmap in a more readable fashion
		let displayArray = [];
		this.array.forEach((item, index) => {
			// Not using the to string list method bcs i want to
			// display output in a different way
			let current = item.head;
			let list = [];
			while (current) {
				list.push(current.value);
				current = current.next;
			}
			displayArray[index] = list;
		});
		return console.table(displayArray);
	}
}

const map = new hashMap();

map.set('alfa', 100);
map.set('fala', 200);
map.values();

map.get('fala');
