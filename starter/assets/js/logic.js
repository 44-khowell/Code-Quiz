

var startQButton = document.querySelector("#start");
var timeSpan = document.querySelector("#time");
var submitButton = document.querySelector("#submit");
var initialsText = document.querySelector("#initials");
var finalScore = document.querySelector("#final-score");



// Variables for Highscore 
var highScore = localStorage.getItem("highScore"); 
// localStorage.setItem("finalScore", );



console.log(startQButton); 
console.log(timeSpan);
console.log(submitButton);
console.log(initialsText);
console.log(finalScore);


// Questions Arrays 
var question1 = ["When was Java released?"]; 
var question2 = ["What is the most common application of Java?"];
var question3 = ["Is Java a OOP Language?"];
var question4 = ["Who owns Java?"];
var question5 = ["Is Java a Compiled or Interpreted language?"];

// Question selection array 
var questionsArray = [question1, question2, question3, question4, question5]; 
console.log(questionsArray);



// SetTimer variable for function setTimer()
var secondsLeft = 15;

function setTimer() {
    // Set interval in variable 
    var timerInterval = setInterval(function () {

        secondsLeft--;
        //console.log('calc:',timeSpan + secondsLeft);
        
        // display current time 
        timeSpan.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of the action at set interval 
            clearInterval(timerInterval);
            // Calls function to display current time 
            //sendMessage();
        }

    }, 1000);
}




// Randomly picks a questionfrom QUestions array
  function randomQuestions() {
    chosenQues = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    console.log(chosenQues);
  }


// Start of Quiz - kick-off timer, display question
startQButton.addEventListener("click", function(event) {
    setTimer();
    randomQuestions();
})

/*
function init() { 
    
}
*/


/*
// These functions are used by init
function getLastUserResult() {
  var storedHighscore = localStorage.getItem("lastScore");
  // If stored value doesn't exist, set counter to 0
  if (storedHighscore === null) {
    timeCounter = 0;
  } 
    //Render current time to page
    timeSpan.textContent = timeCounter;
}

*/





// These functions are used by init
function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
  }
  
