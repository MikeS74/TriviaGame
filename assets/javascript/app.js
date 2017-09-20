// Initial hidden elements
$(document).ready(function() {
    $(".end-result").hide();
    $(".quiz-container").hide();
});
// Displays results and stops timer at end of quiz
function endResult() {
    clearInterval(counter);
    answerTally();
    $(".quiz-container").hide();
    $("h3").hide();
    $(".end-result").show().html("<p>ALL DONE!</p>" + 
        "<br>" + "<p>CORRECT ANSWERS: " + answeredRight + 
        "</p>" + "<p>INCORRECT ANSWERS: " + answeredWrong + 
        "</p>" + "<p>UNANSWERED: " + unanswered + "</p>");
    return;
}
// Start Screen click function that starts quiz
$("#start-game").on("click", function() {
    $(".quiz-container").show();
    $("#start-game").hide();
    $("#countdownDisp").html("45 Seconds");
    sec = 45;
});
// Timer variables and function
var sec = 45;
var counter = setInterval(timer, 1000);

function timer() {
    sec = sec - 1;
    $("#countdownDisp").html(sec + " Seconds");
    if (sec < 0) {
        endResult();
    }
}
// Tallies all the trivia answers
var answeredRight = 0;
var answeredWrong = 0;
var unanswered = 6;

function answerTally() {
    if ($('.correct-1').is(':checked')) {
        answeredRight++;
        unanswered -= 1;
    }
    if ($('.wrong-1').is(':checked')) {
        answeredWrong++;
        unanswered -= 1;
    }
    if ($('.correct-2').is(':checked')) {
        answeredRight++;
        unanswered -= 1;
    }
    if ($('.wrong-2').is(':checked')) {
        answeredWrong++;
        unanswered -= 1;
    }
    if ($('.correct-3').is(':checked')) {
        answeredRight++;
        unanswered -= 1;
    }
    if ($('.wrong-3').is(':checked')) {
        answeredWrong++;
        unanswered -= 1;
    }
    if ($('.correct-4').is(':checked')) {
        answeredRight++;
        unanswered -= 1;
    }
    if ($('.wrong-4').is(':checked')) {
        answeredWrong++;
        unanswered -= 1;
    }
    if ($('.correct-5').is(':checked')) {
        answeredRight++;
        unanswered -= 1;
    }
    if ($('.wrong-5').is(':checked')) {
        answeredWrong++;
        unanswered -= 1;
    }
    if ($('.correct-6').is(':checked')) {
        answeredRight++;
        unanswered -= 1;
    }
    if ($('.wrong-6').is(':checked')) {
        answeredWrong++;
        unanswered -= 1;
    }
}
// Click function for finish button at bottom of quiz
$("h3").on("click", function() {
    endResult();
});