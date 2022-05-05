  let fever=document.getElementById("fever").checked;
let cough=document.getElementById("cough").checked;
let tiredness=document.getElementById("tiredness").checked;
let taste=document.getElementById("taste").checked;
let throat=document.getElementById("throat").checked;
let headache=document.getElementById("headache").checked;
let pain=document.getElementById("pain").checked;
let diarrhoea=document.getElementById("diarrhoea").checked;
let rash=document.getElementById("rash").checked;
let eyes=document.getElementById("eyes").checked;
let breath=document.getElementById("breath").checked;
let speech=document.getElementById("speech").checked;
let chest=document.getElementById("chest").checked;
let epClick=document.getElementById("empty-click");
let sub=document.getElementById("submit");


function resp(){
 
}
sub.addEventListener('click',function(){
   if ((fever=="")&&(cough=="")&&(tiredness=="")&&(taste=="")&&(throat=="")&&(headache=="")&&(pain=="")&&(diarrhoea=="")&&(rash=="")&&(eyes=="")&&(breath=="")&&(speech=="")&&(chest=="")){
    epClick.textContent="you didnt click anything ";

} else{
    epClick.textContent="";
} 
} );
function reset(){
   document.querySelectorAll("input[type='checkbox']:checked").forEach((element) =>{
       element.click();});
}