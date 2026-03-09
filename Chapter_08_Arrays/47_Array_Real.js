let browser = ["chrome", "Firefox", "safari", "Opera", "Edge"];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

let removed = browser.shift();
console.log(browser);
console.log(removed);

console.log("-------------TTA--------------");

for (let i = 0; i < browser.length; i++)
{
    console.log(browser[i]);
    if (browser[i] === "Opera") {
        console.log("Opera is removed");
    }
}