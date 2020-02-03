const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const result = document.getElementById("result");
const countDown = document.getElementById("countDown")

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
    question: "A variable cannot be declared using whhich prefix?",
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

  // let count = 60;

  // function renderCountDown(count){
    
  //   var t=date.parse(endtime) - Date.parse(new Date());
  //   var count = math.floor( (t/1000);

  //   countDown.textContent = count;

  // }

  function checkAnswer(answer){
    if (answer === questions[runningQuestion].correct){
      rightAnswer()
      if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
      }
      else if (runningQuestion === lastQuestion) {
        scoreRender();
      }
    }
    else {
      wrongAnswer();
    }
  
  }

  function rightAnswer() {
    result.textContent = "You're right!"
    .result: {
      color = green
    }
    
  }

  function wrongAnswer() {
    result.textContent = "You're wrong! Try again."
  }

renderQuestion()
// renderCountDown()




