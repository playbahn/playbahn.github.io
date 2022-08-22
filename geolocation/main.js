let myDet = document.getElementById('details');
let myButton = document.getElementById('button');
let id;
const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};
function get_stopLocation() {
    if (myButton.textContent === `Stop`) {
        navigator.geolocation.clearWatch(id);
        myDet.innerHTML = "Latitude: <br>Longitude: ";
        myButton.textContent = `Try it`;
    } else if (myButton.textContent === `Try it`) {
        if (navigator.geolocation) {
            id = navigator.geolocation.watchPosition(success, showError, options);
        } else {
            myDet.innerHTML = "Latitude: <br>Longitude: <br><br>Geolocation is not supported by this browser.";
        }
    }
}
function success(position) {
    myDet.innerHTML = "Latitudes: " + position.coords.latitude +
                      "<br>Longitude: " + position.coords.longitude;
    myButton.textContent = `Stop`;
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            myDet.innerHTML = "Latitude: <br>Longitude: <br><br>User denied the request for location sharing!"; break;
        case error.TIMEOUT:
            myDet.innerHTML = "Latitude: <br>Longitude: <br><br>The request to get user location timed out."; break;
        case error.POSITION_UNAVAILABLE:
            myDet.innerHTML = "Latitude: <br>Longitude: <br><br>Location information is unavailable!"; break;
        case error.UNKNOWN_ERROR:
            myDet.innerHTML = "Latitude: <br>Longitude: <br><br>An unknown error occurred."; break;
    }
}
myButton.onclick = () => { get_stopLocation(); }