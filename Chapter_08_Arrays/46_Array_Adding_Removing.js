let arr = [1, 2, 3];

//ADD to end
arr.push(4);
console.log(arr);

//Remove from END
arr.pop();
console.log(arr);

//ADD at Begining
arr.unshift(0);
console.log(arr);

//Remove from Begining
arr.shift();
console.log(arr);

//splice(start, deletecount, ..itemsToAdd)
//removes elements from an arrat and if necessary inserts new elements in their place,
//returing the deleted elements
arr.splice(2, 1); //removes 1 item at index 2
console.log(arr);

arr.splice(2, 0, 99); //removes 0 item at index 2 but add 99 at index 2
console.log(arr);

arr.splice(1, 2, 10, 20);
console.log(arr);
