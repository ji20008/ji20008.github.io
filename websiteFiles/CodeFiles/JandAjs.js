//Add an event listener to the login form
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); //prevents the broswers default form handling so custom can be used

    //Gets the values from the username and password fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //Fetch json data and check login details
    fetch("JandAusers.json")
        .then((response) => response.json())
        .then((data) => {
        
            //Extract the array of users from the json data
            const users = data.users;

            //Find a user that matches the entered details
            const user = users.find((u) => u.username === username && u.password === password);

            //Display a message based on the login result
            if(user){
                alert("Login successful!");
            }else{
                alert("Invalid username or password");
            }
        })
        .catch((error)=>{
            //Log an error if theres an issue fetching the json data
            console.error("Error fetching data: ",error);
        });
});

//function to display a json string from an javascript object when called
function jstring(){
    //create a person object
    const person ={
        name : "Jezza",
        age: 20
    };

    //Converrt the object to a json string
    const jsonString = JSON.stringify(person);

    //display the string
    alert (jsonString)
};