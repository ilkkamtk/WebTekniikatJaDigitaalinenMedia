'use strict';

// näytetään kartta
const map = L.map('map').setView([60.1785553, 24.8786212], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const apiOsoite = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
const proxy = 'https://cors-anywhere.herokuapp.com/';

// haetaan pysakit koordiaattien avulla
function haeReitti(lahto, kohde) {
    // GraphQL haku
    const haku = `{
  plan(
    from: {lat: ${lahto.latitude}, lon: ${lahto.longitude}}
    to: {lat: ${kohde.latitude}, lon: ${kohde.longitude}}
    numItineraries: 1
  ) {
    itineraries {
      legs {
        startTime
        endTime
        mode
        duration
        distance
        legGeometry {
          points
        }
      }
    }
  }
}`;

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query: haku}), // GraphQL haku lisätään queryyn
    };

    // lähetetään haku
    fetch(apiOsoite, fetchOptions).then(function (vastaus) {
        return vastaus.json();
    }).then(function (tulos) {
        console.log(tulos.data.plan.itineraries[0].legs);
        const googleKoodattuReitti = tulos.data.plan.itineraries[0].legs;
        for (let i = 0; i < googleKoodattuReitti.length; i++) {
            let color = '';
            switch (googleKoodattuReitti[i].mode) {
                case 'WALK':
                    color = 'green';
                    break;
                case 'BUS':
                    color = 'red';
                    break;
                case 'RAIL':
                    color = 'cyan'
                    break;
                case 'TRAM':
                    color = 'magenta'
                    break;
                default:
                    color = 'blue';
                    break;
            }
            const reitti = (googleKoodattuReitti[i].legGeometry.points);
            const pisteObjektit = L.Polyline.fromEncoded(reitti).getLatLngs();
            L.polyline(pisteObjektit).setStyle({
                color
            }).addTo(map);
        }
        map.fitBounds([[lahto.latitude, lahto.longitude], [kohde.latitude, kohde.longitude]]);
    }).catch(function (e) {
        console.error(e.message);
    });
}

// käynnistetään pysäkkien haku halutuista koordinaateista 500 metrin säteellä
haeReitti({latitude: 60.24, longitude: 24.74}, {latitude: 60.16, longitude: 24.92})

// tämä funktio ajetaan jokaiselle featurelle
function onEachFeature(sijainti, taso) {
    console.log(taso);
}