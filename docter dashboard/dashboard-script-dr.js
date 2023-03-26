// declaration
const hambar=document.querySelector('#hambar');
const sidebar=document.querySelector('.side-bar');
const dashbody=document.querySelector('.hero-sec');
const uppernav=document.querySelector('.upper-navbar');

// declaring sub heading
const sub1=document.querySelector('.sub1');
const sub2=document.querySelector('.sub2');
const sub3=document.querySelector('.sub3');
const sub4=document.querySelector('.sub4');
const sub5=document.querySelector('.sub5');
const sub6=document.querySelector('.sub6');

// declaring isdebar
const i1=document.querySelector('.i1');
const i2=document.querySelector('.i2');
const i3=document.querySelector('.i3');
const i4=document.querySelector('.i4');
const i5=document.querySelector('.i5');
const i6=document.querySelector('.i6');
const leftarrow=document.querySelector('#left-arrow')
const slidebtn=document.querySelector('#slide-btn');

// hambar onclick function
hambar.onclick=function(){
    // console.log('hgdghc');
    sidebar.classList.toggle('show-sidebar');
    hambar.classList.toggle('fa-close');
}

// sidebar hide onclick
slidebtn.onclick=function(){
sub1.classList.toggle('sub');
sub2.classList.toggle('sub');
sub3.classList.toggle('sub');
sub4.classList.toggle('sub');
sub5.classList.toggle('sub');
sub6.classList.toggle('sub');
i1.classList.toggle('fa-2x');
i2.classList.toggle('fa-2x');
i3.classList.toggle('fa-2x');
i4.classList.toggle('fa-2x');
i5.classList.toggle('fa-2x');
i6.classList.toggle('fa-2x');
sidebar.classList.toggle('width-100');
slidebtn.classList.toggle('left-82');
leftarrow.classList.toggle('fa-close');
dashbody.classList.toggle('left-100');
uppernav.classList.toggle('left-100');
}
// patient-records down arrow
const downarrow = document.querySelector('.down-arrow');
const precords = document.querySelector('.patient-records');
const downicon = document.querySelector('#down-icon');
downarrow.onclick=function(){
    console.log("kejfhkjdhfk");
    precords.classList.toggle('height-880');
    downicon.classList.toggle('fa-angle-up');
    downarrow.classList.toggle('top-arrow-p');
}
