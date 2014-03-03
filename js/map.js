// map javascript

/*Hi Dave, I've commented out the code that's not working
 *I've also written notes on what I was trying to do
 *At this point this is a somewhat working prototype, march 2, 2014
 */

//alert("javascript is working");

var cloudmadeUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg';
            var subDomains = ['otile1','otile2','otile3','otile4'];
            var cloudmadeAttrib = 'Data, imagery and map information provided by <a href="http://open.mapquest.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>';  //mapQuest isn't ideal, but it is working
            var cloudmade = new L.TileLayer(cloudmadeUrl,
                                            {maxZoom: 18,
                                            attribution: cloudmadeAttrib,
                                            subdomains: subDomains});

            var vancouver = new L.LatLng(49.32535, -123.06808);

            var map = new L.Map('map', {center: vancouver, zoom: 13, layers : [cloudmade]});// end of var cloudmadeurl
            
map.locate({setView: true, maxZoom: 16});


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at <br> " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

function onLocationFound(e) {
    var radius = e.accuracy / 0.5; //make this number smaller to make the circle bigger

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);


var ballIcon = L.Icon.extend({
    options: {
        iconSize:     [30, 30],   
        iconAnchor:   [15, 15], 
        popupAnchor:  [-3, -16]
    }
});

var oneStarIcon = new ballIcon({iconUrl: 'images/1star.png'}),
    twoStarIcon = new ballIcon({iconUrl: 'images/2star.png'}),
    threeStarIcon = new ballIcon({iconUrl: 'images/3star.png'}),
    fourStarIcon = new ballIcon({iconUrl: 'images/4star.png'}),
    fiveStarIcon = new ballIcon({iconUrl: 'images/5star.png'}),
    sixStarIcon = new ballIcon({iconUrl: 'images/6star.png'}),
    sevenStarIcon = new ballIcon({iconUrl: 'images/7star.png'});
    
L.icon = function (options) {
    return new L.Icon(options);
};

//L.marker(e.latlng, {icon: oneStarIcon}).addTo(map).bindPopup("I am the first dragonball.");
//playing with this let me know i have to grab the value of e.latlng before inputting it into the marker

L.marker([49.32154, -123.06275], {icon: oneStarIcon}).addTo(map).bindPopup("I am the first dragonball.");
L.marker([49.32149, -123.0831], {icon: twoStarIcon}).addTo(map).bindPopup("I am the second dragonball.");
L.marker([49.31186, -123.08138], {icon: threeStarIcon}).addTo(map).bindPopup("I am the third dragonball.");
L.marker([49.31628, -123.06842], {icon: fourStarIcon}).addTo(map).bindPopup("I am the fourth dragonball.");
L.marker([49.32881, -123.08121], {icon: fiveStarIcon}).addTo(map).bindPopup("I am the fifth dragonball.");
L.marker([49.3099, -123.05992], {icon: sixStarIcon}).addTo(map).bindPopup("I am the sixth dragonball.");
L.marker([49.33485, -123.07014], {icon: sevenStarIcon}).addTo(map).bindPopup("I am the seventh dragonball.");
// right now the markers are static because I can't figure out how to randomize the gps numbers based on the user's geolocation


/*function randomNum(){
    //document.write(Math.floor(Math.random()*11));
    document.getElementById("demo").innerHTML=(Math.floor(Math.random()*0.0001));//    Math.random()
}
* this is the function I was using to try and get the random function to work
* the logic was that I would add or subtract the .000* number from the gps for the dragon ball locations
* the code would take the e.latlng number retrieved from the geolocation function
* another way is to drop dragonball pins based on the radius of the user's phone
* I'm skipping this step and just using static pins to demonstrate how the app will work eventually
*/


/*L.edgeMarker({'radius':20}).addTo(map);
 *this is me trying, and failing, to add indicators there are more dragonballs to the map
 *
 */
//http://grid.kevinbock.de/wp-content/uploads/2012/12/blocks.png


/*var imageUrl = 'images/dbzgrid.png'
    //imageBounds = [[49.34872, -123.09837], [49.30531, -123.03795]]
    ;

L.imageOverlay(imageUrl).addTo(map);

//L.imageOverlay(imageUrl, imageBounds).addTo(map);
* I spent two hours trying to make the green grid backround work in the map, with the dragonballs over it
* if you comment this out, it will work, but the image stays in one place and i can't figure out how to make it repeat
* i did try and make a custom map tile, but that also isn't working
* right now it's a .gif prototype 
*/

$(function() {
    
}); // end of jQuery wrapper