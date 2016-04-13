'use strict'

$(document).ready(function() {

  var beginQuiz = $('.quiz-wrapper')
  var feedbackHeader = $('.feedback-header')

  var questionDiv = $('.question')
  var choicesDiv = $('.choices')

  var questionNumber = 1;
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
	    },{
	    question: "\"Oh! That is the worst iced tea ever! What is in there, ass?!\"",
	    options: ["Grace", "Frankie"],
	    correctAnswer: "Grace"
	  }]




// when user clicks start button, the intro hides, quiz displays, question get generated
$('.start-btn').click(function() {
	console.log("*start quiz*")
	$('.main-intro').hide()
	beginQuiz.show()
	generateQuestion()
})

	var questionIndex = 0;
function generateQuestion() {
	console.log("question generated")
	questionNumber == 1;
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
	questionNumber++;
	feedbackHeader.empty()
	feedbackHeader.append('Question <span id="question-number">'+ questionNumber +':</span')
	questionDiv.text("")
	choicesDiv.empty()
	nextDiv.empty()
	choicesDiv.show()
 	generateQuestion()

}

function indicators() {
	if (questionNumber == 1) {
		$('#indicator-1').addClass('active')
	}
	else if (questionNumber == 2 ) {
		$('#indicator-1').removeClass('active')
		$('#indicator-2').addClass('active')
	}
	else if (questionNumber == 3 ) {
		$('#indicator-1').removeClass('active')
		$('#indicator-2').removeClass('active')
		$('#indicator-3').addClass('active')
	}
	else if (questionNumber == 4 ) {
		$('#indicator-1').removeClass('active')
		$('#indicator-2').removeClass('active')
		$('#indicator-3').removeClass('active')
		$('#indicator-4').addClass('active')
	}
	else if (questionNumber == 5) {
		$('#indicator-1').removeClass('active')
		$('#indicator-2').removeClass('active')
		$('#indicator-3').removeClass('active')
		$('#indicator-4').removeClass('active')
		$('#indicator-5').addClass('active')
	}
}	

function seeResults() {
	if (questionNumber == 5) {
		nextDiv.empty()
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
			// clears indicators from circles
			circles.empty()
			$('.main-intro').show()
			beginQuiz.hide()
		})
	}

})


	


	