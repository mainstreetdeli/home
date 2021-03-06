function distance(lon1, lat1, lon2, lat2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2 - lat1).toRad();  // Javascript functions in radians
    var dLon = (lon2 - lon1).toRad();
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

/** Converts numeric degrees to radians */
if (typeof (Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function () {
        return this * Math.PI / 180;
    }
}

navigator.geolocation.getCurrentPosition(function (pos) {
    // console.log(pos);
    // console.log(
    //     distance(pos.coords.longitude, pos.coords.latitude, -74.1315021, 40.4436385)
    // );
    // document.write(distance(pos.coords.longitude, pos.coords.latitude, -74.1315021, 40.4436385))
    document.getElementById("demo").innerHTML = distance(pos.coords.longitude, pos.coords.latitude, -74.1315021, 40.4436385).toFixed(2) + " mi";
}, showError);

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("demo").innerHTML = ""
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("demo").innerHTML = ""
            break;
        case error.TIMEOUT:
            document.getElementById("demo").innerHTML = ""
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("demo").innerHTML = ""
            break;
    }
}







// navigator.permissions && navigator.permissions.query({ name: 'geolocation' })
//     .then(function (PermissionStatus) {
//         if (PermissionStatus.state == 'granted') {
//             function distance(lon1, lat1, lon2, lat2) {
//                 var R = 6371; // Radius of the earth in km
//                 var dLat = (lat2 - lat1).toRad();  // Javascript functions in radians
//                 var dLon = (lon2 - lon1).toRad();
//                 var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//                     Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
//                     Math.sin(dLon / 2) * Math.sin(dLon / 2);
//                 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//                 var d = R * c; // Distance in km
//                 return d;
//             }

//             /** Converts numeric degrees to radians */
//             if (typeof (Number.prototype.toRad) === "undefined") {
//                 Number.prototype.toRad = function () {
//                     return this * Math.PI / 180;
//                 }
//             }

//             navigator.geolocation.getCurrentPosition(function (pos) {
//                 console.log(pos);
//                 console.log(
//                     distance(pos.coords.longitude, pos.coords.latitude, -74.1315021, 40.4436385)
//                 );
//                 // document.write(distance(pos.coords.longitude, pos.coords.latitude, -74.1315021, 40.4436385))
//                 document.getElementById("demo").innerHTML = distance(pos.coords.longitude, pos.coords.latitude, -74.1315021, 40.4436385).toFixed(2) + " mi";
//             });
//         } else if (PermissionStatus.state == 'prompt') {
//             document.getElementById("demo").innerHTML = "location not yet granted"
//         } else {
//             document.getElementById("demo").innerHTML = "location access denied"
//         }
//     })