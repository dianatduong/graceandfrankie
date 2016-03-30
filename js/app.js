'use strict'

$(document).ready(function() {

  var beginQuiz = $('.quiz-wrapper')
  var feedbackHeader = $('.feedback-header')

  var questionDiv = $('.question')
  var choicesDiv = $('.choices')

  var count = $('span#question-number')
  var questionNumber = 1

  var nextDiv = $('.next')
  var nextButton = $('#next-btn')


// hides the quiz to display intro
beginQuiz.hide()

// when user clicks start button, the intro hides and quiz displays
$('.start-btn').click(function() {
	$('.main-intro').hide()
	beginQuiz.show()
	// displays a question
	generateQuestions()
	// displays buttons for Grace and Frankie
	characterButtons()
})



// function to generate questions
function generateQuestions() {
	//array of questions
	var q = [{
	    question: "\"Your anger is frightening the sand.\""
	}, {
	    question: "\"If anyone is going to sit on Ryan Gosling's face, it's gonna be me!\""
	}, {
	    question: "\"That's a lubricant?! I've been putting that on my toast.\""
	}, {
	    question: "\"Take your scissors away from my rug\""
	}, {
	    question: "\"Oh! That is the worst iced tea ever! What is in there, ass?!\""
	  }]
	// loop through questions
	for (var i = 0; i < 1; i++) {
	  var quiz = q[i];
	    questionDiv.append(quiz.question);
	}
}

// function to append Grace and Frankie option buttons
function characterButtons() {
	choicesDiv.append('<button id="grace-btn" class="options button">Grace</button><button id="frankie-btn" class="options button">Frankie</button>')
	}

})




	