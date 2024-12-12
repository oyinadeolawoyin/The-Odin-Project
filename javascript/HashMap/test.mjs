import { hashmap } from "./hashmap.mjs";

// Initialize the hashmap
const map = hashmap();

map.set("apple", "red");
map.set("banana", "yellow");
map.set("carrot", "orange");
map.set("dog", "brown");
map.set("elephant", "gray");
map.set("frog", "green");
map.set("grape", "purple");
map.set("hat", "black");
map.set("ice cream", "white");
map.set("jacket", "blue");
map.set("kite", "pink");
map.set("lion", "golden");

// Set key-value pairs
map.set("dog", "bark"); // String key and value
map.set("cat", "meow"); // String key and value
map.set("bird", "chirp"); // String key and value
map.set(42, "answer"); // Number key, string value
map.set("person", { name: "Alice", age: 25 }); // String key, object value
map.set({ id: 1 }, "objectKey"); // Object key, string value
map.set("god", "pray"); // To test linked list collisions
console.log(map.getTable());

// Get values
console.log("Get 'dog':", map.get("dog")); // Expect: "bark"
console.log("Get 42:", map.get(42)); // Expect: "answer"
console.log("Get 'person':", map.get("person")); // Expect: { name: "Alice", age: 25 }

// Check existence
console.log("Has 'dog':", map.has("dog")); // Expect: true
console.log("Has 'bat':", map.has("bat")); // Expect: false

// Remove keys
map.remove("dog");
console.log("Has 'dog' after removal:", map.has("dog")); // Expect: false

// Length
console.log("Length:", map.length()); // Expect: Number of remaining keys

// Clear the map
map.clear();
console.log("Length after clear:", map.length()); // Expect: 0

// Get keys, values, and entries
map.set("alpha", 1);
map.set("beta", 2);
map.set("gamma", 3);

console.log("Keys:", map.keys()); // Expect: ["alpha", "beta", "gamma"]
console.log("Values:", map.values()); // Expect: [1, 2, 3]
console.log("Entries:", map.entries()); // Expect: [["alpha", 1], ["beta", 2], ["gamma", 3]]
