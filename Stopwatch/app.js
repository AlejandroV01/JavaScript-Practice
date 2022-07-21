const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
let seconds = document.querySelector('.seconds')
const mili = document.querySelector('.mili')
let Interval;

start.addEventListener('click', () => {
    clearInterval(Interval)
    Interval = setInterval(addSeconds, 10)
    
})

const addSeconds = () => {
    mili.innerHTML++
    if(mili.innerHTML < 10 && mili.innerHTML > 0){
        mili.innerHTML = '0' + mili.innerHTML;
    }
    if(mili.innerHTML > 99){
        mili.innerHTML = '00'
        seconds.innerHTML++
        if(seconds.innerHTML < 10 && seconds.innerHTML > 0){
            seconds.innerHTML = '0' + seconds.innerHTML;
        }
    }
};


const stopTimer = () =>{
    clearInterval(Interval)
}

stop.addEventListener('click', function(){
    stopTimer()
})

reset.addEventListener('click', () => {
    clearInterval(Interval);
    seconds.innerHTML='00';
    mili.innerHTML='00';
})