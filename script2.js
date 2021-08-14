(function(){
  function buildQuiz(){
    
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

		output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');
	let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
		answerContainers[questionNumber].style.backgroundColor = 'lightgreen';
      }
    else{
        answerContainers[questionNumber].style.backgroundColor = 'red';
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
      question: "When did India get Independence?",
      answers: {
        a: "15 Aug 1949",
        b: "15 Aug 1950",
        c: "15 Aug 1947"
      },
      correctAnswer: "c"
    },
    {
      question: "How many states are there in India?",
      answers: {
        a: "28",
        b: "26",
        c: "29"
      },
      correctAnswer: "a"
    },
    {
      question: "How many UTs are there in India?",
      answers: {
        a: "9",
        b: "8",
        c: "7"
      },
      correctAnswer: "b"
    }
];

	buildQuiz();
	submitButton.addEventListener('click', showResults);
})();