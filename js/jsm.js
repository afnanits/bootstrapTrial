const sndBtn=document.querySelector('#sebdBtn');
const messageIn=document.querySelector('#messageIn');
const messageOut=document.querySelector('#messageOut');


sendBtn.addEventListener('click',sendMsg);


function sendMsg(){
    let content=messageIn.value;
    console.log(content)
    messageOut.innerHTML=content;
    messageIn.value="";
}