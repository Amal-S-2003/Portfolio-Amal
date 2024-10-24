const menu = document.getElementById("sidemenu");
const dev = document.getElementById("dev");

function closemenu() {
  menu.style.right = "-400px";
}
function openmenu() {
  menu.style.right = "0";
}
let i = 0;
let abc = ["MEARN STACK DEVELOPER", "FRONT END DEVELOPER", "WEB DESIGNER"];
dev.innerHTML=`<p data-aos="flip-up">WEB DESIGNER</p>`
    setInterval( () => {
    // dev.textContent = abc[i] ;
    dev.innerHTML=`<p data-aos="flip-up">${abc[i]}</p>`
    i = i +1;
    if(i > 2){
        i = 0;
    }
}, 2000);

