function showData(){
    let name = localStorage.getItem("name");
    document.getElementById("name").innerHTML = name;

    let email = localStorage.getItem("email");
    document.getElementById("email").innerHTML = email;
}

showData();