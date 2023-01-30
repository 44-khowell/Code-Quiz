




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
  // ANSWERS - QU 1 
  if (element.target !== element.currentTarget && text === '1. 1996') {
    // Set variable as result of choice to function
    
    let action = false;
    // Display Choice result
    loseGuess(action);
    console.log('found it : Qu1 ', element.target.nodeName);
  } else if ((element.target !== element.currentTarget && text === '2. 2000')) {
    let action = false;
    loseGuess(action);
    console.log('found it : Qu2 ', element.target.nodeName);
  } else if ((element.target !== element.currentTarget && text === '3. 1995')) {
    console.log('Qu 1: Correct Guess 1995');
    console.log('text before is: ', text);
    // Set action value to be passed to function winGuess to O/P result 
    let action = true;
    text = "";
    console.log('text after cleared is: ', text);
    winGuess(action);
    console.log('found it** : Qu3 ', element.target.nodeName, element.currentTarget, text);
  } else if ((element.target !== element.currentTarget && text === '4. 2011')) {
    let action = false;
    loseGuess(action);
    console.log('found it : Qu4 ', element.target.nodeName);
  }
  */

/*
  // Target <p> tag of button and compare its contents
  // ANSWERS - QU 1 
  if (element.target && element.target.nodeName == "P" && text == '1. 1996') {
    // Set variable as result of choice to function
    let action = false;
    // Display Choice result
    loseGuess(action);
    console.log('found it : Qu1 ', element.target.nodeName);
  } else if ((element.target && element.target.nodeName == "P" && text == '2. 2000')) {
    let action = false;
    loseGuess(action);
    console.log('found it : Qu2 ', element.target.nodeName);
  } else if ((element.target && element.target.nodeName == "P" && text == '3. 1995')) {
    console.log('Qu 1: Correct Guess 1995');
    let action = true;
    winGuess(action);
    console.log('found it : Qu3 ', element.target.nodeName);
  } else {
    let action = false;
    loseGuess(action);
    console.log('found it : Qu4 ', element.target.nodeName);
    return;
  } 
  // ANSWERS - QU 2
  if (element.target && element.target.nodeName == "P" && text == '1. Desk Applications') {
    // Set variable as result of choice to function
    let action = false;
    // Display Choice result
    loseGuess(action);
    console.log('found it : Qu1 ', element.target.nodeName);
  } else if ((element.target && element.target.nodeName == "P" && text == '2. Client Server Web Applications')) {
    console.log('Qu 1: Correct Guess - Client Server Web Applications');
    let action = true;
    winGuess(action);
    console.log('found it : Qu2 ', element.target.nodeName);
  } else if ((element.target && element.target.nodeName == "P" && text == '3. Web Servers')) {
    let action = false;
    loseGuess(action);
    console.log('found it : Qu3 ', element.target.nodeName);
  } else {
    let action = false;
    loseGuess(action);
    console.log('found it : Qu4 ', element.target.nodeName);
    return;
  }
 
  // ANSWERS - QU 3
  if (element.target && element.target.nodeName == "P" && text == '1. No') {
    // Set variable as result of choice to function
    let action = false;
    // Display Choice result
    loseGuess(action);
    console.log('found it : Qu1 ', element.target.nodeName);
  } else if ((element.target && element.target.nodeName == "P" && text == '2. Yes')) {
    let action = true;
    winGuess(action);
    console.log('found it : Qu2 ', element.target.nodeName);
    return;
  }
  // ANSWERS - QU 4 
  if (element.target && element.target.nodeName == "P" && text == '1. Sun Microsystems') {
    // Set variable as result of choice to function
    let action = false;
    // Display Choice result
    loseGuess(action);
    console.log('found it : Qu1 ', element.target.nodeName);
  } else if ((element.target && element.target.nodeName == "P" && text == '2. Oracle')) {
    let action = true;
    winGuess(action);
    console.log('found it : Qu2 ', element.target.nodeName);
  } else if ((element.target && element.target.nodeName == "P" && text == '3. Google')) {
    let action = false;
    loseGuess(action);
    console.log('found it : Qu3 ', element.target.nodeName);
  } else {
    let action = false;
    loseGuess(action);
    console.log('found it : Qu4 ', element.target.nodeName);
    return;
  }
  // ANSWERS - QU 5 
  if (element.target && element.target.nodeName == "P" && text == '1. Complied') {
    // Set variable as result of choice to function
    let action = false;
    // Display Choice result
    loseGuess(action);
    console.log('found it : Qu1 ', element.target.nodeName);
  } else if ((element.target && element.target.nodeName == "P" && text == '2. Interpreted')) {
    let action = true;
    winGuess(action);
    console.log('found it : Qu2 ', element.target.nodeName);
    return;
  }
  */
//});










/*
// ********  Updated Code: 30Jan 2023 *******
function getAnswers(element) {
  // e.target is the click element!
  // If it was a <p> tag 
  console.log('target: ',element.target);
  console.log('nodeName: ', element.target.nodeName);
  console.log('currentTarget', element.currentTarget);
  // Grab text inside <p> tag for testing 
  let text = element.target.innerHTML;
  console.log('text is: ', text);
  
  // De-coding of ANSWERS to questions
  // Save the question being pointed to in the Questions Object array in a varaible 
  let question = questions[questionNumber];
  console.log('question array is: ', question);
  // Compare the Answer property of the Questions Object to index of selected choiceAns
  if (question.Answer == question.choiceAns.indexOf(text)) {
    // Set variable as result of choice for function winGuess() 
    let action = true;
    winGuess(action);
  } else { 
    // Set variable as result of choice for function loseGuess() 
    let action = false;
    loseGuess(action);
  }

 console.log(question.Answer,question.choiceAns.indexOf(text));
    return;
}
*/



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
  
