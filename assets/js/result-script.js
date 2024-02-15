// GRAFICO CIAMBELLA

let graficoCiambella = document.querySelector('.circle'),
  centro = document.querySelector('.main');

let votoDiPartenza = 0, // parte da 0 mi riempie il 25 percento
  votoPercentualeFinale = 90,
  speed = 5;

let progress = setInterval(() => { // funzione a intervalli specificati da speed
  votoDiPartenza++;

  graficoCiambella.style.background = `conic-gradient(#00FFFF ${votoDiPartenza * 3.6}deg, #D20094 0deg)`

  if (votoDiPartenza === votoPercentualeFinale) {
    clearInterval(progress); // una volta raggiunta la poszione a scelta
  }
}, speed);




// RISULTATO ESITO ESAME
let YourPercentage = 20;
let promosso = 60;


let resultElement = document.getElementById('result');

if (YourPercentage >= promosso) resultElement.textContent = "You passed the exam";
else resultElement.textContent = "You did not pass the exam";
// RISULTATO ESITO h3 CPNGRATULAZOIONI

let congrat = document.getElementById('complimenti');
if (YourPercentage >= promosso) congrat.textContent = "Congratulation!";
else congrat.textContent = "We are so sorry";


// RISULTATO ESITO DOMANDE GIUSTE/SBAGLIATE SULLE TOTALI
const correctQuestions = 23;
const totQuestion = 50;
const correct_Questions = document.getElementById("correct-question");

correct_Questions.textContent = `${correctQuestions}/${totQuestion}`;
correct_Questions.style.display = "block";

const wrongQuestions = 14;
const wrong_Questions = document.getElementById("wrong-question");

wrong_Questions.textContent = `${wrongQuestions}/${totQuestion}`;
wrong_Questions.style.display = "block";


// PERCENTUALE DOAMDE GIUSTE E SBAGLIATE
const correctQuestionsPercentage = 23;
const correct_QuestionsPercentage = document.getElementById("correct-result-percentage");

correct_QuestionsPercentage.textContent = `${correctQuestionsPercentage}%`;
correct_QuestionsPercentage.style.display = "block";


const wrongQuestionsPercentage = 14;
const wrong_QuestionsPercentage = document.getElementById("wrong-result-percentage");

wrong_QuestionsPercentage.textContent = `${wrongQuestionsPercentage}%`;
wrong_QuestionsPercentage.style.display = "block";

