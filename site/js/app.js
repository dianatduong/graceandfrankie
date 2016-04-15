'use strict'

$(document).ready(function() {

  var beginQuiz = $('.quiz-wrapper')
  var feedbackHeader = $('.feedback-header')

  var questionDiv = $('.question')
  var choicesDiv = $('.choices')

  var questionNumber = $('#question-number')
  var questionCount = 1;
  var circles = $('.circles')


  var nextDiv = $('.next')



  var q = [{
	    question: "\"Your anger is frightening the sand.\"",
	    options: ["Grace", "Frankie"],
	    correctAnswer: "Frankie"
	}, {
	    question: "\"If anyone is going to sit on Ryan Gosling's<br> face, it's gonna be me!\"",
	    options: ["Grace", "Frankie"],
	    correctAnswer: "Grace"
	}, {
	    question: "\"That's a lubricant?! I've been putting that on my toast.\"",
	    options: ["Grace", "Frankie"],
	    correctAnswer: "Grace"
	}, {
	    question: "\"Take your scissors away from my rug\"",
	    options: ["Grace", "Frankie"],
	    correctAnswer: "Frankie"
	}, {
	    question: "\"Oh! That is the worst iced tea ever! What is in there, ass?!\"",
	    options: ["Grace", "Frankie"],
	    correctAnswer: "Grace"
	  }]


// when user clicks start button, the intro hides, quiz displays, question get generated
$('.start-btn').click(function() {
	console.log("*start quiz*")

	// once start button is clicked, the main introduction is hidden to
	$('.main-intro').hide()
	// display the quiz contents
	beginQuiz.show()
	questionCount = 1;
		// displays question number
		feedbackHeader.show()

		//appending question number
		feedbackHeader.append('Question <span id="question-number">'+ questionCount +':</span')

		choicesDiv.show()
		
		// shows question number 
		questionDiv.show()

	// first question is generated 
	generateQuestion()
})

	var questionIndex = 0;
function generateQuestion() {
	console.log("question generated")
	questionDiv.append(q[questionIndex].question)
	characterButtons(q[questionIndex].correctAnswer)
	questionIndex++;
	indicators("")
}

// function to append Grace and Frankie option buttons
function characterButtons(answer) {
	if (answer == "Frankie") {
		choicesDiv.append('<button id="incorrect-btn" class="button">Grace</button><button id="correct-btn" class="button">Frankie</button>')
		$('#correct-btn').click(answerTrue) 
		$('#incorrect-btn').click(answerFalse) 
	} 
	else {
		choicesDiv.append('<button id="correct-btn" class="button">Grace</button><button id="incorrect-btn" class="button">Frankie</button>')
		$('#correct-btn').click(answerTrue) 
		$('#incorrect-btn').click(answerFalse)
	}
}

	var correctAnswers = 0;

// when user answers correctly
function answerTrue() {
	correctAnswers++;
	feedbackHeader.text("Yay!")
	questionDiv.text("You are correct!")
	choicesDiv.hide()
	nextDiv.append('<button id="next-btn" class="button">Next</button>')
	$('.active').append('<i class="fa fa-check"></i>')
	$('#next-btn').click(next)	
	seeResults()
}

// when user answers incorrectly
function answerFalse() {
	feedbackHeader.text("Sorry.")
	questionDiv.text("That is not the correct answer.")
	choicesDiv.hide()
	nextDiv.append('<button id="next-btn" class="button">Next</button>')
	$('.active').append('<i class="fa fa-times"></i>')
	$('#next-btn').click(next) 
	seeResults()	
}

function next() {
	console.log("next button clicked")
	questionCount++;
	feedbackHeader.empty()
	feedbackHeader.append('Question <span id="question-number">'+ questionCount +':</span')
	questionDiv.text("")
	choicesDiv.empty()
	nextDiv.empty()
	choicesDiv.show()
 	generateQuestion()

}

function indicators() {
	// adds or removes the active class from the circles
	if (questionCount == 1) {
		$('#indicator-1').addClass('active')
	}
	else if (questionCount == 2 ) {
		$('#indicator-1').removeClass('active')
		$('#indicator-2').addClass('active')
	}
	else if (questionCount == 3 ) {
		$('#indicator-1').removeClass('active')
		$('#indicator-2').removeClass('active')
		$('#indicator-3').addClass('active')
	}
	else if (questionCount == 4 ) {
		$('#indicator-1').removeClass('active')
		$('#indicator-2').removeClass('active')
		$('#indicator-3').removeClass('active')
		$('#indicator-4').addClass('active')
	}
	else if (questionCount == 5) {
		$('#indicator-1').removeClass('active')
		$('#indicator-2').removeClass('active')
		$('#indicator-3').removeClass('active')
		$('#indicator-4').removeClass('active')
		$('#indicator-5').addClass('active')
	}
}	

function seeResults() {
	if (questionCount == 5) {
		// removes Next button
		nextDiv.empty()
		// appends the See Result button
		nextDiv.append('<button id="results-btn" class="button">See Results</button>')
		total()
 	}
}

function total() {
	$('#results-btn').click(function() {
		if (correctAnswers >= 3) {
			feedbackHeader.text("Congratulations!")
			questionDiv.text("You answered " + correctAnswers + " out of 5 correctly!")
		}
		else {
			feedbackHeader.text("Ouch!")
			questionDiv.text("You answered " + correctAnswers + " out of 5 correctly!")
		}
		// removes active class from last circle indicator
		$('#indicator-5').removeClass('active')
		// removes the See Results Button
		nextDiv.empty()
		// displays the Start Over button
		nextDiv.append('<button class="reset button">Start Over</button>')
		// reset function to reset quiz
		reset()
		
	})
}

function reset() {
		$('.reset').click(function() {
			console.log("reset")
		
			//clears feedback Header (Ouch!)
			feedbackHeader.empty()
		

			// clears feedback displaying # of correct
			questionDiv.empty()
			
			// removes Start Over button
			nextDiv.empty()

			choicesDiv.empty()
			questionIndex = 0
			questionCount = 0
			correctAnswers = 0

			
			// clears indicators from circles
			circles.empty()

			// displays the main introduction to start quiz
			$('.main-intro').show()

			// hides the quiz
			beginQuiz.hide()
		})
	}

})


	


	