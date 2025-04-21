

console.log(maptoken);
maptilersdk.config.apiKey = maptoken;
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element in which the SDK will render the map
  style: maptilersdk.MapStyle.STREETS,
  center:listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 10// starting zoom
});
// console.log(coordinates);
const marker = new maptilersdk.Marker({color:"red"})
.setLngLat(listing.geometry.coordinates)
.setPopup(new maptilersdk.Popup({ closeOnClick: false })

.setHTML(`<h3>${listing.location}</h3><p>Exact location provided after booking</p>`)
)
.addTo(map);