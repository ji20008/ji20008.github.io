//Function to set the "username" cookie
function setCookie(){
    const username = document.getElementById("username").value;
    //set a cookie with the collected username, with attributes
    document.cookie = 'username=${username}; expires = Fri, 5 Jul 2024 23:59:59 GMT; path=/';
    alert("Username cookie set!");

}