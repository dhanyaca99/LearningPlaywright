let isLoggedIn = true;
let UserRole = "editor";
//app.vwo.com -> viewer. editor or admin
//viewer -> limited view
//editor -> can edit and view
//admin -> can do all the things

if (isLoggedIn) {
    if (UserRole === "admin") {
        console.log("admin can do all the things")
    } else if (UserRole === "editor") {
        console.log("Welcome editor - edit access granted");
    } else if (UserRole === "viewer") {
        console.log("welcome viewer - Read-only access");
    } else {
        console.log("No idea which role you are !");
    }
} else {
    console.log("user is not logged in!");
}