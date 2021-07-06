let buttonColours = ['red','green','yellow','blue'];
let gamePattern = [];
let level = 0;

//Making Sound Function
  export let playSound = (name) => {
            let sound = new Audio(`sounds/${name}.mp3`);
            sound.play();
}

//Button Animation Function
  export let  animatePress =(currentColor) =>  {
            $(`#${currentColor}`).addClass("pressed");
            setTimeout(() => {
            $(`#${currentColor}`).removeClass("pressed") ;
            }, 100);
}







































