// console.log("helloworld");

// #start-button;
// #submit-button;


// // clock function
// function clock(


// function check() {

// }



// set variable for correct counter
// set variable for incorrect counter
// set variables for correct answers for all 5 questions using jquery val()
var correct = 0;
var incorrect = 0;
var question1 = $("input.question1").val();
var question2 = $("input.question2").val();
var question3 = $("input.question3").val();
var question4 = $("input.question4").val();
var question5 = $("input.question5").val();

var clock = $("p#clock")
var timer = 0;
var timeleft = 20;

function countDown() {
    clock.text(timeleft - timer);
    function runTimer() {
        timer++;
        clock.text(timeleft - timer);
    }
    setInterval(runTimer, 1000);
}






$("#start-button").on("click", function() {
    countDown();
});




//function to verify if the answers are correct
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
// function verifyq2() {
//     if ($("input[name=question2]:checked").val() === "THE ANSWER") {
//         correct ++;
//     } else if(question1 !== "THE ANSWER") {
//         incorrect++;
//     }
// }

    // if (question2 === "THE ANSWER") {
    //     correct++;
    // } else if(question2 !== "THE ANSWER") {
    //     incorrect++;
    // }
    // if (question3 === 8) {
    //     correct++;
    // } else if(question3 !== 8){
    //     incorrect++;
    // }
    // if (question4 === "All of the above") {
    //     correct++;
    // } else if(question4 !== "All of the above") {
    //     incorrect++;
    // }
    // if (question5 === "1st") {
    //     correct++;
    // } else if(question5 !== "1st"){
    //     incorrect++;
    // }


// function verifyq1() {
//     if (question1 === "3") {
//         correct++;
//     } else if (question1 !== "3") {
//         incorrect++;
//     }
//     console.log(correct);
// }




//when submit-button is clicked
////call function to verify answers and tally count
////submitted div counter displays to visible 
////total number correct to be displayed in html
////total number incorrect to be dislayed in html
$("button#submit-button").on("click", function() {
    verify();
    $("p#number-correct").text(correct + " Correct");
    $("p#number-incorrect").text(incorrect + " Incorrect");
    $("#submitted").css("visibility", "visible");
})

// $("#submit-button").on("click", function() {
//     verify();
// }


// var message = ["Well done!", "Not bad", "You're better than that!"]
// var numberofquestionscorrect;
//     if (correct < 1) {
//         numberofquestionscorrect = 2;
//     }
//     if (correct < 5) {
//         numberofquestionscorrect = 1;
//     }
//     if (correct > 4) {
//         numberofquestionscorrect = 0;
//     }


// $("#number-correct").html(message[numberofquestionscorrect]);