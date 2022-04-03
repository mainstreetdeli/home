var today = new Date();
var day = today.getDay();
var hour = today.getHours();

var sign;
var signCssClass;

if (day >= 0 && day <= 4) {
    if (hour >= 5 && hour < 21) {
        sign = "OPEN";
        signCssClass = "open-sign";
    }
    else if (hour >= 21 && hour < 22) {
        sign = "CLOSING SOON";
        signCssClass = "closing-soon-sign";
    }
    else {
        sign = "CLOSED";
        signCssClass = "closed-sign";
    }
}
else if (day > 4) {
    if (hour >= 5 && hour < 23) {
        sign = "OPEN";
        signCssClass = "open-sign";
    }
    else if (hour >= 23 && hour < 24) {
        sign = "CLOSING SOON";
        signCssClass = "closing-soon-sign";
    }
    else {
        sign = "CLOSED";
        signCssClass = "closed-sign";
    }
}

document.write(
    `<div><h3 class='${signCssClass}' style='display: inline-block;'>${sign}</h3><h4 id='demo' style='display: inline-block; margin-left: 12px; color: grey;'><img id='' style='margin-bottom: 5px;' src='images/Eclipse-0.6s-31px.svg' alt='loading..'></h4></div><br>`
);