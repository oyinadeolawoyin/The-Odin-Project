# HashMap Implementation in JavaScript

This project is a custom implementation of a `HashMap` data structure in JavaScript. It provides a flexible and efficient way to store and retrieve key-value pairs, even handling hash collisions with the use of linked lists.

## Features

- **Custom Hashing Function**: Implements a hashing algorithm for keys.
- **Collision Handling**: Uses linked lists to handle hash collisions.
- **Dynamic Resizing**: Automatically resizes the table when the load factor exceeds 0.75.
- **Comprehensive API**:
  - `set(key, value)`: Adds or updates a key-value pair.
  - `get(key)`: Retrieves the value associated with a given key.
  - `has(key)`: Checks if a key exists in the map.
  - `remove(key)`: Deletes a key-value pair by key.
  - `length()`: Returns the total number of key-value pairs.
  - `clear()`: Removes all key-value pairs.
  - `keys()`: Returns an array of all keys.
  - `values()`: Returns an array of all values.
  - `entries()`: Returns an array of all key-value pairs.

## Installation

No installation is required. Clone this repository and include the `hashmap` function in your JavaScript code.

```bash
# Clone the repository
git clone https://github.com/oyinadeolawoyin/The-Odin-Project/tree/main/javascript/HashMap
```

## Usage

Here is an example of how to use the `hashmap`:

```javascript
const myHashMap = hashmap();

// Add key-value pairs
myHashMap.set('dog', 'bark');
myHashMap.set('cat', 'meow');
myHashMap.set('bird', 'chirp');

// Retrieve values
console.log(myHashMap.get('dog')); // Output: "bark"

// Check if a key exists
console.log(myHashMap.has('cat')); // Output: true

// Remove a key-value pair
myHashMap.remove('bird');
console.log(myHashMap.get('bird')); // Output: undefined

// Get the number of elements
console.log(myHashMap.length()); // Output: 2

// Clear the HashMap
myHashMap.clear();
console.log(myHashMap.length()); // Output: 0

// Get all keys, values, or entries
myHashMap.set('fish', 'swim');
myHashMap.set('lion', 'roar');
console.log(myHashMap.keys()); // Output: ["fish", "lion"]
console.log(myHashMap.values()); // Output: ["swim", "roar"]
console.log(myHashMap.entries()); // Output: [["fish", "swim"], ["lion", "roar"]]
```

## How It Works

1. **Hashing**: A custom hash function computes a hash code for each key and maps it to an index in the table.
2. **Collision Resolution**: When two keys map to the same index, a linked list is used to chain multiple key-value pairs at that index.
3. **Dynamic Resizing**: When the load factor (ratio of elements to table size) exceeds 0.75, the table is resized, and all elements are redistributed.

## API Reference

### `set(key, value)`
Adds or updates a key-value pair in the HashMap.

### `get(key)`
Retrieves the value associated with the given key.

### `has(key)`
Checks if a key exists in the HashMap. Returns `true` or `false`.

### `remove(key)`
Removes the key-value pair associated with the given key.

### `length()`
Returns the number of key-value pairs in the HashMap.

### `clear()`
Removes all key-value pairs from the HashMap.

### `keys()`
Returns an array of all keys in the HashMap.

### `values()`
Returns an array of all values in the HashMap.

### `entries()`
Returns an array of all key-value pairs in the HashMap.

## Tests

To ensure that the HashMap works as expected, you can run various tests:

```javascript
// Initialize a new HashMap
const hashMap = hashmap();

// Test set and get
hashMap.set('a', 1);
hashMap.set('b', 2);
hashMap.set('c', 3);
console.log(hashMap.get('a')); // Output: 1
console.log(hashMap.get('b')); // Output: 2

// Test remove
hashMap.remove('b');
console.log(hashMap.has('b')); // Output: false

// Test length
console.log(hashMap.length()); // Output: 2

// Test clear
hashMap.clear();
console.log(hashMap.length()); // Output: 0
```