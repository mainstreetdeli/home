var today = new Date();
var day = today.getDay();
var hour = today.getHours();

if(day>=0 && day<=4){
    if(hour >= 5 && hour < 21){
    document.write(
    "<div><h3 class='open-sign' style='display: inline-block;'>OPEN</h3><h4 id='demo' style='display: inline-block; margin-left: 12px; color: grey;'><img id='' style='margin-bottom: 5px;' src='images/Eclipse-0.6s-31px.svg' alt='loading..'></h4></div><br>"
    );
    }
    else if (hour >= 21 && hour <22){
        document.write(
        "<div><h3 class='closing-soon-sign' style='display: inline-block;'>CLOSING SOON</h3><h4 id='demo' style='display: inline-block; margin-left: 12px; color: grey;'><img id='' style='margin-bottom: 5px;' src='images/Eclipse-0.6s-31px.svg' alt='loading..'></h4></div><br>"
        );
    }
    else{
        document.write(
        "<div><h3 class='closed-sign' style='display: inline-block;'>CLOSED</h3><h4 id='demo' style='display: inline-block; margin-left: 12px; color: grey;'><img id='' style='margin-bottom: 5px;' src='images/Eclipse-0.6s-31px.svg' alt='loading..'></h4></div><br>"
        );
    }
}
else if(day > 4){
    if(hour >= 5 && hour < 23){
    document.write(
    "<div><h3 class='open-sign' style='display: inline-block;'>OPEN</h3><h4 id='demo' style='display: inline-block; margin-left: 12px; color: grey;'><img id='' style='margin-bottom: 5px;' src='images/Eclipse-0.6s-31px.svg' alt='loading..'></h4></div><br>"
    );
    }
    else if (hour >= 23 && hour <24){
        document.write(
        "<div><h3 class='closing-soon-sign' style='display: inline-block;'>CLOSING SOON</h3><h4 id='demo' style='display: inline-block; margin-left: 12px; color: grey;'><img id='' style='margin-bottom: 5px;' src='images/Eclipse-0.6s-31px.svg' alt='loading..'></h4></div><br>"
        );
    }
    else{
        document.write(
        "<div><h3 class='closed-sign' style='display: inline-block;'>CLOSED</h3><h4 id='demo' style='display: inline-block; margin-left: 12px; color: grey;'><img id='' style='margin-bottom: 5px;' src='images/Eclipse-0.6s-31px.svg' alt='loading..'></h4></div><br>"
        );
    }
}