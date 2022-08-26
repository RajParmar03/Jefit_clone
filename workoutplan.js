let container = document.querySelector('#main');
let cards = [
    {img:"https://cdn.jefit.com/uc/file/8a8f9c83297f0ade/1.jpg",
     h2:"8 Exercise: Push/Pull Routine"},
     {img:"https://cdn.jefit.com/uc/file/2b90c1ef3b5c2e0b/1.jpg",
     h2:"Forcing your muscle to grow"},
     {img:"	https://cdn.jefit.com/uc/file/4e6837f6cba13dea/1.jpg",
     h2:"Smith Machine Programe"},
     {img:"	https://cdn.jefit.com/uc/file/1dcaab8f8f27d43a/1.jpg",
     h2:"Back &Bicep : 2 day plan"},
     {img:"	https://cdn.jefit.com/uc/file/5c125efc34392d0a/1.jpg",
     h2:"No Equipment Surpset"},
     {img:"	https://cdn.jefit.com/uc/file/9cab85465269b98a/1.jpg",
     h2:"Strength Machine Program"},
]
let div
cards.forEach(function(ele){
     div= document.createElement('div');
    div.setAttribute('class','card');
    let img= document.createElement('img');
    img.src= ele.img;
    let h2 = document.createElement('h2');
    h2.innerText= ele.h2;
    div.append(img,h2);
    container.append(div);
})
// =============================================================

let cards2 = [
    {img:"https://cdn.jefit.com/uc/file/8a8f9c83297f0ade/1.jpg",
     h2:"8 Exercise: Push/Pull Routine"},
     {img:"https://cdn.jefit.com/uc/file/2b90c1ef3b5c2e0b/1.jpg",
     h2:"Forcing your muscle to grow"},
     {img:"	https://cdn.jefit.com/uc/file/4e6837f6cba13dea/1.jpg",
     h2:"Smith Machine Programe"},
     {img:"	https://cdn.jefit.com/uc/file/1dcaab8f8f27d43a/1.jpg",
     h2:"Back &Bicep : 2 day plan"},
     {img:"	https://cdn.jefit.com/uc/file/5c125efc34392d0a/1.jpg",
     h2:"No Equipment Surpset"},
     {img:"	https://cdn.jefit.com/uc/file/9cab85465269b98a/1.jpg",
     h2:"Strength Machine Program"},
]

cards2.forEach(function(ele){
    let div1= document.createElement('div');
    div1.setAttribute('class','card');
    let img= document.createElement('img');
    img.src= ele.img;
    let h2 = document.createElement('h2');
    h2.innerText= ele.h2;
    div1.append(img,h2);
    // container.append(div1);
})
// ==============================================================

let cards3 = [
    {img:"https://cdn.jefit.com/uc/file/8a8f9c83297f0ade/1.jpg",
     h2:"8 Exercise: Push/Pull Routine"},
     {img:"https://cdn.jefit.com/uc/file/2b90c1ef3b5c2e0b/1.jpg",
     h2:"Forcing your muscle to grow"},
     {img:"	https://cdn.jefit.com/uc/file/4e6837f6cba13dea/1.jpg",
     h2:"Smith Machine Programe"},
     {img:"	https://cdn.jefit.com/uc/file/1dcaab8f8f27d43a/1.jpg",
     h2:"Back &Bicep : 2 day plan"},
     {img:"	https://cdn.jefit.com/uc/file/5c125efc34392d0a/1.jpg",
     h2:"No Equipment Surpset"},
     {img:"	https://cdn.jefit.com/uc/file/9cab85465269b98a/1.jpg",
     h2:"Strength Machine Program"},
]

cards3.forEach(function(ele){
        let div2= document.createElement('div');
        div2.setAttribute('class','card');
        let img= document.createElement('img');
        img.src= ele.img;
        let h2 = document.createElement('h2');
        h2.innerText= ele.h2;
        div2.append(img,h2);
        // container.append(div2);
    })
    
    let imgs =[cards,cards2,cards3]
    function show(){
            container.append(div);

        // for(let i =0;i<imgs.length;i++){
            
        // }
}
setInterval(show,2000)