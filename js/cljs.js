const btn=document.querySelectorAll("#btn");
const btneq=document.querySelector("#btneq");
const btnc=document.querySelector("#btnc")
const  screen=document.querySelector('#scr')
for(let i =0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        let number=btn[i].getAttribute('data-num');
        screen.value +=number;
        a=screen.value
    })
}
btneq.addEventListener('click',function(){
    if(screen.value==''){
        alert("enter values first")
    }
else{
    screen.value=eval(a);
}
})
btnc.addEventListener('click',function(){
    screen.value=''
})
