var questions = [
    {
        question: "HTML Stands For?",
        options: ["Hyper Text Makeup Language",
            "html",
            "Cascading Style Sheets",
            "Hypertext markup language"
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For?",
        options: [
            "Cascading Style Sheets",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: "Cascading Style Sheets",
    },
    {
        question: "Js Stands For?",
        options: [
            "Java Style",
            "JavaScript",
            "Script",
            "Script Src"
        ],
        correctAns: "JavaScript",
    },
    {
        question: "Dom Stands For?",
        options: [
            "Document Object Model",
            "html",
            "Css",
            "Java"
        ],
        correctAns: "Document Object Model",
    },
    {
        question: "Ram Stands For?",
        options: [
            "Read Only Memory",
            "Dom",
            "Random Acccess Memory",
            "For Pc"
        ],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "Rom Stands For?",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTML",
            "Read Only Memory"
        ],
        correctAns: "Read Only Memory",
    },
];
var mainContainer = document.querySelector('.mainContainer');
var resultContainer = document.querySelector('.resultContainer');
var question = document.getElementById('question');
var options = document.getElementById('answersBtnContainer');
var marksSpan = document.getElementById('marks');
var resultMarks = document.getElementById('resultMarks');
var resultMarksEnd = document.getElementById('resultMarksEnd');
var marksEnd = document.getElementById('marksEnd');
var currentQuestion = document.getElementById('starting');
var totalQuestion = document.getElementById('ending');
var nextBtn = document.getElementById('nextBtn');
var index = 0;
var marks = 0;

function renderEverything() {
    marksSpan.innerHTML = marks;
    marksEnd.innerHTML = questions.length;
    currentQuestion.innerHTML = index + 1;
    totalQuestion.innerHTML = questions.length;

    question.innerHTML = `${index + 1}. ${questions[index].question}`;

    options.innerHTML = "";
    for (let i = 0; i < questions[index].options.length; i++) {
        var correctAns = questions[index].correctAns;
        var currentOption = questions[index].options[i];
        options.innerHTML += `<button onclick="checkQuestion('${currentOption}', '${correctAns}', this)">${questions[index].options[i]}</button>`
    }
}
renderEverything()

function checkQuestion(currentOption, correctAns, element) {
    var buttons = options.getElementsByTagName("button");
    var correctButton;
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === correctAns) {
            correctButton = buttons[i];
            break;
        }
    }
    if (currentOption == correctAns) {
        element.setAttribute('class', 'correct')
        console.log(element);
        marks++;
    } else {
        element.setAttribute('class', 'wrong')
        correctButton.setAttribute('class', 'correct')
    }
    for (let i = 0; i < options.children.length; i++) {
        options.children[i].classList.add('disabled')
    }
    nextBtn.style.pointerEvents = "all"
    nextBtn.style.backgroundColor = "#c40094"
}

function next() {
    nextBtn.style.pointerEvents = "none"
    if (index + 1 == questions.length) {
        showResult()
    } else {
        index++;
        nextBtn.style.pointerEvents = "none";
        nextBtn.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }
    renderEverything()
}

function showResult() {
    resultMarks.innerHTML = marks;
    resultMarksEnd.innerHTML = questions.length;
    mainContainer.style.transform = "scale(0)"
    setTimeout(() => {
        resultContainer.style.display = "flex"
        mainContainer.style.display = "none"
        setTimeout(() => {
            resultContainer.style.transform = "scale(1)"
        }, 300);
    }, 200);

    var circularProgress = document.getElementById('percentContainer');
    var progressValue = document.getElementById('percentSpan');
    let progressStartValue = 0;
    let progressEndValue = ((marks / questions.length) * 100).toFixed(0);
    setTimeout(() => {
        let progress = setInterval(() => {
            progressStartValue++;
            if (progressStartValue == progressEndValue) {
                clearInterval(progress)
            }
            progressValue.innerHTML = `${progressStartValue}%`
            circularProgress.style.background = `conic-gradient(#c40094, ${progressStartValue * 3.6}deg, rgba(255, 255, 255, 0.1) 0deg)`
        }, 20);
    }, 400);
}

function tryAgain() {
    index = 0;
    marks = 0
    resultContainer.style.transform = "scale(0)"
    setTimeout(() => {
        resultContainer.style.display = "none"
        mainContainer.style.display = "block"
        setTimeout(() => {
            mainContainer.style.transform = "scale(1)"
            nextBtn.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            renderEverything()
        }, 300);
    }, 200);
}