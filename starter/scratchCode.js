




console.log('value of start:', startQButton); 
console.log(timeSpan);
console.log(submitButton);
console.log(initialsText);
console.log(finalScore);


// Randomly picks a questionfrom Questions array
function randomQuestions() {
    chosenQues = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    console.log(chosenQues);
  }



/*
// Start of Quiz - kick-off timer, display question
startQButton.addEventListener("click", function(event) {
    setTimer();
   // randomQuestions();
})
*/
/*
function init() { 
    
}
*/

/* 
var ptag;
    var p = document.createElement(ptag);
    p.textContent = "randomQuestions";
    document.body.appendChild(p);
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
  
