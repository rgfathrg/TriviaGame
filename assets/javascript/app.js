$(document).ready(function() {

var intervalId;
var number = 50;
var correctAnswers = 0;
var questionAnswered = false;
var qOneAnswers = ["Titan", "Rhea", "Enceladus", "Mimas"];
var qTwoAnswers = ["Nitrogen", "Helium", "Hydrogen", "Carbon"];

$("#begin").on("click", run);

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  $("#questionOne").show();
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
   $("#questionOne").hide();
   $("#questionTwo").show();
   if($(this).val() === "titan") {
       correctAnswers++;
       console.log(correctAnswers);
   }
});

$(".qTwo").on("click", function() {
    $("#questionTwo").hide();
    $("#questionThree").show();
    if($(this).val() === "hydrogen") {
        correctAnswers++;
        console.log(correctAnswers);
    }
 });

 $(".qThree").on("click", function() {
    $("#questionThree").hide();

    $("#results").show();
    if($(this).val() === "neptune") {
        correctAnswers++;
        console.log(correctAnswers);
    }
 });

function stop() {
  clearInterval(intervalId);
}
  




});