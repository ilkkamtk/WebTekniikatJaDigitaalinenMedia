# BOM - Browser Object Model
Browser Object Model on kokoelma ominaisuuksia joilla käsitellään mm. selainikkunaa ja ikkunoiden väistä kommunikointia. BOM ei ole standardi, joten eri selainten välillä on pieniä eroja. 

## [window-olio](https://developer.mozilla.org/en-US/docs/Web/API/Window)
Window-olio tarkoittaa selainikkunaa ja se on tuettu kaikissa selaimissa. Kaikki globaalit JavaScript-oliot, -funktiot ja -muuttujat ovat automaattisesti window-olion jäseniä. Esim:
```javascript
window.document.querySelector('.button')
```
on sama kuin
```javascript
document.querySelector('.button')
```
Eli suurin osa komennoista voidaan kirjoittaa ilman window -sanaa.

### [alert-metodi](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
`alert()`-metodi avaa ponnahdusikkunan, jossa on teksti ja OK-nappi. Tämän avulla voidaan antaa käyttäjälle jokin ilmoitus esim. jonkin toiminnon onnistuessa tai epäonnistuessa. Ohjelman suorittaminen keskeytetään siksi ajaksi, kunnes käyttäjä painaa OK-nappia.
```javascript
alert('Jokin viesti');
```
##### Tehtävä: Kokeile alert-metodia selaimen konsolissa. 

### [confirm-metodi](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
`confirm()`-metodi avaa ponnahdusikkunan, jossa on teksti ja kaksi nappia: OK ja Cancel. Tämän avulla voidaan pytää käyttäjää hyväksymään tai hylkäämään jokin toiminto.
```javascript
const vastaus = confirm('Jokin kysymys');

// tulostetaan vastaus konsoliin
console.log(vastaus);
```
* vastaus on boolean arvo, johon käyttäjän vastaus tallennetaan: OK = true ja Cancel = false.

##### Tehtävä: Kokeile confirm-metodia selaimen konsolissa.

### [prompt-metodi](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
`prompt()`-metodi avaa ponnahdusikkunan, jossa on teksti ja tekstikenttä, johon käyttäjä voi kirjoittaa.
```javascript
const vastaus = prompt('Jokin kysymys', 'Vakioteksti');

// tulostetaan vastaus konsoliin
console.log(vastaus);
```
* vastaus on merkkojono, johon käyttäjän vastaus tallennetaan. Jos tekstikenttä on tyhjä, arvoksi tulee _null_. Vakioteksti on valinnainen parametri. Se näkyy automaattisesti tekstikentässä.

##### Tehtävä: Kokeile prompt-metodia selaimen konsolissa.

## Tapahtumien ajastaminen
### [setTimeout-metodi](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
`setTimeout()`-metodin avulla voidaan kutsua funktiota kerran tietyn ajan kuluttua.
```javascript
function kirjaaJotain(param) {
  console.log(param);
}

setTimeout(kirjaaJotain, 2000, 'Tämä kirjataan');
```
* yllä olevassa koodissa luodaan funktio `kirjaaJotain`, joka ajetaan `setTimeout()`-metodin avulla kahden sekunnin kuluttua. Aika ilmoitetaan millisekunteina.

### [setInterval-metodi](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
`setInterval()`-metodin avulla voidaan kutsua funktiota tietyin väliajoin. `setInterval()`-metodi palauttaa `interval ID`:n, jonka avulla intervalli voidaan myöhemmin pysäyttää kutsumalla `clearInterval()`-metodia
```javascript
function moikkaa() {
  console.log('moro');
}

const intervalli = setInterval(moikkaa, 1000);
```
* yllä olevassa koodissa luodaan funktio `moikkaa` joka ajetaan `setInterval()`-metodin avulla sekunnin välein. Aika ilmoitetaan millisekunteina. Jos halutaan pysäyttää kyseinen intervalli, käytetään seuraavaa komentoa:
```javascript
clearInterval(intervalli);
```
## [document-olio](https://developer.mozilla.org/en-US/docs/Web/API/Window/document)
Kuuluu sekä BOMiin sekä DOM-standardiin
Tarkemmin document-oliosta [DOM-sivulla](DOM.md)
## [history-olio](https://developer.mozilla.org/fi/docs/Web/API/History)
`history`-olio sisältää selainikkunan historian eli ne sivut, joilla on käyty kyseisessä selainikkunassa tai välilehdessä.
```javascript
history.back(); // siirry historiassa taaksepäin
history.forward(); // siirry historiassa eteenpäin
history.go(-2); // siirry historiassa kaksi pykälää taaksepäin
```

## [navigator-rajapinta](https://developer.mozilla.org/en-US/docs/Web/API/navigator)
`navigator`-rajapinnalla voi hakea tietoa selaimesta. Esim. [navigator.gelocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) palauttaa laitteen gps-koordinaatit:
```html
<!-- haetaan käyttäjän paikkatiedot ja näytetään ne OpenStreetMapin ja Leaflet.js:n avulla -->
<div id="map" style="width: 100%; height: 400px;"></div>

<link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.3/leaflet.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.3/leaflet.js"></script>
<script>
    // Asetukset paikkatiedon hakua varten (valinnainen)
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    // Funktio, joka ajetaan, kun paikkatiedot on haettu
    function success(pos) {
      const crd = pos.coords;
    
      // Tulostetaan paikkatiedot konsoliin
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      
      // Käytetään leaflet.js -kirjastoa näyttämään sijainti kartalla (https://leafletjs.com/)
      const map = L.map('map').setView([crd.latitude, crd.longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
  
      L.marker([crd.latitude, crd.longitude]).addTo(map)
      .bindPopup('Olen tässä.')
      .openPopup();
    }
    
    // Funktio, joka ajetaan, jos paikkatietojen hakemisessa tapahtuu virhe
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    // Käynnistetään paikkatietojen haku
    navigator.geolocation.getCurrentPosition(success, error, options);
</script>
```
Navigator rajapinnasta löytyy myös [MediaDevices-rajapinta](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia), jolla voidaan käyttää laitteen kameraa ja/tai mikrofonia. Esim:
```html
<video autoplay></video>

<script>
    // Määritetään videon toivottu koko.
    const options = { video: { width: 1280, height: 720 } };
    
    // Funktio, joka ajetaan, kun kamerasta saadaan kuva
    function success(mediaStream) {
      // Valitaan video-elementti
      const video = document.querySelector('video');
      // Asetetaan kameran striimi video-elementin kuvalähteeksi 
      video.srcObject = mediaStream;
    }
    
    // Funktio, joka ajetaan, jos tapahtuu virhe
    function error(err) { 
      console.warn(`ERROR(${err.name}): ${err.message}`); 
    }
    
    // Käynnistetään kamera
    navigator.mediaDevices.getUserMedia(options).then(success).catch(error);
</script>
```
 
 Joissain tapauksissa, kun halutaan käyttää JavaScriptin tuoreimpia ominaisuuksia, tarvitsee tutkia tukeeko käyttäjän selain ko. ominaisuutta. Vaikka navigator-oliolla on mahdollista [haistella](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent) onko kyseessä esim Chrome tai Internet Explorer, parempi tapa tutkia ominaisuuden toiminta on [feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection). 

## [location-rajapinta](https://developer.mozilla.org/en-US/docs/Web/API/location)
`location`-rajapinta kertoo dokumentin osoitetiedot. Yleensä sitä käytetään selaimen uudelleenohjaukseen:
```javascript
location.href = 'http://metropolia.fi'; 
```