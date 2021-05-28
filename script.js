
function coffee() {
    document.getElementById("coffee").style.display = "flex";
    document.getElementById("burger").style.display = "none";
    document.getElementById("sandwich").style.display = "none";
    document.getElementById("pizza").style.display = "none";
    document.getElementById("fries").style.display = "none";
    document.getElementById("item-name1").style.color = "#bb9356";
    document.getElementById("item-name2").style.color = "#3a3d43";
    document.getElementById("item-name3").style.color = "#3a3d43";
    document.getElementById("item-name4").style.color = "#3a3d43";
    document.getElementById("item-name5").style.color = "#3a3d43";
}
function burger() {
    document.getElementById("coffee").style.display = "none";
    document.getElementById("burger").style.display = "flex";
    document.getElementById("sandwich").style.display = "none";
    document.getElementById("pizza").style.display = "none";
    document.getElementById("fries").style.display = "none";
    document.getElementById("item-name1").style.color = "#3a3d43";
    document.getElementById("item-name2").style.color = "#bb9356";
    document.getElementById("item-name3").style.color = "#3a3d43";
    document.getElementById("item-name4").style.color = "#3a3d43";
    document.getElementById("item-name5").style.color = "#3a3d43";
}
function sandwich() {
    document.getElementById("coffee").style.display = "none";
    document.getElementById("burger").style.display = "none";
    document.getElementById("sandwich").style.display = "flex";
    document.getElementById("pizza").style.display = "none";
    document.getElementById("fries").style.display = "none";
    document.getElementById("item-name1").style.color = "#3a3d43";
    document.getElementById("item-name2").style.color = "#3a3d43";
    document.getElementById("item-name3").style.color = "#bb9356";
    document.getElementById("item-name4").style.color = "#3a3d43";
    document.getElementById("item-name5").style.color = "#3a3d43";
}
function pizza() {
    document.getElementById("coffee").style.display = "none";
    document.getElementById("burger").style.display = "none";
    document.getElementById("sandwich").style.display = "none";
    document.getElementById("pizza").style.display = "flex";
    document.getElementById("fries").style.display = "none";
    document.getElementById("item-name1").style.color = "#3a3d43";
    document.getElementById("item-name2").style.color = "#3a3d43";
    document.getElementById("item-name3").style.color = "#3a3d43";
    document.getElementById("item-name4").style.color = "#bb9356";
    document.getElementById("item-name5").style.color = "#3a3d43";
}
function fries() {
    document.getElementById("coffee").style.display = "none";
    document.getElementById("burger").style.display = "none";
    document.getElementById("sandwich").style.display = "none";
    document.getElementById("pizza").style.display = "none";
    document.getElementById("fries").style.display = "flex";
    document.getElementById("item-name1").style.color = "#3a3d43";
    document.getElementById("item-name2").style.color = "#3a3d43";
    document.getElementById("item-name3").style.color = "#3a3d43";
    document.getElementById("item-name4").style.color = "#3a3d43";
    document.getElementById("item-name5").style.color = "#bb9356";
}
function action() {
    document.getElementById("v1").style.display = "block";
    document.getElementById("v2").style.display = "none";
    action2();
}
function action2() {
    document.getElementById("v2").style.display = "block";
    document.getElementById("v1").style.display = "none";
    action();
}
function initMap() {
    var location = { lat: 22.5591449, lng: 88.3525036 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
