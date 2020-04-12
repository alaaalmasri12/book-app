'use strict';
alert("js is a live");
var Humbergerbtn = $("#humrger-btn");
var nav = $('#nav');
var menu = $("#menu")
$("#humrger-btn").on('click', () => {
    $(this).toggleClass('change');
    $(nav).toggleClass('change');
    $(menu).toggleClass("change-bg");
    $("#main-header").toggleClass("display");

})
