const questionsRequest = document.querySelectorAll('.questions__request');
const questionsAnswer = document.querySelectorAll('.questions__answer');
const questionsSing = document.querySelectorAll('.questions__sing')

for (i = 0; i < questionsRequest.length; i++) {
    questionsRequest[i].addEventListener('click', showAnswer);
}

function showAnswer() {
    for (i = 0; i < questionsAnswer.length; i++) {
        if (questionsAnswer[i] != this.nextElementSibling && questionsAnswer[i].classList.contains('hide') == false) {
            questionsAnswer[i].classList.add('hide');
            for (a = 0; a < questionsSing.length; a++)
                if (a == i) {
                    questionsSing[a].classList.toggle('rotate45');
                }
        }
    }
    this.nextElementSibling.classList.toggle('hide');
    this.lastElementChild.classList.toggle('rotate45');
}