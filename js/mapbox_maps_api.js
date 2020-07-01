mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 16,
    center: [-97.7358147, 30.26588],
    minPitch: 20,
    maxPitch: 20
});


var markerOptions = {
    color: "red",
};
var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-97.7358147, 30.26588])
    .addTo(map);

var popup = new mapboxgl.Popup()
    .setLngLat([-97.7358147, 30.26588])
    .setHTML("<p>Easy Tiger</p>" +
        "Great Spot For Beer")
    .addTo(map);
marker.setPopup(popup);


var markerOptions = {
    color: "red",
    draggable: false,
    pitchAlignment: true
};
var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-97.7366814, 30.2664429])
    .addTo(map);
var popup = new mapboxgl.Popup()
    .setLngLat([-97.7366814, 30.2664429])
    .setHTML("<p>Daruma Ramen</p>" +
        "Noodles, Onigiri And More")
    .addTo(map);
marker.setPopup(popup);


var markerOptions = {
    color: "red",

};
var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-97.7378113, 30.2664255])
    .addTo(map);
var popup = new mapboxgl.Popup()
    .setLngLat([-97.7378113, 30.2664255])
    .setHTML("<p>Casino El Camino</p>" +
        "Big Juicy Burgers")
    .addTo(map);
marker.setPopup(popup);


map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');


var restaurants = [
    {
        name: "California Pizza Kitchen",
        address: "12 May St. Worcester, MA",
        popupHTML: "<p>'Zzza Brah</p>"
    },
    {
        name: "California Pizza Kitchen",
        address: "123 Main St, Bakersfield, CA",
        popupHTML: "<p>'Zzza Brah</p>"
    },
    {
        name: "California Pizza Kitchen",
        address: "15 Main St, Portland, ME",
        popupHTML: "<p>'Zzza Brah</p>"
    },
    {
        name: "California Pizza Kitchen",
        address: "4567 Hollywood Blvd, Los Angeles, Ca",
        popupHTML: "<p>'Zzza Brah</p>"
    },
    {
        name: "California Pizza Kitchen",
        address: "1200 Main St, Omaha, NE",
        popupHTML: "<p>'Zzza Brah</p>"
    }
];
// restaurants.forEach(function(restaurant) {
        // geocode(search:restaurant.address, mapboxToken).then(function ()
    // {
        // console.log();
        // map.setZoom(5);
    // })
    // });


