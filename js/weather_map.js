"use strict";



mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 6,
    center: [-98.4936, 29.4241],
});


//MARKER DRAG FUNCTION

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4936, 29.4241])
    .addTo(map);

function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    var longitudeinal = lngLat.lng + ',' + lngLat.lat;
    lngLat = lngLat.lat.toFixed(3) + ',' + lngLat.lng.toFixed(3);
    console.log(lngLat);

    $.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + longitudeinal + ".json?access_token=" + mapboxgl.accessToken).done(function (e) {
        console.log(e.features[0].place_name);
        $("#locationBanner").html(e.features[0].place_name);
    });

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lngLat)
        .done(function (data) {
            {
                $('#weatherDay1').empty().append(
                    '<div class="icon"><img src="svg/' + data.currently.icon + '.svg"' + '</div>' +
                    '<div class="temp">CURRENTLY: <br>' + data.currently.temperature + '</div>' +
                    '<div class="date">' + (Date(data.currently.time * 1000)) + '</div>' +
                    '<div class="summary">' + data.currently.summary + '</div>' +
                    '<div class="hiLo">' + data.daily.data[0].temperatureHigh + '/' + data.daily.data[0].temperatureLow);
                $('#weatherDay2').empty().append(
                    '<div class="icon"><img src="svg/' + data.hourly.icon + '.svg"' + '</div>' +
                    '<div class="summary">Tomorrow:<br>' + data.hourly.summary + '</div>' +
                    '<div class="temp">' + data.daily.data[1].temperatureHigh + '/' + data.daily.data[2].temperatureLow);
                $('#weatherDay3').empty().append(
                    '<div class="icon"><img src="svg/' + data.daily.icon + '.svg"' + '</div>' +
                    '<div class="summary">Through The Week:<br>' + data.daily.summary + '</div>' +
                    '<div class="temp">' + data.daily.data[7].temperatureHigh + '/' + data.daily.data[7].temperatureLow);
                console.log(data);
                console.log(Date(data.currently.time * 1000))
            }
        });
}

marker.on('dragend', onDragEnd);


//LAT LONG FUNCTION
$('#clickme').click(function () {

    var lngLat = $('#long').val() + ", " + $('#lat').val();
    var longitudeinal = $('#lat').val() + ", " + $('#long').val();

    $.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + longitudeinal + ".json?access_token=" + mapboxgl.accessToken).done(function (e) {
        console.log(e.features[0].place_name);
        $("#locationBanner").html(e.features[0].place_name);
    });

// weather data weather data weather data weather data

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lngLat)
        .done(function (data) {
            {
                $('#weatherDay1').empty().append(
                    '<div class="icon"><img src="svg/' + data.currently.icon + '.svg"' + '</div>' +
                    '<div class="temp">CURRENTLY: <br>' + data.currently.temperature + '</div>' +
                    '<div class="date">' + (Date(data.currently.time * 1000)) + '</div>' +
                    '<div class="summary">' + data.currently.summary + '</div>' +
                    '<div class="hiLo">' + data.daily.data[0].temperatureHigh + '/' + data.daily.data[0].temperatureLow);
                $('#weatherDay2').empty().append(
                    '<div class="icon"><img src="svg/' + data.hourly.icon + '.svg"' + '</div>' +
                    '<div class="summary">Tomorrow:<br>' + data.hourly.summary + '</div>' +
                    '<div class="temp">' + data.daily.data[1].temperatureHigh + '/' + data.daily.data[2].temperatureLow);
                $('#weatherDay3').empty().append(
                    '<div class="icon"><img src="svg/' + data.daily.icon + '.svg"' + '</div>' +
                    '<div class="summary">Through The Week:<br>' + data.daily.summary + '</div>' +
                    '<div class="temp">' + data.daily.data[7].temperatureHigh + '/' + data.daily.data[7].temperatureLow);
                console.log(data);
                console.log(Date(data.currently.time * 1000))
            }

            $('.fly').click(function () {
                map.flyTo({
                    center: [data.longitude, data.latitude],
                    essential: true
                });
            });

        });
});


// geocoder functionality

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3YmFsbDE5NzkiLCJhIjoiY2s2dHRzenVkMDJ2MDNtbXRwdTlhaGlydyJ9.rCip9yjihsIVoxSSb1WS4g';

var geocoder =
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
    });
map.addControl(geocoder);

geocoder.on('result', function (e) {
    console.log(e);
    $("#locationBanner").html(e.result.place_name);
    var lngLat = (e.result.center[1]) + ", " + (e.result.center[0]);

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lngLat)
        .done(function (data) {
            {
                $('#weatherDay1').empty().append(
                    '<div class="icon"><img src="svg/' + data.currently.icon + '.svg"' + '</div>' +
                    '<div class="temp">CURRENTLY: <br>' + data.currently.temperature + '</div>' +
                    '<div class="date">' + (Date(data.currently.time * 1000)) + '</div>' +
                    '<div class="summary">' + data.currently.summary + '</div>' +
                    '<div class="hiLo">' + data.daily.data[0].temperatureHigh + '/' + data.daily.data[0].temperatureLow);
                $('#weatherDay2').empty().append(
                    '<div class="icon"><img src="svg/' + data.hourly.icon + '.svg"' + '</div>' +
                    '<div class="summary">Tomorrow:<br>' + data.hourly.summary + '</div>' +
                    '<div class="temp">' + data.daily.data[1].temperatureHigh + '/' + data.daily.data[2].temperatureLow);
                $('#weatherDay3').empty().append(
                    '<div class="icon"><img src="svg/' + data.daily.icon + '.svg"' + '</div>' +
                    '<div class="summary">Through The Week:<br>' + data.daily.summary + '</div>' +
                    '<div class="temp">' + data.daily.data[7].temperatureHigh + '/' + data.daily.data[7].temperatureLow);
                console.log(data);
                console.log(Date(data.currently.time * 1000))
            }

            $('.fly').click(function () {
                map.flyTo({
                    center: [data.longitude, data.latitude],
                    essential: true
                });
            });

        });
});
