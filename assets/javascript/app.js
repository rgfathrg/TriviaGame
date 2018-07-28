$(document).ready(function() {

var intervalId;
var number = 50;
var correctAnswers = 0;
var questionAnswered = false;

$("#begin").on("click", run);

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}


function decrement () {
    number--;
    $("#counter").text(" " + number);
    if (number === 0){
        stop();
        alert("Time Up!");
    }
}

$(".qOne").on("click", function() {
   if($(this).val() === "titan") {
       correctAnswers++;
       console.log(correctAnswers);
   }
});

$(".qTwo").on("click", function() {
    if($(this).val() === "hydrogen") {
        correctAnswers++;
        console.log(correctAnswers);
    }
 });

 $(".qThree").on("click", function() {
    if($(this).val() === "neptune") {
        correctAnswers++;
        console.log(correctAnswers);
    }
 });

function stop() {
  clearInterval(intervalId);
}
  




});