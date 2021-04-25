var i = 0;
var txt = 'Superman'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    console.log("FN called")
  if (i < txt.length) {
    document.getElementById("super-font").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var abt=document.querySelector("clicked",)