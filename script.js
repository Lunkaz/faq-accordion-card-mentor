const $AllQuestions = document.querySelectorAll(".faq-question-container");
const $AllAnswers = document.querySelectorAll(".faq-answer")

//console.log($AllQuestions)

function hideAllAnswers() {
    for (let answer of $AllAnswers) {
        answer.classList.remove("active");
    }
}



function showAnswer(e){
    hideAllAnswers()
    for (let i = 0; i < $AllQuestions.length; i++) {
        if (e.target.innerText === $AllQuestions[i].innerText) {
        $AllAnswers[i].classList.add("active"); 
        }
    } 
}

$AllQuestions[0].addEventListener("click", showAnswer);
$AllQuestions[1].addEventListener("click", showAnswer);
$AllQuestions[2].addEventListener("click", showAnswer);
$AllQuestions[3].addEventListener("click", showAnswer);
$AllQuestions[4].addEventListener("click", showAnswer);