const questions = [
    {
        question: "What is the primary function of an operating system on a computer?",
        answers: [
            { text: "change colour", correct: false},
            { text: "manages computer resources", correct: true},
            { text: "replicate files", correct: false},
            
        ]
    },
    {
        question: "How does the taskbar function in the Windows operating system?",
        answers: [
            { text: "replicate apps", correct: false},
            { text: "Manages apps, shortcuts, notifications.", correct: true},
            { text: "delete set up", correct: false},
            
        ]
    },
    {
        question: "What is the role of a CPU in a computer system?",
        answers: [
            { text: "give instructions", correct: false},
            { text: "control software", correct: false},
            { text: "Executes instructions, controls hardware.", correct: true},
            
        ]
    },
    {
        question: "What is the significance of the Undo button in a word processing application?",
        answers: [
            { text: "Reverts recent actions.", correct: true},
            { text: "replicate words", correct: false},
            { text: "redo actions", correct: false},
            
        ]
    },

    {
        question: "what's the purpose of a word processor in computer applications?",
        answers: [
            { text: "Create, edit, format text docs.", correct: true},
            { text: "for presentation", correct: false},
            { text: "for calculations", correct: false},
            
        ]
    },

    {
        question: "How can font color be customized in a word processing application?",
        answers: [
            { text: "change text color", correct: true},
            { text: "import color", correct: false},
            { text: "format text", correct: false},
        
        ]
    },

    {
        question: "How does line spacing affect the readability of a document?",
        answers: [
            { text: "Enhances readability", correct: true},
            { text: "change color", correct: false},
            { text: " by formating", correct: false},
            
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`; 
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
    
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

