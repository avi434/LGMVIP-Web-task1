let butt=document.getElementById("Send");
let nam=document.getElementById("name");
let email=document.getElementById("email");
let mess=document.getElementById("message");
butt.addEventListener("click",function(){
    if(nam.value===""){
        window.alert("Please Enter your name");
    }
    else if(email.value===""){
        window.alert("Please Enter your Email");
    }
    else if(mess.value===""){
        window.alert("Please Enter your message");
    }
    else{
       window.alert("message received");
    }
})
let flag=0;
const nav=document.querySelector(".navbar");
function navbar(){
    if(flag==0){
        nav.style.height="220px";
        document.querySelector('ul').style.display="block"
        document.querySelector('ul').style.opacity=1;
        flag=1;
    }
    else{
        nav.style.height="50px";
        document.querySelector('ul').style.display="none"
        document.querySelector('ul').style.opacity=0;
        flag=0;
    }
        
}