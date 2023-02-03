

// Code for getting and display scores from local storage

// Declare variable for targeted id highscores in hs.html
const highScore = document.getElementById('highscores');
const clearBtn = document.getElementById('clear');

// Get Initials and Scores from Local Storage 
let initials = window.localStorage.getItem("initials") || [];
let scores = JSON.parse(window.localStorage.getItem("highscores")) || [];


// De-finding Function to display final score and Initials 
function displayHighScores() {
    // Loop thro each score and initial 
    scores.forEach( function(userScore) {
        let liTag = document.createElement('li');                               // Created an element for <li> tag 
        liTag.textContent = userScore.initials + ' - ' + userScore.score;       // Adding text ti <li> tag 

        highScore.appendChild(liTag);                                           // Now appending the <li> to the Body 
    }); 
  //  Object.values(initials);                                                   
    console.log(Object.values(initials));
}

// Call function DisplayHighSocores
displayHighScores();

// *****************   LISTENER  *****************
// Listen for Button selection to clear All answers
clearBtn.addEventListener("click", function() {
    // Clear the scores from local storage  
    localStorage.clear();
    // Now refresh the current window to reflect change
    window.location.reload();
}); 

