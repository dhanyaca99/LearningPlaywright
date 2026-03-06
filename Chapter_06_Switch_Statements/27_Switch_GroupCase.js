let browser = "Edge"

switch (browser) {
    case "Chrome" :
    case "Edge" :
    case "Brave" :
    case "Opera" :
        console.log("chromium project!");
        break;
    case "Firefox" :
        console.log("Mozilla Project!");
        break;
    case "Safari" :
        console.log("Apple browser - uses JavaScriptCore engine");
        break;
    default:
        console.log("unknown browser - manual testing needed");
}