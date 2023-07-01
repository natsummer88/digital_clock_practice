const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function getTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h<10 ? "0" + h: h;


    if (h > 12) {
        ampmEl.innerText = "PM";
        h = h-12;

    } else {
        ampmEl.innerText = "AM";
    }

    h = h<10 ? "0" + h: h;
    m = m<10 ? "0" + m: m;
    s = s<10 ? "0" + s: s;

    hourEl.innerText = h ;
    minutesEl.innerText = m;
    secondsEl.innerText = s;


    setTimeout(()=>{
        getTime(); 
    }, 1000);
}

getTime();





