if(localStorage){//check if local storage object exists
    function savewb(){//store data
        var txt = document.getElementById('sName').value;
        localStorage.setItem("name",txt);
        alert ("Your name is saved");
    }
    function accesswb(){//retrieve data
        alert("Hi, "+ localStorage.getItem("name"));
    }
}else {
    alert("Sorry your browser does not support local storage");
}