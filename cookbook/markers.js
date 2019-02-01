/**
 * Chapter 3
 * Using point features as markers
 *
 * Peter J Langley
 * http://www.codechewing.com
 */
var createIconStyle = function(cadena) {
    return new ol.style.Style({
        image: new ol.style.Icon({
            src: 'zorro_images/' + cadena + '.png'
        })
    })
};

var transfPoint = function(lng, lat) {
    return new ol.Feature(new ol.geom.Point(ol.proj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')));
};

var mapLat = 19.4699048;
var mapLng = -99.2368049;

var zpr = transfPoint(-99.2355975, 19.4673281);
var zes = transfPoint(-99.3044248, 19.493979);

//var niger = new ol.Feature(new ol.geom.Point([968610, 1986139]));

zpr.setStyle(createIconStyle('zorro'));
zes.setStyle(createIconStyle('zorro'));

//niger.setStyle(createIconStyle('niger'));

var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        //features: [algeria, libya, niger]
        features: [zpr, zes],
    })
});

var map = new ol.Map({
    view: new ol.View({
        zoom: 12,
        center: ol.proj.transform([mapLng, mapLat], 'EPSG:4326', 'EPSG:3857')
        //center: [ mapLng, mapLat]
    }),
    target: 'js-map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({layer: 'osm'})
        }),
        vectorLayer
    ]
});