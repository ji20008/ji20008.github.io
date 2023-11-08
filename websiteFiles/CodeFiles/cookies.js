//Function to set the "username" cookie
function setCookie(){
    const username = document.getElementById("username").value;
    //set a cookie with the collected username, with attributes
    document.cookie = `username=${username}; expires = Fri, 5 Jul 2024 23:59:59 GMT; path=/`;
    alert("Username cookie set!");

}

//Function to retrieve the value of a cookie by its name
function getCookie(name){
    const cookies = document.cookie.split('; ');
    for (let i=0; i<cookies.length; i++){
        const cookie = cookies[i].split('=');
        if (cookie[0] === name){
            return cookie[1];
        }
    }
    return null;//cookie not found
}

//Function to get then display the username on the webpage
function display(){
    const username = getCookie("username");
    if(username){
        document.getElementById("usernameDisplay").textContent = "Username: "+ username;
    }else{
        document.getElementById("usernameDisplay").textContent = "Username cookie not found"
    }
}