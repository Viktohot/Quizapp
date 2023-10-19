const questions = [
    {
        question: "A(n) ______ is a computer program that coordinates all the activities of computer hardware?",
        answers: [
            { text: "App", correct: false},
            { text: "Operating System", correct: true},
            { text: "Vision", correct: false},
            
        ]
    },
   
    {
        question: "To display the start screen, press _____.",
        answers: [
            { text: "F5", correct: false},
            { text: "CTRL+ESC", correct: true},
            { text: "ALT+F5", correct: false},
            
        ]
    },

    {
        question: "The ______ screen enables you to sign in to your account and makes the computer available for use?",
        answers: [
            { text: "Lock", correct: false},
            { text: "Sign-in", correct: true},
            { text: "Client", correct: false},
            
        ]
    },

    {
        question: "The ________ command exits running apps, shuts down Windows, and then turns off the computer?",
        answers: [
            { text: "Sleep", correct: false},
            { text: "Shut down", correct: true},
            { text: "Log-off", correct: false},
            
        ]
    },

    {
        question: "________ in a suit typically use a similar interface and share features.?",
        answers: [
            { text: "Shortcuts", correct: false},
            { text: "Apps", correct: true},
            { text: "Menus", correct: false},
            
        ]
    },

    {
        question: "One method of displaying the entire contents of a window is to _____ it?",
        answers: [
            { text: "Restore", correct: false},
            { text: "Maximize", correct: true},
            { text: "Navigate", correct: false},
            
        ]
    },

    {
        question: "The _______ presents information about the document, the progress of current tasks, and the status of certain commands and keys?",
        answers: [
            { text: "Status bar", correct: true},
            { text: "Document window", correct: false},
            { text: "Information bar", correct: false},
            
        ]
    },

    {
        question: "_______ is a powerful communications and scheduling app that helps you communicate with others, among other things?",
        answers: [
            { text: "OneNote", correct: false},
            { text: "SharePoint", correct: false},
            { text: "Outlook", correct: true},
            
        ]
    },

    {
        question: "If you delete a file from removable media, it is stored in the?",
        answers: [
            { text: "zip file", correct: false},
            { text: "Recycle Bin", correct: true},
            { text: "folder", correct: false},
            
        ]
    },

    {
        question: "One method of changing the size of a window is to drag the window borders?",
        answers: [
            { text: "false", correct: false},
            { text: "true", correct: true},
            { text: "none of the above", correct: false},
            
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