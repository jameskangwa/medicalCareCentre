let message=document.getElementById("input");
let sender=document.getElementById("sendEl");
let sentMessage=document.getElementById("sent"); 
let responce=document.getElementById("respond");
let hey="hey";

sender.addEventListener("click",function(){
    mess1=`<p>${message.value}</p><br>`;
    
    sentMessage.innerHTML+=mess1; 


    if(mess1 ==1){
        return responce.textContent+="hello there good buddy";
    }else{
        responce.textContent+="talk to me"
    }
    message.value="";
})

