function tocal(){
    window.location = "calhub.html"
}
function tochat(){
    window.location = "chathub.html"
}
function todraw(){
    window.location = "scrible.html"
}
function logout(){
    localStorage.removeItem("User-name");
    window.location="login.html";
}