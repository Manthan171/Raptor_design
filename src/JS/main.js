function toggleButton() {
    var x = document.getElementsByClassName("nav-list-items")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}