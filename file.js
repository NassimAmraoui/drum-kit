//generate html code
let arrKey = ["Q","S","D","F","G","H","J","K","L","M"];
let codeHtml = ``;
arrKey.forEach((key)=>{
    codeHtml += `
        <div class ="key" data-name-key = "${key}">
            ${key}   
        </div>
    `;
   
})
document.body.innerHTML = codeHtml;
let K =  document.querySelectorAll('.key');
let KeyDown;
if(window.innerWidth <= 600){
    K.forEach((kd)=>{
        kd.addEventListener('click',()=>{
        
            let nameKey = kd.dataset.nameKey;
            kd.classList.add('active');
            audioKey(nameKey);
            time= setTimeout(()=>{
                kd.classList.remove('active');
                kd.classList.add('disactive');
                setTimeout(()=>{
                    kd.classList.remove('disactive');
                },100);
            },390);
        })
    })
}


document.addEventListener("keypress",(e)=>{
     KeyDown = e.key.toUpperCase();
    K.forEach((kd)=>{
        let time;
        let nameKey = kd.dataset.nameKey;
        if(KeyDown === nameKey ){
            kd.classList.add('active');
            audioKey(nameKey);
             time= setTimeout(()=>{
            kd.classList.remove('active');
            kd.classList.add('disactive');
            setTimeout(()=>{
                kd.classList.remove('disactive');
            },100);
            },390);
        } 
        
        
    
    
    })
   
})


function audioKey(code){
    const note = new Audio(`audio/${code}.wav`);
    note.play();
}