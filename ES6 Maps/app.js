// Mapler - Key(Anahtar) - Value(Değer)

// let myMap = new Map(); // Oluşturma

// console.log(typeof myMap);

// const key1 = "Mustafa";
// const key2 = {a:10,b:20};
// const key3 = () => 2;
// // Set
// myMap.set(key1,"String Değer");
// myMap.set(key2,"Object Literal Değer");
// myMap.set(key3,"Function Değer");

// Get 

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));


// console.log(myMap);

// Map Boyutu

// console.log(myMap.size);

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

// For Each

// cities.forEach(function(Value,key){
//     console.log(key,Value);
// })

// For Of 

// for(let [key,Value] of cities){ //Destructing
//     console.log(key,Value);

// }

// Map Keys

// for(let key of cities.keys()){
//     console.log(key);
// }

// Map Values 

// for (let Value of cities.values()){
//     console.log(value);
// }

//  Arraylerden Map Oluşturma
// const array = [["key1","value1"],["key2","value2"]];

// const lastMap = new Map(array);

// console.log(lastMap);

// Maplerden Array Oluşturma

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

const array = Array.from(cities);
// [["Ankara",5],["İstanbul",15],["İzmir",4]]
console.log(array);
