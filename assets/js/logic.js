

// Variable used in Time Interval to display quiz duration in html
var timeSpan = document.querySelector("#time");

// Variable used in outputing to display the final score in html
var finalScore = document.querySelector("#final-score");


// Variables for function - startQuiz(event)
const startBtn = document.getElementById('start');
const startSection = document.getElementById('start-screen');
const questionTitle = document.getElementById('question-title');
const choiceAns = document.getElementById('choices');
const questionDiv = document.getElementById('questions');
const lineDiv = document.getElementById('line');
const endScreenDiv = document.getElementById('end-screen');
const submitBtn = document.getElementById('submit');
const highScore = document.getElementById('highscores');
const clearBtn = document.getElementById('clear');

console.log('startButton ref:', startBtn);

//const choicesBtnData = document.getElementById('choices');

// Storage Variables 
var scoreCountCorrect = localStorage.getItem('scoreCountCorrect');    // Used to get value of Scorecount 
var scoreCountWrong = localStorage.getItem('scoreCountWrong');        // Used to get value of Scorecount 

//localStorage.setItem('scoreCountCorrect',scoreCountCorrect);         // Used to set value in Localstorage              

//scoreCount++;           // Update (increase) score for each correct answer
//scoreCount--;           // Update (decrease) score for each incorrect answer



// Get player scores from the Quiz 
function renderScores() {

  scoreCountCorrect = localStorage.getItem('scoreCountCorrect');    // Used to get value of Scorecount 

  // Check if fetched storage variable is empty before displaying to page 
  if (scoreCountCorrect === null) {
    console.log('No value stored in localstorage');
  return;
  }  
  return scoreCountCorrect;
}



// **** GLOABAL Variables ****
let questionNumber = 0;                      // Initialise count for Questions Array, so that 1st question is selected
let hasWon = false;
let item;
let btn;
var timerInterval;                          // Used in setTimer() function


// Questions Object Arrays 1
const questions = [
  {
      question: "When was Java released?",
     choiceAns: ["1. 1996","2. 2000","3. 1995","4. 2011"],
        Answer: 2                               //Index of choices array
  },
  {
    question: "What is the most common application of Java?",
   choiceAns: ["1. Desk Applications","2. Client Server Web Applications","3. Web Servers","4. Scripts"],
      Answer: 1
  },
  {
    question: "Is Java a OOP Language?",
   choiceAns: ["1. No", "2. Yes"],
      Answer: 1
  },
  {
    question: "Who owns Java?",
   choiceAns: ["1. Sun Microsystems","2. Google","3. Oracle","4. Mircosoft"],
      Answer: 2
  },
  {
    question: "Is Java a Compiled or Interpreted language?",
   choiceAns: ["1. Complied","2. Interpreted"],
      Answer: 1
  },
]

//LOGGING outputs from the Object 
console.log(questions);
//console.log('Question:',questions[0].question);
//console.log('Answer:',questions[0].choiceAns[0]);
//console.log('Index:',questions[0].Answer);


function quizQuestions(arrQuestionNo, arrQuestions) {
  // If the count is zero, exit function
  if (secondsLeft === 0) {
    return;
  }

  // console.log('The value of Qu counter is: ', arrQuestionNo);
  questionTitle.textContent = arrQuestions[arrQuestionNo].question;  // Assess 1st Quest from the QuObjectArray

  // Checking how to access array size
  console.log('questions ANS array length:',arrQuestions[arrQuestionNo].choiceAns.length);
  console.log('incoming array is: ', arrQuestions);

    for (let i = 0; i < arrQuestions[arrQuestionNo].choiceAns.length; i++) {
      const answer = arrQuestions[arrQuestionNo].choiceAns[i];       // Extracting each answer in turn from the 1st array
      // console.log('each ans: ', answer);
  
      btn = document.createElement("BUTTON");     // Creating an element <button> tag
      btn.textContent = answer;                   // Let textContent be maapped into the BUTTON (so both are one)
      choices.appendChild(btn);                   //, Now append the BUTTON to the choices Listener element for BUTTON clicked    
    }
    //Output Debug check
    console.log('**** Output check ****');
    console.log('Question:',arrQuestions[arrQuestionNo].question);
    console.log('Index:',arrQuestions[arrQuestionNo].Answer);
    let index = arrQuestions[arrQuestionNo].Answer
    console.log('Answer:',arrQuestions[arrQuestionNo].choiceAns[index]);
    return;
  
   // console.log('Question counter value: ',questionNumber);
}


