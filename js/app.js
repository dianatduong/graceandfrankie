'use strict'

$(document).ready(function() {

	var startButton = $('.start-button')
	var mainIntro = $('.main-intro')
	var startGame = $('.game')
	var feedbackHeader = $('.feedback-header')
	var question = $('.question')
	var optionButtons = $('.option-btn')
	var count = $('#question-number')
	var questionNumber = 1
	var nextDiv = $('.next')
	var nextButton = $('#next-btn')


	// array of questions
	var quizQuestions = [
		"\"Your anger is frightening the sand.\"",
		"\"If anyone is going to sit on Ryan Gosling's face, it's gonna be me!\"",
		"\"That's a lubricant?! I've been putting that on my toast.\"",
		"\"Take your scissors away from my rug\"",
		"\"Oh! That is the worst iced tea ever! What is in there, ass?!\""
	]


	// startGame.hide()


	// $('.start-btn').click(function(){
	// 	mainIntro.hide()
	// 	startGame.show()
	// })

	

	feedback(quizQuestions[0], frankieClickedTrue())
	feedback(quizQuestions[0], graceClickedFalse())



		// $('#next-btn').click(function() {
		// 	console.log("next button clicked")
		// 	optionButtons.show()
		// 	questionNumber++;
  //    		count.text(questionNumber)
  //    		feedback().remove()
		// })

	function feedback (index, userAnswer) {
		return true;
	}
	
	function frankieClickedTrue() {
		$('#frankie-btn').click(function() {
			console.log("frankieTrue clicked")
			answerTrue()
		})
	}

	function frankieClickedFalse() {
		$('#frankie-btn').click(function() {
			console.log("frankiefalse clicked")
			answerFalse()
		})
	}

	function graceClickedTrue() {
		$('#grace-btn').click(function() {
			console.log("graceTrue clicked")
			answerTrue()
		})
	}

	function graceClickedFalse() {
		$('#grace-btn').click(function() {
			console.log("graceFalse clicked")
			answerFalse()
		})
	}
	
	function answerTrue() {
		feedbackHeader.text("Yay!")
		question.text("You are correct!")
		optionButtons.empty()
		nextDiv.append('<button id="next-btn" class="button">Next</button>')

	}
	
	function answerFalse() {
		feedbackHeader.text("Sorry.")
		question.text("That is not the correct answer.")
		optionButtons.empty()
		nextDiv.append('<button id="next-btn" class="button">Next</button>')
	}


	
	
	



})

	