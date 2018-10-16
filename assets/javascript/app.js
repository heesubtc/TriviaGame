// console.log("hello");

// VARS
var correct = 0;
var incorrect = 0;
var clock = $("p#clock")
var timer = 0;
var timeleft = 9;

// HIDE QUESTIONS AT STARTUP
$("#questionaire").hide();

// PLAY GAME BUTTON THAT CALLS CLOCK COUNTDOWN FUNCTION
$("#start-button").on("click", function() {
    $("#questionaire").show();
    $("h1#jumbo").text("Totally Random Trivia!");
    $("h3#number-correct").empty();       
    $("h3#number-incorrect").empty();
    correct = 0;
    incorrect = 0;
    $("h3#giphy").css("visibility", "hidden");
    // RESET RADIO BUTTONS WHEN CLICKED
    $("input[type='radio']").prop("checked", false);
    countDown();
});

// FUNCTION TO COUNT DOWN CLOCK FROM 10 SECS
function countDown() {
    clock.text(timeleft - timer);
    function runTimer() {
        timer++;
        clock.text(timeleft - timer);
        if (timer === timeleft) {
            clearInterval(interval); 
            $("h1#jumbo").empty();
            $("h1#jumbo").text("Times Up!");
            timeleft += 9; 
            $("#questionaire").hide();     
        }
    }
    var interval = setInterval(runTimer, 1000);
}

// VARS FOR QUESTION ANSWERS
var question1 = $("input.question1").val();
var question2 = $("input.question2").val();
var question3 = $("input.question3").val();
var question4 = $("input.question4").val();
var question5 = $("input.question5").val();

// FUNCTION TO CHECK IF ANSWERS ARE CORRECT AND KEEP TALLY
function verify() {
    if ($("input[name=question1]:checked").val() === "3") {
        correct ++;
    } else if (question1 !== 3) {
        incorrect++;
    }
    if ($("input[name=question2]:checked").val() === "THE ANSWER") {
        correct ++;
    } else if (question1 !== "THE ANSWER") {
        incorrect++;
    }
    if ($("input[name=question3]:checked").val() === "8") {
        correct ++;
    } else if (question1 !== "8") {
        incorrect++;
    }
    if ($("input[name=question4]:checked").val() === "All of the above") {
        correct ++;
    } else if (question1 !== "All of the above") {
        incorrect++;
    }
    if ($("input[name=question5]:checked").val() === "1st") {
        correct ++;
    } else if (question1 !== "1st") {
        incorrect++;
    }    
}

// DISPLAYS PICTURE IF PERFECT SCORE
function display() {
    if (incorrect === 0) {
    $("h3#giphy").css("visibility", "visible")
    }
}

// SUBMIT BUTTON CALL VERIFY FUNCTION AND DISPLAY SCORE
// CALL PICTURE DISPLAY FUNCTION
$("button#submit-button").on("click", function() {          
    verify();                                               
    $("h3#number-correct").text(correct + " Correct");       
    $("h3#number-incorrect").text(incorrect + " Incorrect"); 
    $("#submitted").css("visibility", "visible");             
    $("#questionaire").hide();
    display();
})


