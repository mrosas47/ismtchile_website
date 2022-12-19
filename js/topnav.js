function myFunction() {
    var x = document.getElementById("bar");
    if (x.className === "bar") {
      x.className += " responsive";
    } else {
      x.className = "bar";
    }
}
