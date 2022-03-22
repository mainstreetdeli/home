document.addEventListener('DOMContentLoaded', (event) => {

    var today = new Date();
    var hour = today.getHours();

    var logo_bar = document.getElementsByClassName("logo-bar");
    var menu_heading = document.getElementsByClassName("menu-heading");
    var Item_table = document.getElementsByClassName("Item-table");

    var th = document.getElementsByTagName("th");
    var tr = document.getElementsByTagName("td");

    //if(hour >= 20){

        // Dim the body of the page
        document.body.style.backgroundColor = "#202124";

        // Dim logo bar
        for(i = 0; i < logo_bar.length; i++) {
            logo_bar[i].style.backgroundColor = '#202124';
            logo_bar[i].style.color = '#86A3BA';
        }

        // Dim Menu headings
        for(i = 0; i < menu_heading.length; i++) {
            menu_heading[i].style.backgroundColor = "#202124";
            menu_heading[i].style.color = '#86A3BA';
        }

        // Light menu items headings
        for(i = 0; i < th.length; i++) {
            th[i].style.color = "lightgrey";
        }

        // Light menu items
        for(i = 0; i < tr.length; i++) {
            tr[i].style.color = "lightgrey";
        }
});