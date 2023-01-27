
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
const choicesBtnData = document.getElementById('choices');

// Questions Object Arrays 1
const questions = [
  {
      question: "When was Java released?",
     choiceAns: ["1996","2000","1995","2011"],
        Answer: 2                               //Index of choices array
  },
  {
    question: "What is the most common application of Java?",
   choiceAns: ["Desk Applications","Client Server Web Applications"," Web Servers","Scripts"],
      Answer: 1
  },
  {
    question: "Is Java a OOP Language?",
   choiceAns: ["No", "Yes"],
      Answer: 1
  },
  {
    question: "Who owns Java?",
   choiceAns: ["Sun Microsystems","Oracle","Google","Mircosoft"],
      Answer: 2
  },
  {
    question: "Is Java a Compiled or Interpreted language?",
   choiceAns: ["Complied","Interpreted"],
      Answer: 1
  },
]
//LOGGING outputs from the Object 
console.log(questions);
console.log('Question:',questions[0].question);
console.log('Answer:',questions[0].choiceAns[0]);
console.log('Index:',questions[0].Answer);





//GLOABAL Variable to keep count of the questions
let questionNumber = 0;

function startQuiz(event) {
  startSection.style.display = 'none';      // Stop displying <div> containing Coding Quiz Chal

  questionDiv.className = "";               // This removes "hide" from the class and makes our question visible
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
  
  // Start Timer for question duration
  setTimer();




}
// Logging Code only
console.log('startButton o/p: ', startBtn);


function newQuestion(event){


}

// ******* Start of Quiz - kick-off timer, display question *******

// Monitoring Quiz start button with eventListener 
startBtn.addEventListener("click", startQuiz);




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

        if (secondsLeft === 0) {
            // Stops execution of the action at set interval 
            clearInterval(timerInterval);
            //return;
            // Calls function to display current time 
            //sendMessage();
        }
    }, 1000);
}


