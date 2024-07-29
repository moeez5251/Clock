let card=document.querySelector('.card');
let hour=document.querySelector('.hour');
let min=document.querySelector('.min');
let sec=document.querySelector('.sec');

setInterval(() => {
    let date=new Date();
    if (date.getHours()>12) {
        let hours=date.getHours();
        hours-=12;
        if (hours<10) {
            hour.innerHTML="0"+hours;
                
        }
        else{
            hour.innerHTML=hours;

        }

    }
    else{
        if (date.getHours()<10) {
            hour.innerHTML="0"+date.getHours();
        }
        else{
            hour.innerHTML=date.getHours();
        }
    }
    if (date.getMinutes()<10) {
        
        min.innerHTML="0"+date.getMinutes();
    }
    else{
        min.innerHTML=date.getMinutes();

    }
    if (date.getSeconds()<10) {
        
        sec.innerHTML="0"+date.getSeconds();
    }
    else{
        sec.innerHTML=date.getSeconds();

    }
}, 1000);