const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const result = document.getElementById("result");
const countDown = document.getElementById("countDown");

let score = 0;

// Define questions for quiz here
let questions = [
{
  question: "Which of these is not a common data type?",
  choiceA: "a) cthulu",
  choiceB: "b) string",
  choiceC: "c) boolean",
  choiceD: "d) number",
  correct:"A"

},
 { 
  question: "Which of these symbols can be used as shorthand when writing a function? ",
  choiceA: "a) :D",
  choiceB: "b) <3",
  choiceC: "c) =>",
  choiceD: "d) ;)",
  correct: "C"
  }, 
  {
    question: "A variable cannot be declared using which prefix?",
    choiceA: "a) let",
    choiceB: "b) var",
    choiceC: "c) const",
    choiceD: "d) namaste",
    correct: "D"
  },
  {
    question: "Fill in the blank: Javascript is a ___ oriented programming language.",
    choiceA: "a) banana stand",
    choiceB: "b) object",
    choiceC: "c) bluth",
    choiceD: "d) arrested development",
    correct: "B"
  }
  ]

// Set timer

var count = 60;
var activeCountdown = setInterval(function () {
  countDown.textContent = count;
  count--
  if (count === 0) {
    countDown.textContent = `Time's up! Your score is: ${score}`;
    clearInterval(activeCountdown)
  }
}, 1000);

  // Render questions here
  let lastQuestion = questions.length -1;
  let runningQuestion = 0;

  function renderQuestion(){
    let q = questions[runningQuestion];
    question.textContent = q.question;
    choiceA.textContent = q.choiceA; 
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
  }


  // Check answer results here
  function checkAnswer(answer){
    if (answer === questions[runningQuestion].correct){
      rightAnswer()
      score === score++;
      if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
      }
      else if (runningQuestion = lastQuestion) {
          clearInterval(activeCountdown)
          countDown.textContent = `Your final score is: ${score}`;
      }
    }

    else if (answer !== questions[runningQuestion].correct) {
      wrongAnswer();
      count = count - 10;
        if (runningQuestion < lastQuestion) {
          runningQuestion++;
          renderQuestion();
        }
        else {
          clearInterval(activeCountdown)
          countDown.textContent = `Your final score is: ${score}`;
        }
      }
   }  
  function rightAnswer() {
    result.textContent = "You're right!"
  
    }
    

  function wrongAnswer() {
    result.textContent = "You're wrong! You lost 10 seconds on the clock."
  }




renderQuestion()







