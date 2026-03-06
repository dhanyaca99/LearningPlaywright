//Test Case Result Counter
//After a test suite runs, you receive an array of test results 
// (strings: "pass", "fail", "skip"). 
// Write a JavaScript program using a for loop that counts how many 
// tests passed, failed, and were skipped. 
// Print a test report with total tests, counts, 
// pass rate percentage, and a verdict (all passed → ready for release,
//  ≤2 failures → review, >2 failures → block release).

//INPUT: testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

//output: Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.

const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passed = 0;
let failed = 0;
let skipped = 0;

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passed++;
    } else if (testResults[i] === "fail") {
        failed++;
    } else if (testResults[i] === "skip") {
        skipped++;
    }
}

const total = testResults.length;
const passRate = ((passed / total) * 100).toFixed(2);

let verdict;
if (failed === 0) {
    verdict = "All tests passed. Ready for release.";
} else if (failed <= 2) {
    verdict = "Minor failures. Review before release.";
} else {
    verdict = "Too many failures. Block release.";
}

console.log("Total Tests : " + total);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
console.log("Skipped: " + skipped);
console.log("Pass Rate: " + passRate + "%");
console.log("VERDICT: " + verdict);

