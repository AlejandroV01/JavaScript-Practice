

window.addEventListener('load', () => {
    const btn = document.querySelector('.button');
    const hexArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    const containers = document.querySelector('.containers')


    const title1 = document.createElement('h1')
    title1.classList.add('title')
    title1.innerText = 'hi'
    const title2 = document.createElement('h1')
    title2.classList.add('title')
    title2.innerText = 'hi'
    const title3 = document.createElement('h1')
    title3.classList.add('title')
    title3.innerText = 'hi'
    const title4 = document.createElement('h1')
    title4.classList.add('title')
    title4.innerText = 'hi'

    const container1 = document.createElement('div')
    container1.classList.add('container')
    const container2 = document.createElement('div')
    container2.classList.add('container')
    const container3 = document.createElement('div')
    container3.classList.add('container')
    const container4 = document.createElement('div')
    container4.classList.add('container')

    container1.appendChild(title1)
    containers.appendChild(container1)
    container2.appendChild(title2)
    containers.appendChild(container2)
    container3.appendChild(title3)
    containers.appendChild(container3)
    container4.appendChild(title4)
    containers.appendChild(container4)
    
    let hexValue = '';
        for(i=1;i<7;i++){
            let getRandom = Math.floor(Math.random() * 16);
            hexValue += hexArr[getRandom]
    }
    title1.innerText = `#${hexValue}`
    container1.style.backgroundColor = `#${hexValue}`;

    hexValue = '';
        for(i=1;i<7;i++){
            let getRandom = Math.floor(Math.random() * 16);
            hexValue += hexArr[getRandom]
    }
    title2.innerText= `#${hexValue}`
    container2.style.backgroundColor = `#${hexValue}`;

    hexValue = '';
    for(i=1;i<7;i++){
        let getRandom = Math.floor(Math.random() * 16);
        hexValue += hexArr[getRandom]
    }
    title3.innerText= `#${hexValue}`
    container3.style.backgroundColor = `#${hexValue}`;

    hexValue = '';
    for(i=1;i<7;i++){
        let getRandom = Math.floor(Math.random() * 16);
        hexValue += hexArr[getRandom]
    }
    title4.innerText= `#${hexValue}`
    container4.style.backgroundColor = `#${hexValue}`;
    

     
    btn.addEventListener('click', () => {
        
        let hexValue = '';
        for(i=1;i<7;i++){
            let getRandom = Math.floor(Math.random() * 16);
            hexValue += hexArr[getRandom]
    }
    title1.innerText = `#${hexValue}`
    container1.style.backgroundColor = `#${hexValue}`;

    hexValue = '';
        for(i=1;i<7;i++){
            let getRandom = Math.floor(Math.random() * 16);
            hexValue += hexArr[getRandom]
    }
    title2.innerText= `#${hexValue}`
    container2.style.backgroundColor = `#${hexValue}`;

    hexValue = '';
    for(i=1;i<7;i++){
        let getRandom = Math.floor(Math.random() * 16);
        hexValue += hexArr[getRandom]
    }
    title3.innerText= `#${hexValue}`
    container3.style.backgroundColor = `#${hexValue}`;

    hexValue = '';
    for(i=1;i<7;i++){
        let getRandom = Math.floor(Math.random() * 16);
        hexValue += hexArr[getRandom]
    }
    title4.innerText= `#${hexValue}`
    container4.style.backgroundColor = `#${hexValue}`;
                })
        
                btn.addEventListener('mousedown', function(){
                    btn.classList.add('button-active')
                })
                btn.addEventListener('mouseup', function(){
                    btn.classList.remove('button-active')
                })
                btn.addEventListener('mouseover', function(){
                    btn.classList.add('button-hover')
                })
                btn.addEventListener('mouseout', function(){
                    btn.classList.remove('button-hover')
                })

            
        

    
})






