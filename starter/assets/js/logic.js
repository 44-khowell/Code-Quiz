
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
//const choicesBtnData = document.getElementById('choices');

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
   choiceAns: ["1. Sun Microsystems","2. Oracle","Google","3. Mircosoft"],
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
console.log('Question:',questions[0].question);
console.log('Answer:',questions[0].choiceAns[0]);
console.log('Index:',questions[0].Answer);





//GLOABAL Variable to keep count of the questions
let questionNumber = 0;
let hasWon = false;



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



function winGuess(action) {
  // Create dividing line for result 
  const horizLine = document.createElement('hr');
  choices.appendChild(horizLine); 
  // Create paragraph for answer 
  var tag = document.createElement('p');
  var italic = document.createElement('em');
  // Test if answer is correct or wrong 
  if (action == true) {
    italic.textContent = "Correct!";
  } 
  choices.appendChild(tag).appendChild(italic);

}

function loseGuess(action) {
  // Create dividing line for result 
  const horizLine = document.createElement('hr');
  choices.appendChild(horizLine); 
  // Create paragraph for answer 
  var tag = document.createElement('p');
  var italic = document.createElement('em');
  // Test if answer is correct or wrong 
  if (action == true) {
    italic.textContent = "Wrong!";
  }
  choices.appendChild(tag).appendChild(italic);
  
}





function newQuestion(event){

}

// ******* Start of Quiz - kick-off timer, display question *******

// Monitoring Quiz start button with eventListener 
startBtn.addEventListener("click", startQuiz);







// ********* Detect Answers Buttons to Questions *********
// Get the element, add click listener to detect Answers to Questions
choiceAns.addEventListener("click", function(element) {
  // e.target is the click element!
  // If it was a <p> tag 
  console.log('target: ',element.target);
  console.log('nodeName: ', element.target.nodeName);
  // Grab text inside <p> tag for testing 
  let text = element.target.innerHTML;
  console.log('text is: ', text);
  // Target <p> tag of button and compare its contents
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
    let action = true;
    winGuess(action);
    console.log('found it : Qu3 ', element.target.nodeName);
  } else {
    let action = false;
    loseGuess(action);
    console.log('found it : Qu4 ', element.target.nodeName);
  }
});





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


