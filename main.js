function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive"; // Add the responsive class
  } else {
      x.className = "topnav"; // Remove the responsive class
  }
}
