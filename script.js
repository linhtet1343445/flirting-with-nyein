const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif =document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", ()=> {question.innerHTML ="I love you too!";
gif.src="https://media3.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";})
noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    const ramdomX = Math.floor(Math.ramdom() * maxX)
    const ramdomY = Math.floor(Math.ramdom() * maxY)
    noBtn.style.left = ramdomX + "px";
    noBtn.style.top = ramdomY  + "px";
})

