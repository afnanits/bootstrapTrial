var bt=document.getElementById("bt")
let lis=document.querySelector(".lst")
let box=document.querySelector(".box")
var r=document.querySelector(".list")
var tr=document.querySelector("body")
bt.addEventListener("click",function(){
    if(lis.value!=''){
     node=document.createElement('span')
    trash=document.createElement('button')
     textNode=document.createTextNode(lis.value)
    node.appendChild(textNode)
    box.appendChild(node)
   A= document.createTextNode("\u00D7")
   trash.appendChild(A)
    node.appendChild(trash)
    node.className="note" 
    
        trash.classList.add('tr')
    
    var tr=document.getElementsByClassName("tr")
    var note=document.getElementsByClassName("note")
    
    console.log(tr);
    
    for(let i=0;i<tr.length;i++){
        tr[i].onclick=function(){
            tr.classList.add()
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    for(let i=0;i<tr.length;i++){
        note[i].onclick=function(ev){
            ev.target.classList.toggle("check")
            
            
        }
    }
        lis.value=''
    tr=trash
    
    
}
else{
    alert("type something")
}



})
