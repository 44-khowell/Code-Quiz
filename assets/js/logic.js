
/*
var startQButton = document.querySelector("#start");

var submitButton = document.querySelector("#submit");
var initialsText = document.querySelector("#initials");
var finalScore = document.querySelector("#final-score");

// Variables for Highscore 
  var highScore = localStorage.getItem("highScore"); 
  localStorage.setItem("finalScore", );

*/

// Variable used in Time Interval to display quiz duration in html
var timeSpan = document.querySelector("#time");

// Variables for function - startQuiz(event)
const startBtn = document.getElementById('start');
const startSection = document.getElementById('start-screen');
const questionTitle = document.getElementById('question-title');
const choiceAns = document.getElementById('choices');
const questionDiv = document.getElementById('questions');
const lineDiv = document.getElementById('line');
//const choicesBtnData = document.getElementById('choices');

// Storage Variables 
var scoreCountCorrect = localStorage.getItem('scoreCountCorrect');    // Used to get value of Scorecount 
var scoreCountWrong = localStorage.getItem('scoreCountWrong');        // Used to get value of Scorecount 

//localStorage.setItem('scoreCountCorrect',scoreCountCorrect);         // Used to set value in Localstorage              

//scoreCount++;           // Update (increase) score for each correct answer
//scoreCount--;           // Update (decrease) score for each incorrect answer



// Get player scores from the Quiz 
function renderScores(playerScore) {

  scoreCountCorrect = localStorage.getItem('scoreCountCorrect');    // Used to get value of Scorecount 

  // Check if fetched storage variable is empty before displaying to page 
  if (scoreCountCorrect === null) {
    console.log('No value stored in localstorage');
  return;
  }
  playerScore = scoreCountCorrect;
  return playerScore;
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
 

  // console.log('The value of Qu counter is: ', arrQuestionNo);
  questionTitle.textContent = arrQuestions[arrQuestionNo].question;  // Assess 1st Quest from the QuObjectArray

  // Checking how to access array size
  console.log('questions ANS array length:',arrQuestions[arrQuestionNo].choiceAns.length);
  console.log('incoming array is: ', arrQuestions);

    for (let i = 0; i < arrQuestions[arrQuestionNo].choiceAns.length; i++) {
      const answer = arrQuestions[arrQuestionNo].choiceAns[i];       // Extracting each answer in turn from the 1st array
      // console.log('each ans: ', answer);
  
      //item = document.createElement('p');       // Creating an element <p> tag 
      btn = document.createElement("BUTTON");     // Creating an eleement <button> tag
      btn.textContent = answer;                   // Let textContent be maapped into the BUTTON (so both are one)
      choices.appendChild(btn);                   // Now append the BUTTON to the choices Listener element for BUTTON clicked    
    }
    //Output Debug check
    console.log('**** Output check ****');
    console.log('Question:',arrQuestions[arrQuestionNo].question);
    console.log('Index:',arrQuestions[arrQuestionNo].Answer);
    let index = arrQuestions[arrQuestionNo].Answer
    console.log('Answer:',arrQuestions[arrQuestionNo].choiceAns[index]);
    return;
   // questionNumber++;                                 // Increment Question counter each time user selects one
   // console.log('Question counter value: ',questionNumber);
}


// ***** Quiz START *****

function startQuiz(event) {
  startSection.style.display = 'none';      // Stop displying <div> containing Coding Quiz Chal

  questionDiv.className = "";               // This removes "hide" from the class and makes our question visible
  
 // let questionNumber = 0;                   

  quizQuestions(questionNumber, questions);
/*
  questionTitle.textContent = questions[0].question;  // Assess 1st Quest from the QuObjectArray

// Checking how to access array size
console.log('questions array length:',questions[0].choiceAns.length);

  for (let i = 0; i < questions[0].choiceAns.length; i++) {
    const answer = questions[0].choiceAns[i];       // Extracting each answer in turn from the 1st array
    // console.log('each ans: ', answer);

    const item = document.createElement('p');       // Creating an element <p> tag 
    const btn = document.createElement("BUTTON");   // Creating an eleement <button> tag
    item.textContent = answer;                      // Let textContent for the <p> tag be the selection from the array 
    //choices.appendChild(item);                      // Now append text to <p> tag in html
    choices.appendChild(btn).appendChild(item);     // Now append <button> to <p> tag & text to <p> tag within html
  }

  questionNumber++;                                 // Increment Question counter each time user selects one
  console.log('Question counter value: ',questionNumber);
*/

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



// ******* Start of Quiz - kick-off timer, display question *******

// Monitoring Quiz start button with eventListener 
startBtn.addEventListener("click", startQuiz);


// ********* Detect Answers Buttons to Questions *********
// Get the element, add click listener to detect Answers to Questions


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
  return;
}
// Listen for Button selection to answers, then call function 
choiceAns.addEventListener("click", getAnswers); 

/*
choiceAns.addEventListener("click", function(element) {
  // e.target is the click element!
  // If it was a <p> tag 
  console.log('target: ',element.target);
  console.log('nodeName: ', element.target.nodeName);
  console.log('currentTarget', element.currentTarget);
  // Grab text inside <p> tag for testing 
  let text = element.target.innerHTML;
  console.log('text is: ', text);

  





/*
// Get the element, add click listener to Qu Answers
choiceAns.addEventListener("click", function(element) {
  // e.target is the click element!
  // If it was a <p> tag 
  console.log('target: ',element.target);
  console.log('nodeName: ', element.target.nodeName);

  if (element.target && element.target.nodeName == "P") {
    console.log('found it : ', element.target.nodeName);
  }
});
*/






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


