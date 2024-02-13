
// // Assumendo che il booleano sia definito come "isTrue"
// const isTrue = false; // Puoi cambiare questo valore come desideri

// // Selezioniamo l'elemento con id "result"
// const resultElement = document.getElementById('result');

// // Se "isTrue" è true, cambiamo il contenuto di resultElement in 'ciao', altrimenti in 'nociao'
// resultElement.textContent = isTrue ? 'You passed the exam' : 'You did not pass the exam';
// resultElement.style.display = 'block'; // rendiamo visibile il risultato 

  

//Right or wrong question
const correctQuestions = 23;
const totQuestion = 50;
const correct_Questions = document.getElementById('correct-question');

correct_Questions.textContent = `${correctQuestions}/${totQuestion}`;
correct_Questions.style.display = 'block';

const wrongQuestions = 14;
const wrong_Questions = document.getElementById('wrong-question');

wrong_Questions.textContent = `${wrongQuestions}/${totQuestion}`;
wrong_Questions.style.display = 'block';




//Right or wrong question percentage
const correctQuestionsPercentage = 23;
const correct_QuestionsPercentage = document.getElementById('correct-result-percentage');

correct_QuestionsPercentage.textContent = `${correctQuestionsPercentage}%`
correct_QuestionsPercentage.style.display = 'block';

const wrongQuestionsPercentage = 14;
const wrong_QuestionsPercentage = document.getElementById('wrong-result-percentage');

wrong_QuestionsPercentage.textContent = `${wrongQuestionsPercentage}%`
wrong_QuestionsPercentage.style.display = 'block';


