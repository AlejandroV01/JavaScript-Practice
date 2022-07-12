window.addEventListener('load', function(){
    const items = document.querySelector('.items')
    const submit = document.querySelector('.submit')
    

    submit.addEventListener('click', function(){
        const type = document.querySelector('.types')
        const name = document.querySelector('.input-name')
        const amount = document.querySelector('.input-amount')
        const date = document.querySelector('.input-date')
        
        let typeValue = type.value;
        let nameValue = name.value;
        let dateValue = date.value;
        let amountValue = amount.value;

        if(!typeValue || !nameValue || !dateValue || !amountValue || typeValue == 'N/A'){
        alert('Please enter all the fields')
        return
        } 
        if(parseFloat(amountValue) >= 0 || parseFloat(amountValue) < 0){
            
        } else {
            alert('Please enter a valid number in the Amount field')
            return
        }
        
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('ss-item-div')
        
        const spanType = document.createElement('span')
        spanType.classList.add('ss-item')
        spanType.innerText = typeValue;
        
        const spanName = document.createElement('span')
        spanName.classList.add('ss-item')
        spanName.innerText = nameValue;
        
        const spanDate = document.createElement('span')
        spanDate.classList.add('ss-item')
        spanDate.innerText = dateValue;
        
        const spanAmount = document.createElement('span')
        spanAmount.classList.add('ss-item')
        spanAmount.innerText = '$' + amountValue;
        
        const spanX = document.createElement('span')
        spanX.classList.add('ss-item')
        spanX.classList.add('x')
        spanX.innerText = 'X'

        itemDiv.appendChild(spanType)
        itemDiv.appendChild(spanName)
        itemDiv.appendChild(spanDate)
        itemDiv.appendChild(spanAmount)
        itemDiv.appendChild(spanX)
        items.appendChild(itemDiv)
        
        console.log(amountValue);

        spanX.addEventListener('click', function(){
            items.removeChild(itemDiv)
        })
    })

    
    

})