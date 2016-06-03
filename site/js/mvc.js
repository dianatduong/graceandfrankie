'use strict'

$(document).ready(function() {


var M = {}, V = {}, C = {};



//*************** Model ***************

M = {
    quiz : [{
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
  }],
  questionCount : 1,
  correctAnswers : 0,
  questionIndex : 0
}

//*************** View ***************

V = {
  mainIntro : $('.main-intro'),
  beginQuiz : $('.quiz-wrapper'),
  feedbackHeader : $('.feedback-header'),
  questionDiv : $('.question'),
  choicesDiv : $('.choices'),
  questionNumber : $('#question-number'),
  circles : $('.circles'),
  nextDiv : $('.next'),
  // when user clicks start button, the intro hides, quiz displays, question get generated
  startQuiz : function() {
     $('.start-btn').click(function() {
      // once start button is clicked, the main introduction is hidden to
      V.mainIntro.hide()
      // display the quiz contents
      V.beginQuiz.show()
      M.questionCount = 1;
      // displays question number
      V.feedbackHeader.show()
      //appending question number
      V.feedbackHeader.append('Question <span id="question-number">'+ M.questionCount +':</span')
      V.choicesDiv.show()
      // shows question number 
      V.questionDiv.show()
      // first question is generated 
      C.generateQuestion()
    })
  },
  // function to append Grace and Frankie option buttons
  characterButtons : function(answer) {
    if (answer == "Frankie") {
      V.choicesDiv.append('<button id="incorrect-btn" class="button">Grace</button><button id="correct-btn" class="button">Frankie</button>')
      $('#correct-btn').click(C.answerTrue) 
      $('#incorrect-btn').click(C.answerFalse) 
    } 
    else {
      V.choicesDiv.append('<button id="correct-btn" class="button">Grace</button><button id="incorrect-btn" class="button">Frankie</button>')
      $('#correct-btn').click(C.answerTrue) 
      $('#incorrect-btn').click(C.answerFalse)
    }
  },
  indicators : function() {
    // adds or removes the active class from the circles
    if (M.questionCount == 1) {
      $('#indicator-1').addClass('active')
    }
    else if (M.questionCount == 2 ) {
      $('#indicator-1').removeClass('active')
      $('#indicator-2').addClass('active')
    }
    else if (M.questionCount == 3 ) {
      $('#indicator-1').removeClass('active')
      $('#indicator-2').removeClass('active')
      $('#indicator-3').addClass('active')
    }
    else if (M.questionCount == 4 ) {
      $('#indicator-1').removeClass('active')
      $('#indicator-2').removeClass('active')
      $('#indicator-3').removeClass('active')
      $('#indicator-4').addClass('active')
    }
    else if (M.questionCount == 5) {
      $('#indicator-1').removeClass('active')
      $('#indicator-2').removeClass('active')
      $('#indicator-3').removeClass('active')
      $('#indicator-4').removeClass('active')
      $('#indicator-5').addClass('active')
    }
  }
}

//*************** Controller ***************

C = {
  generateQuestion : function(){
    V.questionDiv.append(M.quiz[M.questionIndex].question)
    V.characterButtons(M.quiz[M.questionIndex].correctAnswer)
    M.questionIndex++;
    V.indicators("")
  },
  // when user answers correctly
  answerTrue : function() {
    M.correctAnswers++;
    V.feedbackHeader.text("Yay!")
    V.questionDiv.text("You are correct!")
    V.choicesDiv.hide()
    V.nextDiv.append('<button id="next-btn" class="button">Next</button>')
    $('.active').append('<i class="fa fa-check"></i>')
    $('#next-btn').click(C.next)  
    C.seeResults()
  },
  // when user answers incorrectly
  answerFalse : function() {
    V.feedbackHeader.text("Sorry.")
    V.questionDiv.text("That is not the correct answer.")
    V.choicesDiv.hide()
    V.nextDiv.append('<button id="next-btn" class="button">Next</button>')
    $('.active').append('<i class="fa fa-times"></i>')
    $('#next-btn').click(C.next) 
    C.seeResults()  
  },
  next : function() {
    M.questionCount++;
    V.feedbackHeader.empty()
    V.feedbackHeader.append('Question <span id="question-number">'+ M.questionCount +':</span')
    V.questionDiv.text("")
    V.choicesDiv.empty()
    V.nextDiv.empty()
    V.choicesDiv.show()
    C.generateQuestion()
  },
  seeResults : function() {
    if (M.questionCount == 5) {
      // removes Next button
      V.nextDiv.empty()
      // appends the See Result button
      V.nextDiv.append('<button id="results-btn" class="button">See Results</button>')
      C.total()
    }
  },
  total : function() {
    $('#results-btn').click(function() {
      if (M.correctAnswers >= 3) {
        V.feedbackHeader.text("Congratulations!")
        V.questionDiv.text("You answered " + M.correctAnswers + " out of 5 correctly!")
      }
      else {
        V.feedbackHeader.text("Ouch!")
        V.questionDiv.text("You answered " + M.correctAnswers + " out of 5 correctly!")
      }
      // removes active class from last circle indicator
      $('#indicator-5').removeClass('active')
      // removes the See Results Button
      V.nextDiv.empty()
      // displays the Start Over button
      V.nextDiv.append('<button class="reset button">Start Over</button>')
      // reset function to reset quiz
      C.reset()
    })
  },
  reset : function() {
    $('.reset').click(function() {
      //clears feedback Header (Ouch!)
      V.feedbackHeader.empty()
      // clears feedback displaying # of correct
      V.questionDiv.empty()
      // removes Start Over button
      V.nextDiv.empty()
      V.choicesDiv.empty()
      M.questionIndex = 0
      M.questionCount = 0
      M.correctAnswers = 0
      // clears indicators from circles
      V.circles.empty()
      // displays the main introduction to start quiz
      V.mainIntro.show()
      // hides the quiz
      V.beginQuiz.hide()
    })
  }
}


V.startQuiz()

})
