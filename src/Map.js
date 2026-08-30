



//DATA
//Created a class specifically for volunteerLocations
class volunteerLocations{
    constructor(name,coords,status){
        this.name = name;
        this.coords = coords;
        this.status = status;
        }}
//created instances of the class stored in volunteerLocations
const Volunteerlocations = [
    new volunteerLocations('Wah Cantt', [33.748,72.7847],"active"),
    new volunteerLocations('Islamabad', [33.683,73.0479], "expanding"),
    new volunteerLocations('Rawalpindi', [33.749375, 73.005815], "expanding"),
    new volunteerLocations('Margalla Region', [33.749375, 73.005815],"expanding")]
//Does not allow to pan beyon Pakistan
 const pakistaniBounds = L.latLngBounds(
      L.latLng(23.5000, 60.5000), 
      L.latLng(37.5000, 78.5000)  
    );

//MAIN FUNC
//Orchestrator function that calls all other functions to render maps, markers and clusters
export function initRegionMap(mapRegion){
    try{
    var map = L.map(mapRegion, {
        maxBounds: pakistaniBounds,
        maxBoundsViscosity: 1
    });

    map.invalidateSize();
    renderingMap(map);
    
    let markers = createMarkers(map);
    createCustomCluster(markers,map);
    displayLocations(markers,map);
    requestAnimationFrame(() => map.invalidateSize());
    return map;

    }

    catch(err){
    console.error("initRegionMap failed:", err);
    return;} };
//FUNCTIONN
//displays the region with the markers not beyond
function displayLocations(markers,map){
     map.fitBounds(markers.map((marker) => marker.getLatLng()), {
        padding: [60, 60],
      });


}

//rendeingMap displays the portion of the map required for displaying 

function renderingMap(map){
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }).addTo(map);
}

//Creates all the markers
function createMarkers(map){

    const markers = Volunteerlocations.map((currentLocation )=> L.marker(currentLocation.coords, {
        icon: customMarker(currentLocation.status)}).bindPopup(`<strong>${currentLocation.name}</strong><br>${currentLocation.status}`)
     );

    return markers;



}


// creates the cluster of markers
function createCustomCluster(markers,map){
   const customClusterLayer = window.L.markerClusterGroup(
    {
        iconCreateFunction: customCluster,
        maxClusterRadius: 1000
    }
    
);
    customClusterLayer.addLayers(markers);
    map.addLayer(customClusterLayer);
   
}

// Describes how the custom marker should be described =borrowed from the previous code- should look like
const customMarker = (status) => {
    return L.divIcon({
      className: "map-marker-wrap",
      html: `<span class="map-marker map-marker--${status}"><span class="map-marker__halo"></span><span class="map-marker__core"></span></span>`,
      iconSize: [110, 110],
      iconAnchor: [55, 55],
    });
}
//Describes a custom cluster.
//Added custom css for this
const customCluster = (cluster) => {

    return L.divIcon({
        html: '<span class = "custom-cluster">'+ cluster.getChildCount() +'</div>',

    })
}



