function hehe() {
  document.removeEventListener("click", hehe, null);
  let e = new Audio("audio.mp3");
  e.loop = !0;
  e.play();
}
document.addEventListener("click", hehe);
let typur = document.getElementById("typur"),
  typewriter = new Typewriter(typur, {
    loop: !0,
  });
typewriter
  .typeString("text1")
  .pauseFor(1e3)
  .deleteAll()
  .typeString("tex2")
  .pauseFor(1e3)
  .deleteAll()
  .typeString("text3")
  .pauseFor(1e3)
  .deleteAll()
  .typeString("text4")
  .pauseFor(1e3)
  .start();
