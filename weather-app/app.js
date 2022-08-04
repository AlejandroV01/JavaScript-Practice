const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const desc = document.querySelector('.description')
const button = document.querySelector('.currentLocation')
let input = document.querySelector('input')

fetch('https://api.tomorrow.io/v4/timelines?location=25.7617,80.1918&fields=temperature&timesteps=1h&units=metric&apikey=QOSHqNNIlUe4fuf4ULy8ieFvFlBNeeyr')
    // OLD 2947cd25156b7d9930b806ed18b997e2
    //dc8fe312faad152b038189ee36edc067
    .then(response => response.json())
    .then(data => console.log(data))


button.addEventListener('click', () => {
    // let inputValue = input.value;
    // let lat = undefined;
    // let lon = undefined;
    // if('geolocation' in navigator){
    //     let current = navigator.geolocation.getCurrentPosition(setPosition);
    //     console.log(current)
    // }else{
    //    alert('Browser does not support Geolocation');
    //    return
    // }

    // function setPosition(pos){
    //     const coord = pos.coords;
    //     lat = coord['latitude']
    //     lon = coord['longitude']
    // }
    
    
    
})