var map = L.map('map').setView([51.505, -0.09], 12);
L.tile('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 19,
}).addTo(map);