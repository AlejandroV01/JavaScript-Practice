const subtitle = document.querySelector('.subtitle');
const button = document.querySelector('.button');
const container = document.querySelector('.container');
const main = document.querySelector('.main');

const hexArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let oneHex = '';
    let twoHex = '';
    for( i = 0; i < 6; i++){
        oneHex += hexArr[Math.floor(Math.random() * 16)]
        twoHex += hexArr[Math.floor(Math.random() * 16)]
    }
    subtitle.innerHTML = `#${oneHex} => #${twoHex}`;
    document.body.style.background = `linear-gradient(to right, #${oneHex}, #${twoHex})`

button.addEventListener('click', function() {
    const hexArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let oneHex = '';
    let twoHex = '';
    for( i = 0; i < 6; i++){
        oneHex += hexArr[Math.floor(Math.random() * 16)]
        twoHex += hexArr[Math.floor(Math.random() * 16)]
    }
    subtitle.innerHTML = `#${oneHex} => #${twoHex}`;
    document.body.style.background = `linear-gradient(to right, #${oneHex}, #${twoHex})`

})

setInterval(function() {main.classList.toggle('main-black')}, 1500)