// ***** Quiz START *****

function startQuiz(event) {
  startSection.style.display = 'none';      // Stop displying <div> containing Coding Quiz Chal

  questionDiv.className = "";               // This removes "hide" from the class and makes our question visible
  
 // let questionNumber = 0;                   

  quizQuestions(questionNumber, questions);

  // Start Timer for question duration
  setTimer();
}
// Logging Code only
console.log('startButton o/p: ', startBtn);


function winGuess(action) {
  console.log("now in winGuess function");
   // Clear out text Result for (#line) of previous action in prep for next incoming text
  line.innerHTML = "";
  // Create dividing line for result 
  const horizLine = document.createElement('hr');
  line.appendChild(horizLine); 
  // Create paragraph for answer 
  var tag = document.createElement('p');
  var italic = document.createElement('em');
  // Test if answer is correct or wrong 
  console.log('The value of action is: ', action);
  if (action == true) {
    italic.textContent = "Correct!";
    setScoreCountCorrect();
    //Re-initialise "action" variable ready for testing Answer for the next question
    action = false;
  } 
  // Display RESULT-ANSWER in <p> tag
  line.appendChild(tag).appendChild(italic);

  // Tests if user still has time to answer more questions
  if (secondsLeft > 0) {
    // Set counter for the next question (if less than total no of Questions)
    questionNumber++;
    console.log('Question counter value: ',questionNumber);
    console.log('Timer value: ',secondsLeft);
    console.log('current value of "action" is ', action);

    // CLEAR previous questions ANSWSERS
    //line.textContent = '';
    choiceAns.textContent = '';
    // Get the NEXT question from the Object array
    quizQuestions(questionNumber, questions);

    //choiceAns.remove();
    // choiceAns.style.display = 'none';
    //italic.textContent = ' ';
  }

  if (secondsLeft == 0) {
    // Clears interval for the timer
    clearInterval(timerInterval);
    clearScreen();                        //Clear screen when Timer=0
  }
}

function loseGuess(action) {
  // Clear out text Result for (#line) of previous action in prep for next incoming text
  line.innerHTML = "";
  // Create dividing line for result 
  const horizLine = document.createElement('hr');
  line.appendChild(horizLine); 
  // Create paragraph for answer 
  var tag = document.createElement('p');
  var italic = document.createElement('em');
  // Test if answer is correct or wrong 
  if (action == false) {
    italic.textContent = "Wrong!";
    setScoreCountWrong();
  }
  // Display ans in <p> tag
  line.appendChild(tag).appendChild(italic);

  if (secondsLeft > 0) {
    // Set counter for the next question
    questionNumber++;
    console.log('Question counter value: ',questionNumber);
    console.log('Timer value: ',secondsLeft);
    
    // CLEAR previous questions ANSWSERS
    choiceAns.textContent = '';
    // Get the NEXT question from the Object array 
    quizQuestions(questionNumber, questions);
  }

  if (secondsLeft == 0) {
    // Clears interval for the timer
    clearInterval(timerInterval);
    clearScreen();                        //Clear screen when Timer=0
  }
}

// Local Storage functions 
function setScoreCountCorrect() {
  scoreCountCorrect++;           // Update (increase) score for each correct answer
  localStorage.setItem('scoreCountCorrect',scoreCountCorrect);         // Used to set value in Localstorage              
}

function setScoreCountWrong() {
  scoreCountWrong--;           // Update (increase) score for each correct answer
  localStorage.setItem('scoreCountWrong',scoreCountWrong);         // Used to set value in Localstorage              
}
// ====== Storage - End =======


