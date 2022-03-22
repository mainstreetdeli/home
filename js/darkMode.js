var isDarkModeEnabled = false;
var hour = new Date().getHours();

var logo_bar = document.getElementsByClassName("logo-bar");
var popular_item_text = document.getElementsByClassName("popular-item-text");
var modal = document.getElementsByClassName("modal-content");
var menu_heading = document.getElementsByClassName("menu-heading");
var th = document.getElementsByTagName("th");
var tr = document.getElementsByTagName("td");

// schedule dark mode from 8PM to 6AM
document.addEventListener('DOMContentLoaded', (event) => {
    if(((hour >= 20 && hour <= 23) || (hour >= 0 && hour <= 6))){
        DarkModeOn();
        isDarkModeEnabled = true;
    }
});

// can be used in future by a button to toggle dark mode on or off
function enableDarkMode(){
    if(!isDarkModeEnabled){
        DarkModeOn();
        isDarkModeEnabled = true;
    }
    else{
        DarkModeOff();
        isDarkModeEnabled = false;
    }
}

// function to turn on dark mode
function DarkModeOn(){

    document.body.style.backgroundColor = "#202124";

    for(i = 0; i < logo_bar.length; i++) {
        logo_bar[i].style.backgroundColor = '#202124';
        logo_bar[i].style.color = '#86A3BA';
    }

    for(i = 0; i < popular_item_text.length; i++) {
        popular_item_text[i].style.color = 'lightgrey';
    }

    for(i = 0; i < modal.length; i++) {
        modal[i].style.backgroundColor = '#202124';
        modal[i].style.color = 'lightgrey';
    }

    for(i = 0; i < menu_heading.length; i++) {
        menu_heading[i].style.backgroundColor = "#202124";
        menu_heading[i].style.color = '#86A3BA';
    }

    for(i = 0; i < th.length; i++) {
        th[i].style.color = "lightgrey";
    }

    for(i = 0; i < tr.length; i++) {
        tr[i].style.color = "lightgrey";
    }
}

// function to disable dark mode
function DarkModeOff(){

    document.body.style.backgroundColor = "#f1f5f8";

    for(i = 0; i < logo_bar.length; i++) {
        logo_bar[i].style.backgroundColor = '#f1f5f8';
        logo_bar[i].style.color = '#3A5F7C';
    }

    for(i = 0; i < popular_item_text.length; i++) {
        popular_item_text[i].style.color = 'black';
    }

    for(i = 0; i < modal.length; i++) {
        modal[i].style.backgroundColor = '#f1f5f8';
        modal[i].style.color = 'black';
    }

    for(i = 0; i < menu_heading.length; i++) {
        menu_heading[i].style.backgroundColor = "#f1f5f8";
        menu_heading[i].style.color = '#86A3BA';
    }

    for(i = 0; i < th.length; i++) {
        th[i].style.color = "black";
    }

    for(i = 0; i < tr.length; i++) {
        tr[i].style.color = "black";
    }
}