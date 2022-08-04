const boxes = document.querySelectorAll('.box');
let xTurn = true;
const win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

let wincon = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
}

boxes.forEach(box => {
    box.addEventListener('click', function(){
        if(box.innerHTML == 'x' || box.innerHTML== 'o'){
            return
        }

        if(xTurn == true){
            box.innerHTML = 'x';
            xTurn = false;
            let currentdata = box.getAttribute('data-box');
            wincon[currentdata] = 'x'
        } else {
            box.innerHTML = 'o'
            xTurn = true;
            let currentdata = box.getAttribute('data-box');
            wincon[currentdata] = 'o'
        }
        
        let xarray = '';
        let oarray = '';
        for(const i in wincon){
            if(wincon[i] == 'x'){
                xarray += i
            }
            if(wincon[i] == 'o'){
                oarray += i
            }
        }

        xarray = xarray.split('')
        xarray = xarray.toString();
        oarray = oarray.split('')
        oarray = oarray.toString();
        
        

        
        
        

        win.some(combination => {
            console.log(combination)
            combination.every(index => {
                console.log(index)
            })
        })
    })
    
})