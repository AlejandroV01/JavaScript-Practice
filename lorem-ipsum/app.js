const button = document.querySelector('.button');
const pContainer = document.querySelector('.p-container')
const input = document.querySelector('.input')
const text = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Lacus sed turpis tincidunt id aliquet risus. Accumsan tortor posuere ac ut consequat semper. Augue ut lectus arcu bibendum at varius vel. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Semper auctor neque vitae tempus quam pellentesque nec. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Eu scelerisque felis imperdiet proin. Et leo duis ut diam quam nulla porttitor massa.',
    'Mi quis hendrerit dolor magna eget est lorem. In pellentesque massa placerat duis ultricies lacus sed. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Nisi porta lorem mollis aliquam ut. Velit egestas dui id ornare arcu odio ut. Arcu ac tortor dignissim convallis aenean. Augue interdum velit euismod in pellentesque massa placerat. At urna condimentum mattis pellentesque id nibh. Amet justo donec enim diam vulputate ut. Massa massa ultricies mi quis. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Neque gravida in fermentum et. Diam in arcu cursus euismod. Urna neque viverra justo nec ultrices. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Sed id semper risus in hendrerit gravida rutrum.',
    'At volutpat diam ut venenatis tellus in metus vulputate eu. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Commodo quis imperdiet massa tincidunt. Nisl condimentum id venenatis a. Nullam ac tortor vitae purus faucibus. Pulvinar sapien et ligula ullamcorper malesuada. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Diam vel quam elementum pulvinar etiam. Enim ut tellus elementum sagittis vitae et. At volutpat diam ut venenatis tellus in metus vulputate.',
    'Nunc sed blandit libero volutpat sed cras ornare arcu. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Elementum curabitur vitae nunc sed. Arcu ac tortor dignissim convallis aenean. Enim neque volutpat ac tincidunt vitae. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Purus non enim praesent elementum. Nisi scelerisque eu ultrices vitae auctor. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Blandit aliquam etiam erat velit scelerisque. Amet dictum sit amet justo donec enim diam vulputate ut. Massa eget egestas purus viverra. Morbi tincidunt ornare massa eget egestas. Neque convallis a cras semper. Non consectetur a erat nam at lectus. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet.',
    'Ac tortor dignissim convallis aenean et. Porttitor lacus luctus accumsan tortor posuere ac ut. Enim sit amet venenatis urna cursus eget nunc scelerisque. Bibendum est ultricies integer quis auctor elit sed. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Lorem ipsum dolor sit amet consectetur. Dolor magna eget est lorem ipsum dolor sit amet. Urna duis convallis convallis tellus id. A pellentesque sit amet porttitor eget dolor morbi. Neque sodales ut etiam sit amet nisl purus in.',
    'Nunc aliquet bibendum enim facilisis gravida neque convallis a. Mattis vulputate enim nulla aliquet porttitor lacus. Pellentesque pulvinar pellentesque habitant morbi tristique. Sit amet dictum sit amet. Consequat mauris nunc congue nisi. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. A cras semper auctor neque. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Nulla pellentesque dignissim enim sit amet venenatis urna. Risus ultricies tristique nulla aliquet enim. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Natoque penatibus et magnis dis parturient montes nascetur. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.',
    'In mollis nunc sed id semper. Purus non enim praesent elementum facilisis. Mattis ullamcorper velit sed ullamcorper. Scelerisque purus semper eget duis at tellus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Quam elementum pulvinar etiam non. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Nam at lectus urna duis convallis. Dictum varius duis at consectetur lorem donec massa sapien. In est ante in nibh mauris cursus mattis molestie. Dignissim sodales ut eu sem integer vitae justo eget magna.',
    'Tempus iaculis urna id volutpat lacus laoreet non. Eleifend mi in nulla posuere sollicitudin. Scelerisque eu ultrices vitae auctor eu augue ut. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Nibh mauris cursus mattis molestie a iaculis at. Bibendum neque egestas congue quisque egestas diam in. Aliquet bibendum enim facilisis gravida neque convallis a cras. Mauris ultrices eros in cursus turpis. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem.',
    'Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Integer quis auctor elit sed vulputate mi sit amet. Bibendum enim facilisis gravida neque convallis. Commodo odio aenean sed adipiscing. Pellentesque dignissim enim sit amet. Euismod nisi porta lorem mollis aliquam ut. Sed risus ultricies tristique nulla aliquet. Purus semper eget duis at tellus at. Amet volutpat consequat mauris nunc congue nisi. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. In fermentum et sollicitudin ac orci phasellus egestas tellus.',
]
button.addEventListener('click', () => {
    const value = parseInt(input.value);
    const random = Math.floor(Math.random() * text.length);
    
    if(isNaN(value) || value < 0 || value > text.length) {
        pContainer.innerHTML = `<p class = "p-text">${text[random]}</p>`
    } else{
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item){
            return `<p class = "p-text">${item}</p>`
        })
        tempText = tempText.join('')
        pContainer.innerHTML = tempText;
        
    }
   
    

    
})