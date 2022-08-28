import {navbar} from './components/navbar.js'
    let nav = document.querySelector('.navbar')
    nav.innerHTML = navbar();
//=======================

import {footer} from './components/footer.js'
// console.log(footer);
let foot = document.querySelector('#footer');
foot.innerHTML = footer();   

//=======================


let container = document.querySelector('#main');
let card1 = document.createElement("div")
card1.setAttribute("class","main")

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
    card1.append(div)
})
// container.append(card1)
// // =============================================================
let card11 = document.createElement("div")
card11.setAttribute("class","main")
let cards2 = [
    {img:"https://cdn.jefit.com/uc/file/87c7f61fc8799c72/1.jpg",
     h2:"8 Exercise: Push/Pull Routine"},
     {img:"	https://cdn.jefit.com/uc/file/9cab85465269b98a/1.jpg",
     h2:"Forcing your muscle to grow"},
     {img:"	https://cdn.jefit.com/uc/file/1dcaab8f8f27d43a/1.jpg",
     h2:"Smith Machine Programe"},
     {img:"	https://cdn.jefit.com/uc/file/4e6837f6cba13dea/1.jpg",
     h2:"Back &Bicep : 2 day plan"},
     {img:"	https://cdn.jefit.com/uc/file/5c125efc34392d0a/1.jpg",
     h2:"No Equipment Surpset"},
     {img:"https://cdn.jefit.com/uc/file/2b90c1ef3b5c2e0b/1.jpg",
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
    card11.append(div1)
})
// container.append(card11);
// // ==============================================================

let card12 = document.createElement("div")
card12.setAttribute("class","main")
let cards3 = [
    {img:"https://cdn.jefit.com/uc/file/2b90c1ef3b5c2e0b/1.jpg",
    h2:"8 Exercise: Push/Pull Routine"},
    {img:"https://cdn.jefit.com/uc/file/87c7f61fc8799c72/1.jpg",
    h2:"Forcing your muscle to grow"},
    {img:"	https://cdn.jefit.com/uc/file/5c125efc34392d0a/1.jpg",
    h2:"Smith Machine Programe"},
    {img:"	https://cdn.jefit.com/uc/file/87c7f61fc8799c72/1.jpg",
    h2:"Back &Bicep : 2 day plan"},
    {img:"	https://cdn.jefit.com/uc/file/4e6837f6cba13dea/1.jpg",
     h2:"No Equipment Surpset"},
     {img:"https://cdn.jefit.com/uc/file/8a8f9c83297f0ade/1.jpg",
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
        card12.append(div2)
    })


    let imgs =[card1,card11,card12]
    let i=0
    function show(){
            container.innerHTML='';
            container.append(imgs[i]);
            i++
            if(i==imgs.length){
                i=0;
            } 
}
setInterval(show,3000)
// ====================================

let data = [
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_bulking_m.png",b:'full body | light/heavy days',c:'7 days',d:'Maintaining',e:'Intermediate',f:'0/0',g:'vwnmjji',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_cutting_m.png",b:'1 pas 2 PushPull',c:'5 days',d:'Maintaining',e:'Beginner',f:'6/0',g:'al_krokis',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_cutting_m.png",b:'Copy of 3 Day - My Custom Routine',c:'3 days',d:'Maintaining',e:'Beginner',f:'6/0',g:'BRJ8',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_bulking_m.png",b:'3 Day Full Body Dumbbell Workout',c:'3 days',d:'Bulking',e:'Beginner',f:'6/0',g:'astroboypaul',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_bulking_m.png",b:'Upper Lower',c:'4 days',d:'Maintaining',e:'Beginner',f:'6/0',g:'ezekielpee {VIP}',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_cutting_f.png",b:'nardicc',c:'3 days',d:'Maintaining',e:'Intermediate',f:'6/0',g:'giorgiogu',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_cutting_m.png",b:'Elite - Rest - Pause Training Program',c:'3 days',d:'Bulking',e:'Beginner',f:'6/0',g:'blo43',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_bulking_m.png",b:'Puni',c:'4 days',d:'Maintaining',e:'Beginner',f:'6/0',g:'blo43',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_cutting_f.png",b:'Aesthetic-Abs Slim fit',c:'4 days',d:'Maintaining',e:'Beginner',f:'6/0',g:'cmt50',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_bulking_m.png",b:'AronMolenaars 5 Day Plan',c:'5 days',d:'Maintaining',e:'Intermediate',f:'6/0',g:'nad298',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_bulking_m.png",b:'Orange City Rugby',c:'5 days',d:'Sport',e:'Beginner',f:'6/0',g:'al_krokis',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_cutting_m.png",b:'?????????',c:'5 days',d:'Maintaining',e:'Beginner',f:'6/0',g:'lughpogo',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_bulking_m.png",b:'ppl*arnold',c:'5 days',d:'Maintaining',e:'Beginner',f:'6/0',g:'jonas.sarantaris',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_bulking_m.png",b:'Abs Day',c:'3 days',d:'Bulking',e:'Intermediate',f:'6/0',g:'jonas.sarantaris',h:'Free'},
    {a:"https://www.jefit.com/assets/img/routine/banner-large/wide_bulking_m.png",b:'Abs Day',c:'3 days',d:'Bulking',e:'Intermediate',f:'6/0',g:'jonas.sarantaris',h:'Free'},
];

display(data);
function display (data){
data.forEach(function(ele){
    let row = document.createElement('tr');
    row.setAttribute('id','row')
   row.addEventListener('click',function myfun(){
    window.location.href = 'https://www.jefit.com/routines/467649/copy-of-3-day-my-custom-routine'
   })
    let col = document.createElement('td');
    let d = document. createElement('div');
    d.innerHTML = `<img src='${ele.a}'>`
   d.setAttribute('id','divid');
    col.append(d)
    let col2 = document.createElement('td');
    let h4 = document.createElement('h4');
    col2.innerText = ele.b;
    col2.append(h4)
    col2.style.color= 'rgb(12, 153, 153)';
    let col3 = document.createElement('td');
    col3.innerText = ele.c
    let col4 = document.createElement('td');
    col4.innerText = ele.d
    let col5 = document.createElement('td');
    col5.innerText = ele.e
    let col6 = document.createElement('td');
    col6.innerText = ele.f
    let col7 = document.createElement('td');
col7.innerText = ele.g
col7.style.color = "rgb(12, 153, 153)"
let col8 = document.createElement('td');
col8.innerText = ele.h
row.append(col,col2,col3,col4,col5,col6,col7,col8);
document.querySelector('tbody').append(row)
})
}


//==================================================

const pageButtons = (results,per_page)=>{
    // document.querySelector('tbody').innerHTML=null;
let buttons = document.getElementById('button');
// let results = 45;
// let per_page = 15;
let button =Math.ceil(results/per_page);
for(let i=1;i<=button;i++){
    let btn = document.createElement('button');
    btn.innerText= i;
    btn.onclick = function  (){
        display(data);
        console.log('runn');
    }
    buttons.append(btn);
    }
}
// let pagination = (pages)=>{
//     console.log(pages);
// }
pageButtons(45,15);
