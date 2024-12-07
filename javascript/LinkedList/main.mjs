import { linkedList } from "./linkedList.mjs";

let list = linkedList("Apple");

console.log(list.toString()); // {value: "Apple", next: null}

list.append(2); // {value: "Apple", next: {value: 2, next: null}}
list.append("Orange");  // {value: "Apple", next: {value: 2, next: {value: "Orange", next: null}}}

console.log(list.size()); //3

list.prepend("Cherry");  // {value: "Cherry", next: {value: "Apple", next: {value: 2, next: {value: "Orange", next: null}}}}

console.log(list.at(3)); // {value: 2, next: {value: "Orange", next: null}}
console.log(list.find("Orange")); //4;

console.log(list.size()); //4;

list.insertAt("Mango", 2) //{"value":"Cherry","next":{"value":"Mango","next":{"value":"Apple","next":{"value":2,"next":{"value":"Orange","next":null}}}}

list.pop(); //{"value":"Cherry","next":{"value":"Mango","next":{"value":"Apple","next":{"value":2,"next":null}}}}

list.removeAt(4); //{"value":"Cherry","next":{"value":"Mango","next":{"value":"Apple","next":null}}}

console.log(list.size()); //3

console.log(list.head()); //{"value":"Cherry","next":{"value":"Mango","next":{"value":"Apple","next":null}}}

console.log(list.tail()); //{"value":"Apple","next":null}

console.log(list.contain("Cherry")); //true 

console.log(list.contain("orange")); //false

console.log(list.at(2)); //{"value":"Mango","next":{"value":"Apple","next":null}}

console.log(list.find("Apple")); //3

console.log(list.find("orange")); //-1

let myList = list.getList();

console.log(myList);


console.log(list.toString());