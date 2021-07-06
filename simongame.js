let buttonColours = ['red','green','yellow','blue'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

import * as mainObject from "./game.js";


$(document).keypress(function () {
    if(!started) {
        $("#level-title").text(`Level ${level}`);
        nextSequence();
        started  = true;
    }
})

//User Clicked 
$(".btn").click(function (){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    mainObject.playSound(userChosenColor);
    mainObject.animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1)
})



function checkAnswer (currentLevel) {

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {    
                nextSequence();   
            },1000) 
        }
    }else{
        let wrong = new Audio("./sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function () {
        $("body").removeClass("game-over");
        },200)

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    }



let nextSequence = () => {
    userClickedPattern = [];


  $("h1").text("Level " + level);
  level++;
  
  let randomNumber = Math.floor(Math.random() * 4) ;
  let randomChosenColors = buttonColours[randomNumber];
  gamePattern.push(randomChosenColors);
  //Selecting Button same id with random Chosen Colours
  $(`#${randomChosenColors}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  //Play Sound
  mainObject.playSound(randomChosenColors);

}

function startOver () {
    level = 0;
    gamePattern = [];
    started = false;
}