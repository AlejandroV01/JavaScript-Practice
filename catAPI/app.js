const btn = document.querySelector('.btn')
let caturl = undefined;


window.addEventListener('load', () => {
    fetch('https://api.thecatapi.com/v1/images/search?;o,ot=11&api_key=1a582ac1-c8d6-4e98-a3e9-0fb0f8cb38a7')
.then(response => response.json())
.then(data => {
    caturl = data[0]['url']
    document.querySelector('.image').src = caturl
})
})


btn.addEventListener('click', () => {
fetch('https://api.thecatapi.com/v1/images/search?;o,ot=11&api_key=1a582ac1-c8d6-4e98-a3e9-0fb0f8cb38a7')
.then(response => response.json())
.then(data => {
    caturl = data[0]['url']
    document.querySelector('.image').src = caturl
})


})


