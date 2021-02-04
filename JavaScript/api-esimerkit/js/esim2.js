'use strict';
// näytetään kartta ja keskitetään johonkin (60.189,24.966)
const map = L.map('map').setView([60.189, 24.966], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// haetaan helsingin parkkipaikat
// parkkipaikkoja on monta sivua, joten homma täytyy hoitaa synkronisesti
// (nykyaikaisempi tapa olisi toki käyttää fetchiä Promise.all funktion kanssa.
let sivu = 1; // aloitetaan sivusta 1
for (; ;) { // ikuinen for luuppi
  const xhr = new XMLHttpRequest();
  xhr.open('get',
      'https://pubapi.parkkiopas.fi/public/v1/parking_area/?page=' + sivu,
      false);
  xhr.send(null);
  if (xhr.status === 200) { // jos haku onnistuu...
    const tulos = JSON.parse(xhr.responseText);
    console.log(tulos);
    const parkkikset = tulos.features;
    L.geoJSON(parkkikset, {  // parkkikset on geoJSON featureita joten ne voi suoraan syöttää karttaan
      onEachFeature: onEachFeature, // jos halutaan että parkkipaikkaa klikkaamalla tapahtuu jotain... ks. rivi 31
    }).addTo(map);
    sivu++;
  } else {
    break;  // hos haku ei onnistu lopetetaan for
  }
}

// tämä funktio ajetaan jokaiselle featurelle
function onEachFeature(feature, layer) {
  console.log(feature);
  layer.bindPopup('<h1>Mua klikattiin</h1>');
}
