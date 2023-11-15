//Add an event listener to the login form
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); //prevents the broswers default form handling so custom can be used

    //Gets the values from the username and password fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //Fetch json data and check login details
    

});