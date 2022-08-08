let sounds = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "crash",
  k: "kick-bass",
  l: "snare",
};

//   let audio = new Audio("sounds/" + sounds.instrument + ".mp3");
//   audio.play();

for (i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let instrument = this.innerText;
    playSound(instrument);
    buttonAnimation(instrument);
  });
}

document.addEventListener("keydown", function (keyPress) {
  playSound(keyPress.key);
  buttonAnimation(keyPress.key);
});


function playSound(key){
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(instrument);
      break;
  }
}

function buttonAnimation(currentKey){
  let pressedKey = document.querySelector("." + currentKey);
  pressedKey.classList.add("pressed");
  setTimeout(function(){
    pressedKey.classList.remove("pressed")
  },100);
}