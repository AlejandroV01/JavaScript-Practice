const switchBtn = document.querySelector('.switch')



function currentDate(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    let currentDate = (new Date());
    const day = () => currentDate.getDay();
    const month = () => currentDate.getMonth();
    const date = () => currentDate.getDate();
    const year = () => currentDate.getFullYear();
    
    const htmlCurrentDate = document.querySelector('.current-date')
    let currentDay = days[day()]
    let currentMonth = months[month()]
    let currentOfDate = date();
    let slicedDate = String(currentOfDate).slice(-1)
    let ending = '';
    if(currentOfDate > 10 && currentOfDate < 20){
        ending = 'th'
    } else
    if(slicedDate == 1){
      ending = 'st'
    } else
    if(slicedDate == 2){
      ending = 'nd'
    } else
    if(slicedDate == 3){
      ending = 'rd'
    } else {
        ending = 'th'
    }
    
    htmlCurrentDate.innerHTML = currentDay + ', ' + currentMonth + ' ' + currentOfDate + ending + ' '+ year();

}
function currentTime() {
let currentDate = (new Date());
const hh = () => currentDate.getHours();
const mm = () => currentDate.getMinutes();
const ss = () => currentDate.getSeconds();


let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let session = document.querySelector('.session');
let formatValue = switchBtn.getAttribute('data-format');
if(formatValue === '12'){
    if(hh() > 12){
        let newCurrentHour = hh() - 12
        hours.innerHTML = newCurrentHour;
        session.innerHTML = 'PM'
    } 
    if(hh() == 0){
        hours.innerHTML = 12;
    } 
    if(hh() < 12) {
        hours.innerHTML = hh();
    }
} else {
    hours.innerHTML = hh();
}
    
    if(hh() < 10){
        hours.innerHTML = '0' + hh();
    }
    if(mm() < 10){
        minutes.innerHTML = '0' + mm();
    } else {
        minutes.innerHTML = mm();
    }
    if(ss() < 10){
        seconds.innerHTML = '0' + ss();
    } else {
        seconds.innerHTML = ss();
    }
    
    
}

switchBtn.addEventListener('click', () => {
    let formatValue = switchBtn.getAttribute('data-format');
    if(formatValue === '12'){
        switchBtn.setAttribute('data-format', '24');
    } else {
        switchBtn.setAttribute('data-format', '12');
    }
})



currentDate();
currentTime();
setInterval(currentTime, 1000);