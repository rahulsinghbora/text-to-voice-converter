let speech=new SpeechSynthesisUtterance();

const button=document.querySelector("button");
const textarea=document.querySelector(".area")

button.addEventListener("click",()=>{
    console.log("");
    speech.text=textarea.value;
     window.speechSynthesis.speak(speech)
});