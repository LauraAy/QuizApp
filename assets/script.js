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
  choiceD: "d) ",
  correct: "C"
  } 
  ]

  let lastQuestion = questions.length -1
  let runningQuestion = 0;

  function renderQuestion(){
    let q = questions[runningQuestion];
    question.textContent = q.question;
    choiceA.textContent = q.choiceA; 
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
  }

  function checkAnswer(answer){
    if (answer === questions[runningQuestion].correct){
      rightAnswer();
    }
    else{
      wrongAnswer();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
    }
      else{
       scoreRender();
    }
  }

  function correctAnswer() {
    result.textContent = "You're right!"
    
  }

  function wrongAnswer() {
    result.textContent = "You're wrong!"
  }
 



renderQuestion()




