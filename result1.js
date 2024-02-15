let graficoCiambella = document.querySelector('.circle'),
centro = document.querySelector('.main');

let votoDiPartenza = 0, // parte da 0 mi riempie il 25 percento
    votoPercentualeFinale = 25,
    speed = 5;

let progress = setInterval(() => {
    votoDiPartenza ++;

    graficoCiambella.style.background = `conic-gradient(#00FFFF ${votoDiPartenza  * 3.6}deg, #D20094 0deg)`

    if(votoDiPartenza  === votoPercentualeFinale){
        clearInterval(progress);
    }
}, speed);
