let fruit = "Banana";

//BUG: Missing break statement
switch (fruit) {
    case "apple":
        console.log("Apple Selected");
        break;
    case "Banana":
        console.log("banana Selected");
    case "cherry":
        console.log("cherry Selected");
    case "date":
        console.log("date Selected");
    default:
        console.log("default reached");
}