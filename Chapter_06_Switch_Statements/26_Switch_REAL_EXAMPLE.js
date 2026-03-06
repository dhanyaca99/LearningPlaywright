//response code - 200, 201, 404

let responsecode = 404;

switch (responsecode) {
    case 200:
        console.log("200 ok");
        break;
    case 404:
        console.log("404 not found");
        break;
    default:
        console.log("not status code match");
}