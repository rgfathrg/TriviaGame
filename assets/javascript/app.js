//Loads document before actions run
$(document).ready(function() {

//Global variables
var intervalId;
var number = 30;
var correctAnswers = 0;
var questionAnswered = false;
var selectGif;
var show;

//Setting up API
var pullGif = "space";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=&api_key=HuGV3gRl0oqKFxJaysFFsXHirUlgKdNe";

//API ajax function
$.ajax({
    url: queryURL,
    method: "GET",
    data: {
       q: pullGif,
}

}).then(function(response) {
    var showC = response.data[4].images.fixed_height.url;
    var showW = response.data[20].images.fixed_height.url;
    console.log(response.data);
     
    var image = $("<img>");
    var imageTwo = $("<img>");
     
    image.attr("src", showC);
    imageTwo.attr("src", showW);
    
    $("#gifDisplay").append(image);
    $("#gifDisplayTwo").append(imageTwo);
     
});

//Question timer
function run() {
    number = 30;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);    
}


//Start the game, load first question, and start clock
$("#begin").on("click", function() {
    $("#questionOne").show();
    run();
    reset();
});

//Timer setup
function decrement() {
    number--;
    $("#counter").text(" " + number);
    if (number === 0){
        stop();
        alert("Time Up!");
    } 
}

//Pauses timer
function stop() {
    clearInterval(intervalId);
    
}

//Clears game stats and choices
function reset() {
    $("#results").hide();
    correctAnswers = 0;
    $(".qOne").prop("checked", false);
    $(".qTwo").prop("checked", false);
    $(".qThree").prop("checked", false);
}

//Event listener on first question
$(".qOne").on("click", function() {
    $("#questionOne").hide();
    stop();
    questionAnswered = true;
    if($(this).val() === "titan") {
       correctAnswers++;
       $("#gifDisplay").show();
       $("#text").text("You're blasting off!")
       setTimeout(function() {
           $("#gifDisplay").hide();
       }, 5000);      
   }
   else {
       $("#gifDisplayTwo").show();
       $("#textTwo").text("If a dog barks in space does the mail man know?")
       setTimeout(function() {
            $("#gifDisplayTwo").hide();
        }, 5000);  
    }
    setTimeout(function() {
        if (questionAnswered === true) {
            $("#questionTwo").show();
            questionAnswered = false;
            run();
        }
    }, 5000);
  
});

//Event listener on second question
$(".qTwo").on("click", function() {
   $("#questionTwo").hide();
   stop();
   questionAnswered = true;
   if($(this).val() === "hydrogen") {
       correctAnswers++;
       $("#gifDisplay").show();
       $("#text").text("You're blasting off!")
       setTimeout(function() {
            $("#gifDisplay").hide();
       }, 5000);      
    }
    else {
       $("#gifDisplayTwo").show();
       $("#textTwo").text("Woofed on that one!")
       setTimeout(function() {
            $("#gifDisplayTwo").hide();
        }, 5000);  
  }
  setTimeout(function() {
        if (questionAnswered === true) {
            $("#questionThree").show();
            questionAnswered = false;
            run();
        }
    }, 5000);
  
 });

 //Event listener on third question
 $(".qThree").on("click", function() {
    $("#questionThree").hide();
    stop();
    questionAnswered = true;
    if($(this).val() === "neptune") {
        correctAnswers++;
        $("#gifDisplay").show();
        $("#text").text("You're blasting off!")
        setTimeout(function() {
            $("#gifDisplay").hide();
        }, 5000);      
    }
    else {
        $("#gifDisplayTwo").show();
        $("#textTwo").text("Don't get lost now, there are no pitstops out there!")
        setTimeout(function() {
            $("#gifDisplayTwo").hide();
        }, 5000);  
    }
    setTimeout(function() {
     if (questionAnswered === true) {
         $("#results").show();
         questionAnswered = false;
         $("#display").text("You managed " + correctAnswers + " out of 3 correct answers.");
     }
   }, 5000);
   
 });
});