function clearScreen() {
  questionDiv.style.display = 'none';           // Stop displying <div> containing Questions & Answers
  questionDiv.className = "";                   // This removes "hide" from the class and makes our question visible
  
  console.log(' ******* Now in clearScreen function ******** ');
  endScreenDiv.className = "";                   // This removes "hide" from the class and makes our div visible
  getFinalScore();                               // Get the final score of Quiz

  // Setting Listener for Submit button activity
  submitBtn.addEventListener("click", getInitials);
}

function clearScreenSubmit() {
  endScreenDiv.style.display = 'none';           // Stop displaying <div> containing Enter Initials
  endScreenDiv.className = "";                   // This removes "hide" from the class and makes our page visible
  
  console.log(' ******* Now in clearScreenSubmit function ******** ');
  
}


// Function for EventListener Fetching Quiz user initials after submission
function getInitials(event) {
  event.preventDefault();
  
  const textInput = initials.value.trim();                    // Save initials when Submitted 
  const textInputUpCase = textInput.toUpperCase();            // Convert intials to Uppercase
  
  let score = window.localStorage.getItem("scoreCountCorrect") || [];                 // Get score from Local Storage 
  let highscoresVal = JSON.parse(window.localStorage.getItem("highscores")) || [];    // Get combined score and Initials 
  let scoreFinal = {score, 'initials':textInputUpCase};                               // Create object of both 
  highscoresVal.push(scoreFinal);
  window.localStorage.setItem("highscores", JSON.stringify(highscoresVal));           // Restore boths values in Local Storeage

  console.log('final score: ', scoreFinal);
  window.location.href="highscores.html";                                             // Re-direct to Highscores.html page then display Scores
  // Now Clear current page 
  clearScreenSubmit();
  return;
} 


// Function to Display the final score in (All Done!)
function getFinalScore() {
  var endScreen = document.createElement(endScreenDiv.style.display.endscreen);   // Creating an element for endscreen tag  
  document.body.appendChild(endScreen);                                           // Now appending the <div> to the Body 
  playerScore = renderScores();                                                   // Retreive score from Local Storage
  console.log('player score is: ', playerScore);
  finalScore.textContent = playerScore;                                           // Write final-score to Html via <span id>
}




// ******* Start of Quiz - kick-off timer, display question *******

// Monitoring Quiz start button with eventListener 
startBtn.addEventListener("click", startQuiz);

//startBtn.onclick = startQuiz;

// ********* Detect Answers Buttons to Questions *********
// Get the element, add click listener to detect Answers to Questions


function getAnswers(event) {
  //event.stopImmediatePropagation();

  // e.target is the click element!
  // If it was a <p> tag 
  console.log('target: ',event.target);
  console.log('nodeName: ', event.target.nodeName);
  console.log('currentTarget', event.currentTarget);
  // Grab text inside <p> tag for testing 
  let text = event.target.innerHTML;
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
  return;
}
// Listen for Button selection to answers, then call function 
choiceAns.addEventListener("click", getAnswers); 

function clearHighScores(event) {
  document.getElementById(highScore).innerHTML = 'none';           // Stop displaying <div> containing Enter Initials

}

// Listen for Button selection to clear All answers
// clearBtn.addEventListener("click", clearHighScores); 

// ******** Timer function code ********
// *************************************

// SetTimer variable for function setTimer()
var secondsLeft = 15;

function setTimer() {
    // Set interval in variable 
    var timerInterval = setInterval(function () {

        secondsLeft--;
        //console.log('calc:',timeSpan + secondsLeft);
        
        // display current time 
        timeSpan.textContent = secondsLeft;
        if (secondsLeft >= 0) {
          // Test if success condition has been met 
          if (hasWon && secondsLeft > 0) {
            //Clear interval & Stops timer 
            clearInterval(timerInterval);
            winGuess();
          }
        }
        // Test if time has run out
        if (secondsLeft === 0) {
            // Stops execution of the action at set interval 
            clearInterval(timerInterval);
            loseGuess();
            // Calls function to display current time 
            //sendMessage();
        }
    }, 1000);
}


