var i = 0;
var txt = "My name is Brian D. Weber.  As a full stack software developer, I would be happy to talk to you about ways in which I can contribute to your goals.  Feel free to take a look at the projects portfolio";
var speed = 25; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
