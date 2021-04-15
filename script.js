const $allQuestions = document.querySelectorAll(".faq-question-container");
const $allAnswers = document.querySelectorAll(".faq-answer");
const $allTitles = document.querySelectorAll(".faq-question-title");

//console.log($AllQuestions)

function openQuestion(question) {
    question.querySelector(".faq-answer").classList.add("active");
    question.querySelector(".faq-arrow-icon").style.transform = "rotate(180deg)";
    question.querySelector(".faq-question-title").style.fontWeight = 700;
}

function closeQuestion(question) {
    question.querySelector(".faq-answer").classList.remove("active");
    question.querySelector(".faq-arrow-icon").style.transform = "none";
    question.querySelector(".faq-question-title").style.fontWeight = 400;
}

function closeAll(question, isActive) {
    if (isActive) {
        question.querySelector(".faq-answer").classList.remove("active");
    }
}

let lastQuestion = null;

function closeLast() {
    if (lastQuestion) {
        closeQuestion(lastQuestion);
    }

}

for (let i = 0; i < $allQuestions.length; i++) {

    $allQuestions[i].addEventListener("click", function () {
        closeLast();
        if ($allQuestions[i] === lastQuestion) {
            lastQuestion = null;
        } else {
            openQuestion($allQuestions[i]);
            lastQuestion = $allQuestions[i];
        }
       
    })

}



