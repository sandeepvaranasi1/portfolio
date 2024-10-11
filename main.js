function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className.includes("responsive")) {
        x.className = x.className.replace(" responsive", "");
    } else {
        x.className += " responsive";
    }
}
