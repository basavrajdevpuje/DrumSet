
//================== button Press ==========================
var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick()
{
  // "this" is an identity of the button on which the event is triggered.
  // Use "Switch" to set sound on each button
  // Audio is the constructor function like
  /*
    function Audio(fileLocation)
    {
      this.fileLocation = fileLocation;
      this.play = play;
    }
    var audio = new Audio(fileLoacation);
    audio.play();
  */
  // We want to get the innerHTML of each button


  var buttonInnerHtml = this.innerHTML;

  playSound(buttonInnerHtml); // passing that key by using buttonClick

}

//================= Keyboard key press ========================

document.addEventListener("keypress", function(event){
  /*once the event happens, the element will trigger the function
  When that function is triggered, there is a possibility to pass an argument
  "event". (event) will let us know about the event that has triggered the Event Listener
  If we press any key the we will get
  KeyboardEvent {isTrusted: true, key: "e", code: "KeyE", location: 0, ctrlKey: false, …}*/
playSound(event.key); // passing that key by using KeyboardEvent (key press)
});

function playSound(key)
{
  switch(key)
  {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "l":
        var kick = new Audio("sounds/kick-bass.mp3")
        kick.play();
        break;

    default:
    console.log("Please select the correct instrument");
  }
}
