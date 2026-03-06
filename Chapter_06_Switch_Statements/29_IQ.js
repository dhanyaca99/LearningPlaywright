let testScore = 85;
 
switch (true) {
    case (testScore >= 95):
     console.log("outstanding - Top performer");
     break;
    case (testScore >= 85):
     console.log("Excellent - Above expectations");
     break;
    case (testScore >= 70):
     console.log("Good - Meet expectations");
     break;
    case (testScore >= 50):
    console.log("Needs Improvement");
    break;
    default:
        console.log("Unsatisfactory - Requires training");
}
