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

function savewb2() {
    var key = document.getElementById("sKey").value;
    if ( key != "" )
        sessionStorage[key] = document.getElementById("sValue").value;
}
function accesswb2() {
    var s = "";
    for (var i=0; i<sessionStorage.length; i++) {
        var key = sessionStorage.key(i);
        s += key + " = " + sessionStorage.getItem(key) + "\n";
    }
    alert( s );
}
function clearwb() {
    sessionStorage.clear();
}