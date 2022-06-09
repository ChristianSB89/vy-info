let numberOfButtons = document.querySelectorAll(".button").length;

for (let j = 0; j < numberOfButtons; j++) {
  document
    .querySelectorAll(".qwerty")
    [j].addEventListener("click", function () {
      let buttonStyle = this.innerHTML
      sound(buttonStyle)
      animation(buttonStyle)
    })
}

document.addEventListener("keypress", function (event) {
  sound(event.key)
  animation(event.key)
})

function sound(key) {
  switch (key) {
    case "e":
      const crash1 = new Audio("sounds/crash1.mp3")
      crash1.play()
      break

    case "r":
      const crash2 = new Audio("sounds/crash2.mp3")
      crash2.play()
      break

    case "t":
      const crash3 = new Audio("sounds/crash3.mp3")
      crash3.play()
      break

    case "y":
      const crash4 = new Audio("sounds/crash4.mp3")
      crash4.play()
      break

    case "u":
      const rideBody = new Audio("sounds/ride-body.mp3")
      rideBody.play()
      break

    case "i":
      const rideBell = new Audio("sounds/ride-bell.mp3")
      rideBell.play()
      break

    case "g":
      const kick = new Audio("sounds/kick.mp3")
      kick.play()
      break
      
    case "l":
      const hihatOpen = new Audio("sounds/hihat-open.mp3")
      hihatOpen.play()
      break
        
    case "f":
      const snare = new Audio("sounds/snare.mp3")
      snare.play()
      break

    case "k":
      const hihatChick = new Audio("sounds/hihat-chick.mp3")
      hihatChick.play()
      break
    
    case "j":
      const hihatClosed = new Audio("sounds/hihat-closed.mp3")
      hihatClosed.play()
      break

    case "x":
      const tom1 = new Audio("sounds/tom1.mp3")
      tom1.play()
      break

    case "c":
      const tom2 = new Audio("sounds/tom2.mp3")
      tom2.play()
      break
    
    case "v":
      const tom3 = new Audio("sounds/tom3.mp3")
      tom3.play()
      break
      
    case "b":
      const tom4 = new Audio("sounds/tom4.mp3")
      tom4.play()
      break

    case "n":
      const tom5 = new Audio("sounds/tom5.mp3")
      tom5.play()
      break
  }
}

function animation(currentKey) {
  let activeButton = document.querySelector("#" + currentKey);
  activeButton.classList.add("playing");
  setTimeout(function () {
    activeButton.classList.remove("playing");
  }, 100);
}

