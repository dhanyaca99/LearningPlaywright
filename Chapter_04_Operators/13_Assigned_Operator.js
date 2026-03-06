let a=10, b=20;
console.log(a);
console.log(b);

//Arthmetic operators
let sum=a+b;
let difference=a-b;
let product=a*b;
let quotient=a/b;
let modulus=a%b;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(modulus);

console.log(2 ** 3); //Exponentiation operator
console.log(a ** b); //Exponentiation operator

//Assignment operators
let c=a;
c = c + 5; //c+=5
console.log(c);
c = c - 3; //c-=3
console.log(c);
c = c * 2;  //c*=2
console.log(c);
c = c / 4;  //c/=4
console.log(c);
c = c % 3;  //c%=3
console.log(c);
c = c ** 2; //c**=2
console.log(c);

//Comparison operators
console.log(a == b);    //Equal to operator
console.log(a != b);    //Not equal to operator
console.log(a > b);    //Greater than operator      
console.log(a < b);    //Less than operator

//Logical operators
console.log(a > 5 && b > 15);   //Logical AND operator
console.log(a > 15 || b > 15);  //Logical OR operator
console.log(!(a > 5));            //Logical NOT operator

//String concatenation operator
let first_name = "John";
let last_name = "Doe";
let full_name = first_name + " " + last_name;
console.log(full_name);

//Ternary operator
let age = 25;
let is_adult = (age >= 18) ? "Yes" : "No";
console.log(is_adult);

//Typeof operator
console.log(typeof a); //number
console.log(typeof first_name); //string
console.log(typeof is_adult); //string 
console.log(typeof 3.14); //number
console.log(typeof true); //boolean
console.log(typeof null); //object (this is a quirk in JavaScript, null is considered an object)
console.log(typeof undefined); //undefined 

console.log(2 **3 ); //Expontial a^b
