'use strict';
alert("js is a live");
// var Humbergerbtn = $("#humrger-btn");
// var nav=document.getElementById("nav");
// $("#humrger-btn").on('click', () => {
//     $(this).toggle('change');
//     nav.toggle("change");

//     $(".main-header").toggleClass("display");
// })

var Humbergerbtn=document.getElementById("humrger-btn");
Humbergerbtn.addEventListener("click",onclickMenu);
var nav=document.getElementById("nav");


function onclickMenu()
{
    Humbergerbtn.classList.toggle("change");
    nav.classList.toggle("change");
    $(".main-header").toggleClass("display");


}