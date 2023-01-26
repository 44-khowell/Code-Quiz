
/*
var startQButton = document.querySelector("#start");
var timeSpan = document.querySelector("#time");
var submitButton = document.querySelector("#submit");
var initialsText = document.querySelector("#initials");
var finalScore = document.querySelector("#final-score");
*/

const startBtn = document.getElementById('start');
const startSection = document.getElementById('start-screen');
const questionTitle = document.getElementById('question-title');
const choiceAns = document.getElementById('choices');
const questionDiv = document.getElementById('questions');

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
console.log(questions);
console.log('Question:',questions[0].question);
console.log('Answer:',questions[0].choiceAns[0]);
console.log('Index:',questions[0].Answer);



//console.log('question ans from array',choiceAns);
//let answer = questions[0].choiceAns[0];
//console.log('Ans2:',answer);

//GLOABAL Variable to keep count of the questions
let questionNumber = 0;

function startQuiz(event) {
  startSection.style.display = 'none';      // Stop displying <div> containing Coding Quiz Chal

  questionDiv.className = "";               // This removes "hide" from the class and makes our question visible
  questionTitle.textContent = questions[0].question;  // Assess 1st Quest from the QuObjectArray

// Checking how to access array size
console.log('questions array length:',questions[0].choiceAns.length);

  for (let i = 0; i < questions[0].choiceAns.length; i++) {
    const answer = questions[0].choiceAns[i];
    // console.log('each ans: ', answer);

    const item = document.createElement('p');
    item.textContent = answer;
    choices.appendChild(item);
  }


/*
  // Looping thro Choices properties in each index of the array
  answer.foreach(function (singleChoice) {
    const item = document.createElement('p');
    item.textContent = singleChoice;
    choices.appendChild(item);
  })
*/

}

console.log('startButton o/p: ', startBtn);
// Start Of Quiz 
startBtn.addEventListener("click", startQuiz);




// Variables for Highscore 
var highScore = localStorage.getItem("highScore"); 
// localStorage.setItem("finalScore", );









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


