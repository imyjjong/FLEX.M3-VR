const mySound = document.getElementById('js--sound');
const sound = mySound.querySelector('a-sound');
    
mySound.onclick = function(){
    sound.components.sound.playSound();
  }