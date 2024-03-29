// create first tile layer, a layerGroup for the earthquakes and a layer control

// base layers
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

  // baseMaps object.
let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
};

// layerGroup
let earthquakes = new L.layerGroup();

// overlayMap
let overlayMaps = {
    Earthquakes: earthquakes
};

// map creation
let myMap = L.map("map", {
    center: [
        37.09, -95.71
    ],
    zoom: 4,
    layers: [street, earthquakes]
});

// control layer
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap);



