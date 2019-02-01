var baseMapLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
});
var map = new ol.Map({
  target: 'map',
  layers: [ baseMapLayer],
  view: new ol.View({
          center: ol.proj.fromLonLat([-99.3284169,19.6214412]), 
          zoom: 17//Initial Zoom Level
        })
});

//Adding a marker on the map
var marker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-99.3044248,19.493979], [-99.2445412,19.4666842])
  ),  // Cordinates of New York's Town Hall
});
var vectorSource = new ol.source.Vector({
  features: [marker]
});
var markerVectorLayer = new ol.layer.Vector({
  source: vectorSource,
});

var marker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-99.3284169,19.6214412])
  ),  
});

marker.setStyle(new ol.style.Style({
        image: new ol.style.Icon(({
	    color: '#FF0000',
            crossOrigin: 'anonymous',
//            src: 'dot.png'
		src: 'https://openlayers.org/en/v4.0.1/examples/data/dot.png',
        }))
    }));

map.addLayer(markerVectorLayer);
