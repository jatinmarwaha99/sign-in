const email = document.querySelector('#email');
const regex = new RegExp('[a-zA-Z0-9\._]+@[a-z0-9]{2,4}');
email.onchange = function () {
  if (regex.test(email.value)) {
    // console.log('lkdjfkdm');
    email.classList.add('is-valid');
    email.classList.remove('is-invalid');
  }

  else {
    email.classList.add('is-invalid');
    email.classList.add('is-valid');
  }
}
    const mob=document.querySelector('#mob');
    mob.onchange= function(){
      // mob.value
      
      if(mob.value.length !=10)
      {
      
        mob.classList.add('is-invalid');
         mob.classList.remove('is-valid');
      }
      else {
        
         mob.classList.add('is-valid');
        mob.classList.remove('is-invalid');
      }
    }
  const loginbtn=document.querySelector('.loginbtn');
  const signupbtn=document.querySelector('.sign-up-btn');
  // console.log(loginbtn);
  const login=document.querySelector('#login-form'); 
  // console.log(login);
  const register=document.querySelector('.register');
  // console.log(register);
 loginbtn.onclick=function()
 {
  console.log('hgjhgjhgj');
    const forms = document.querySelectorAll('.form');
    // console.log(forms);
    forms.forEach(el =>{
       register.style.display='none';
       login.style.display='block';
      
    })
    
   
 }
 signupbtn.onclick=function()
 {
  console.log('hgjhgjhgj');
    const forms = document.querySelectorAll('.form');
    // console.log(forms);
    forms.forEach(el =>{
       register.style.display='block';
       login.style.display='none';
      
    })
    
   
 }
 const eye_icon=document.querySelector('.eye-icon');
 const pass=document.querySelector('#pass');
 console.log(eye_icon.classList);
eye_icon.onclick=function(){
  if(pass.type=="password"){
    pass.type="text";
    // eye_icon.classList.remove('fa');
    eye_icon.classList.remove('fa-eye');
    eye_icon.classList.remove('fa-sharp');
    eye_icon.classList.remove('fa-solid');
    eye_icon.classList.add('fa-regular');
    eye_icon.classList.add('fa-eye-slash');

}
  else{
    pass.type="password";
    eye_icon.classList.add('fa-eye');
    eye_icon.classList.add('fa-sharp');
    eye_icon.classList.add('fa-solid');
    eye_icon.classList.remove('fa-regular');
    eye_icon.classList.remove('fa-eye-slash');
  }

}

   