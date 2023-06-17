const closeSpan = document.getElementById("close");
const popupSec = document.getElementById("popupSec");
const loginBtn = document.getElementById("loginBtn");

closeSpan.addEventListener("click", ()=>{
popupSec.style.display="none";
})

loginBtn.addEventListener("click", ()=>{
    popupSec.style.display="block"
})