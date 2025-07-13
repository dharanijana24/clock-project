let hour=document.getElementById('hours');
let minuts=document.getElementById('minute');
let secounds=document.getElementById('secound');
let ampm1=document.getElementById('ampm');

function updateClock(){


let hours=new Date().getHours();

//console.log(hours);
let minute=new Date().getMinutes();
let secound=new Date().getSeconds();


let ampm="AM";
if(hours>=12){
    ampm="PM"
}





hour.innerText=hours;
minuts.innerText=minute;
secounds.innerText=secound;
ampm1.innerText=ampm;


setTimeout(()=>{
    updateClock();
},1000);

}
updateClock();

