function myFunction() {
    let x = document.getElementsByClassName("topnav");
    if(x.className === "nav-list-items"){
        x.className += " responsive";
    } else {
        x.className += "nav-list-items";
    }
}