let statuscode = 401;

switch (statuscode) {
    case 200:
            console.log("statuscode = 200 Result : PASS - OK: Request successful");
        break;
    case 201:
        console.log("statuscode = 201 Result : PASS - Created: Resource created successfully");
        break;
    case 301:
        console.log("statuscode = 301 Result : WARNING - Moved Permanently: URL has changed");
        break;
    case 400:
        console.log("statuscode = 400 Result : FAIL - Bad Request: Check request payload");
        break;
    case 401:
        console.log("statuscode = 401 Result : FAIL - Unauthorized: Check auth token");
        break;
    case 403:
        console.log("statuscode = 403 Result : FAIL - Forbidden: Insufficient permissions");
        break;
    case 404:
        console.log("statuscode = 404 Result : FAIL - Not Found: Check endpoint URL");
        break;
    case 500:
        console.log("statuscode = 500 Result : FAIL - Internal Server Error: Backend issue");
        break;
 default:
    console.log("UNKNOWN - Unhandled status code");
}