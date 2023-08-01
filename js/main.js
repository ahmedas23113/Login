var signupName=document.querySelector("#signupName");
var signupEmail=document.querySelector("#signupEmail");
var signupPassword=document.querySelector("#signupPassword");
var text=document.querySelector('.text-success');
var text2=document.querySelector('.text-2');
var demo = document.querySelector('.demo');
var demo1 = document.querySelector('.demo1');
var cont1=document.querySelector('.cont1');
var cont2=document.querySelector('.cont2');
var navbar=document.querySelector('.navbar-dark');
var content=document.querySelector('.content');
var userName=document.querySelector('#username');
var signinEmail= document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var ino = document.querySelector('#ino');
var carton=[];
if(localStorage.getItem('userData')!=null){
carton=JSON.parse(localStorage.getItem('userData'));
}else{
    carton=[];
}
function signUp(){
    user={
        name:signupName.value,
        email:signupEmail.value,
        pass:signupPassword.value,
    }
    if(signupName.value == '' || signupEmail.value == '' || signupPassword.value == ''  ){
        text2.classList.replace('d-none','d-block');
    }else if(signupName.value == '' && signupEmail.value == '' && signupPassword.value == ''){
        text2.classList.replace('d-none','d-block');
       
    }else{
        carton.push(user);
        localStorage.setItem("userData", JSON.stringify(carton));
        text.classList.replace('d-none','d-block');
        text2.classList.replace('d-block','d-none');
        console.log(carton);
    }
    // window.location.href='loginPage.html';
}
demo.addEventListener('click', function(){
cont1.classList.add('d-none');
cont2.classList.replace('d-none','d-block')
})
demo1.addEventListener('click',function(){
    cont1.classList.remove('d-none')
    cont2.classList.replace('d-block','d-none')
})

// function noRebbe(){
// }

function login(){
       for(i=0;i<carton.length;i++){
        if(signinEmail.value == carton[i].email){
            navbar.classList.replace('d-none','d-block');
            content.classList.replace('d-none','d-block');
            userName.classList.replace('d-none','d-block');
            cont1.classList.add('d-none');
        }else{
            ino.classList.replace('d-none','d-block');

        }
       }
}
// function login(){
//     console.log(carton);
//         if(signinEmail.value == JSON.parse(localStorage.getItem('userData'))){
//             incorrect.classList.replace('d-none','d-block')
//         }else if(signinPassword==JSON.parse(localStorage.getItem('userData'))){
//             console.log("hello");
//         }else{
//             incorrect.classList.replace('d-none','d-block')
            
//         }
// }



