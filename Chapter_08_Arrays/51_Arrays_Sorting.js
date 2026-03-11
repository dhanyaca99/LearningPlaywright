//sorting

let fruits = ["banana", "cherry", "apple"];
    fruits.sort();
    console.log(fruits);

let a = [1, 10, 2, 21];
a.sort((a,b)=> a - b); //Assending
console.log(a);
a.sort((a,b)=> b - a); // Dessending
console.log(a);