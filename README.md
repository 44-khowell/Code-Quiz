# Module 6 Challenge Web APIs: Code Quiz

## Description

For this project given the outline of my On-the-job ticket, my main objectives is to:

	•	Build a timed coding quiz with multiple-choice questions implementing and interactive coding via JavaScript.

	•	To achieve this aim, This app will run in the browser, and will feature dynamically updated HTML and CSS 
	    powered by JavaScript code written by myself. 


## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

	GIVEN I am taking a code quiz
	WHEN I click the start button
	THEN a timer starts and I am presented with a question
	WHEN I answer a question
	THEN I am presented with another question
	WHEN I answer a question incorrectly
	THEN time is subtracted from the clock
	WHEN all questions are answered or the timer reaches 0
	THEN the game is over
	WHEN the game is over
	THEN I can save my initials and score


Presudocode

The user is presented with a Quiz Start Button 

Button clicked 
- User taken to questions via modal / webpage 
	             
- Starts and Displays Timer
- first random question appears 
- A list of answers are displayed
- Each answer has a clickable button 
- Answer Button when clicked: 

	
Will either: 
                 
If Correct:   
- displays the Result to user 				  
- Stores the stores the result score				             
- timer checked for length of time spent                                            
- and Displays to the User the Next question		                        
			                                                                                                              	

If Incorrect:  
- Substract time from the clock (Timer) 
- timer checked for length of time spent
- displays the Result to user
- Stores the stores the result score
- and Displays to the User the Next question


Quiz Ending  -  Check if ALL quiz questions are completed  OR  If Timer has reach zero  
		      
If Task / Timer completed : 
- Display the final user score (All Done!!) 	                          
- Collect user input for Initials (submission field)                                                             
- Store the user Initials after user Submit Button                                                             
- Display the Highscores page with Results 
- Provide option to Clear Highscores 
- Provide option to go back to start of Quiz 
 			    
If Time / Task On-going:  
- keep monitoring (timer)
- keep checking Task complete 
- Display & Log results 


## Mock-Up

The following animation demonstrates the application functionality:

![Animation of code quiz. Presses button to start quiz. Clicks the button for the answer to each question, displays if answer was correct or incorrect. Quiz finishes and displays high scores. User adds their intials, then clears their intials and starts over.](./img-assets/08-web-apis-challenge-demo.gif)

## Page Link

https://44-khowell.github.io

## Credits

Tutorials: 

- https://www.youtube.com/watch?v=7QnIa5QcjLw

- Acknowledging Tutoring assitance 

References:

- https://eronred.substack.com/p/arrays-and-objects-in-javascript
- https://www.3schools.in/2021/11/how-to-create-button-in-javascript.html
- https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation
- https://davidwalsh.name/event-delegate
- https://stackoverflow.com/questions/58486102/adding-eventlistener-to-submit-button-in-a-form
- https://www.freecodecamp.org/news/- - javascript-uppercase-how-to-capitalize-a-string-in-js-with-touppercase/
- https://www.sitepoint.com/javascript-truthy-falsy/
- https://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html






## License 

Copyright (c) Keith Howell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.