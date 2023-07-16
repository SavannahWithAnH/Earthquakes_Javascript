# Earthquakes
Javascript- Leaflet, HTML, CSS

### To access my project please utilize Live Server or another tool to open the HTML file.  

## Getting started  
    // earthquake data
    let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson"

    // d3
    d3.json(queryUrl).then(function (data) {

    console.log(data);

    // geojson layer from leafletjs documentation
    var geojsonMarkerOptions = {
        radius: 7,
        fillColor: "#6a5acd",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.75
    };

    L.geoJSON(data, { 
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        },

        //popup with details via leaflet documentation
        onEachFeature: function onEachFeature(feature, layer) {
            layer.bindPopup(`
            <h3>${feature.properties.place}</h3>
            <hr>
            <p>${new Date(feature.properties.time)}</p>   
            <h3>Magnitude: ${feature.properties.mag}</h3>
            <h3>Depth: ${feature.geometry.coordinates[2]}</h3>`);
      }
    }).addTo(earthquakes);

    }); 
  
Using d3 to extract data, and adding Leaflets GeoJson layer  

## Earthquake Visualization

<img width="542" alt="image" src="https://github.com/SavannahWithAnH/Earthquakes_HTML/assets/126124356/583b117a-5570-4aac-93de-30fb5d343c6e">

## Adding the legend  
<img width="656" alt="image" src="https://github.com/SavannahWithAnH/Earthquakes_HTML/assets/126124356/9e794eca-6272-426e-b3a5-798ed5134119">  

## How to fetch the dataset
The USGS provides earthquake data in a number of different formats, updated every 5 minutes. The following image is an example screenshot of what appears when a user visits [this link](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).

![image](https://github.com/SavannahWithAnH/Earthquakes_HTML/assets/126124356/4fc21cd4-f440-4ce5-af7c-562cfadd9468)

### Imported and visualized the data by doing the following:
Using Leaflet, I created a map that plots all the earthquakes from your dataset based on their longitude and latitude.

Note: Data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes will appear larger, and earthquakes with greater depth will appear darker in color.
* Includes popups that provide additional information about the earthquake when its associated marker is clicked.


<br>
<br>  
<br>  

### Questions?
Please refer to the following:  
[My LinkedIn Page](https://www.linkedin.com/in/savannah-porter-7a2627267/)  
[My Email Contact](savannahnporter@gmail.com)  
