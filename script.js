let but=document.getElementById('theme');
let link =document.querySelectorAll('a');
let header=document.querySelector('header');
but.addEventListener('click',()=>{
    if(but.className==='white'){
        but.classList.remove('white');
         document.body.style.backgroundColor="";
        document.body.style.color='';
        but.style.backgroundColor="black";
        but.innerHTML="☀️";
        header.style.backgroundColor='black';
        for(let val of link){
        val.style.color='white';
        }
    }
    else{
        but.classList.add('white');
        document.body.style.backgroundColor="white";
        document.body.style.color='black';
        but.style.backgroundColor="white";
        but.innerHTML="🌙";
         header.style.backgroundColor='white';
        for(let val of link){
        val.style.color='black';
        }
    }
})
let firstbut=document.getElementById('firstbut');
let elsetbut=document.getElementById('elsebut');
let slide=document.getElementById('slide');
let firstpage=document.getElementById('firstpage');
let nxtpage=document.getElementById('nxtpage');
firstbut.addEventListener('click',()=>{
   firstpage.style.display='none';
    nxtpage.style.display='block';
})
elsetbut.addEventListener('click',()=>{
   slide.innerHTML="";
   slide.innerHTML="You Must Need To Know";
   setTimeout(()=>{
       firstpage.style.display='none';
   nxtpage.style.display='block';
   },2000);
})
let imgs=document.querySelectorAll("#list");
let showimg=document.getElementById('bigimg1');
let redirect={"img1":"https://neetocode.com/create/webpage/hariharan--/HCJ-CAG",
"img2":"https://neetocode.com/create/webpage/hariharan--/HCJ-THW",
"img3":"https://neetocode.com/create/webpage/hariharan--/HCJ-KIL"};
for(let img of imgs){
img.addEventListener('click',()=>{
    showimg.src=event.target.src;
})
img.addEventListener('dblclick',()=>{
     window.location.href=redirect[event.target.id];
})
}
