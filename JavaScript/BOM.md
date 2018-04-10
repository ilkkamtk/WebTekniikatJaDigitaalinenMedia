# BOM - Browser Object Model
Browser Object Model on kokoelma ominaisuuksia joilla käistellään mm. selainikkunaa ja ikkunoiden väistä kommunikointia. BOM ei ole standardi, joten eri selainten välillä on pieniä eroja. 

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
### [setInterval-metodi](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
`setInterval()`-metodin avulla voidaan kutsua funktiota tietyin väliajoin. `setInterval()`-metodi palauttaa `interval ID`:n, jonka avulla intervalli voidaan myöhemmin pysäyttää kutsumalla `clearInterval()`-metodia
```javascript
const moikkaa = () => {
  console.log('moro');
}

const intervalli = setInterval(moikkaa, 1000);
```
* yllä olevassa koodissa luodaan funktio `moikkaa` joka ajetaan `setInterval()`-metodin avulla sekunnin välein. Aika ilmoitetaan millisekunteina. Jos halutaan pysäyttää kyseinen intervalli, käytetään seuraavaa komentoa:
```javascript
clearInterval(intervalli);
```
## [document -olio](https://developer.mozilla.org/fi/docs/Web/API/Document)
Kuuluu sekä BOMiin sekä DOM -standardiin
## [history -olio](https://developer.mozilla.org/fi/docs/Web/API/History)
History -olio sisältää selainikkunan historian.
## navigator-olio
## location-olio
## screen-olio
## evästeet