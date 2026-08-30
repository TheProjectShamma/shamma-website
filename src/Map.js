



//DATA
class volunteerLocations{
    constructor(name,coords,status){
        this.name = name;
        this.coords = coords;
        this.status = status;
        }}




const Volunteerlocations = [
    new volunteerLocations('Wah Cantt', [33.748,72.7847],"active"),
    new volunteerLocations('Islamabad', [33.683,73.0479], "expanding"),
    new volunteerLocations('Rawalpindi', [33.749375, 73.005815], "expanding"),
    new volunteerLocations('Margalla Region', [33.749375, 73.005815],"expanding")]

 const pakistaniBounds = L.latLngBounds(
      L.latLng(23.5000, 60.5000), 
      L.latLng(37.5000, 78.5000)  
    );

//MAIN FUNC

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

function displayLocations(markers,map){
     map.fitBounds(markers.map((marker) => marker.getLatLng()), {
        padding: [60, 60],
      });


}

function renderingMap(map){
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }).addTo(map);
}
function createMarkers(map){

    const markers = Volunteerlocations.map((currentLocation )=> L.marker(currentLocation.coords, {
        icon: customMarker(currentLocation.status)}).bindPopup(`<strong>${currentLocation.name}</strong><br>${currentLocation.status}`)
     );

    return markers;



}
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
const customMarker = (status) => {
    return L.divIcon({
      className: "map-marker-wrap",
      html: `<span class="map-marker map-marker--${status}"><span class="map-marker__halo"></span><span class="map-marker__core"></span></span>`,
      iconSize: [110, 110],
      iconAnchor: [55, 55],
    });
}
const customCluster = (cluster) => {

    return L.divIcon({
        html: '<span class = "custom-cluster">'+ cluster.getChildCount() +'</div>',

    })
}



