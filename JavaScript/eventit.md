# Tapahtumankäsittely
Koska JavaScriptiä käytetään interaktiivisuuden lisäämiseen verkkosivuilla, tarvitaan jokin keino miten voidaan vastata käyttäjän tekemiin tai järjestelmässä tapahtuviin toimintoihin ja tapahtumiin.
Tätä keinoa kutsutaan [tapahtumankäsittelyksi, englanniksi event handling.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

Esimerkiksi, jos käyttäjä napsauttaa painiketta, siihen voidaan vastata näyttämällä tietoruutu:
```html
<button>Klikkaa mua</button>
<script>
const nappi = document.querySelector('button');
nappi.addEventListener('click', function(evt){
  alert('Elementtiä' + evt.target + 'klikattiin');
});
</script>
``` 
Yllä olevassa koodissa addEventListener-metodin ensimmäinen parametri 'click' on tapahtuma eli event ja toinen parametri on funktio, jota kutsutaan, kun 'click' tapahtuu.
Toinen parametri voi olla myös viittaus funktioon:
```html
<button>Klikkaa mua</button>
<script>
const nappi = document.querySelector('button');

function popup(evt){
  alert('Elementtiä' + evt.target + 'klikattiin');
}

nappi.addEventListener('click', popup);
</script>
``` 
Huomaa että addEventListenerissä popup-funktiosta puutuvat sulkeet Tämä siksi, että popup-funktiota käytetään tapahtumankäsittelijänä 
eikä sitä kutsuta välittömästi, vaan vasta sitten, kun 'click' tapahtuu. Jos siinä oisi sulkeet, funktio käynnistettäisiin välittömästi.

Tapahtumankäsittelijää kutsutaan myös takaisinkutsufunktioksi (callback).

Tapahtumankäsittelijä ottaa vastaan [tapahtuma-olion](https://developer.mozilla.org/en-US/docs/Web/API/Event) (evt), joka sisältää tietoa tapahtumasta, kuten tapahtuman tyypin ja sen kohteen. Esim `evt.target` palauttaa sen elementin, joka on tapahtuman kohde.
Yllä olevassa esimerkkikoodissä tämä kohde on `<button>`-elementti; 

### [Lista tapahtumista](https://developer.mozilla.org/en-US/docs/Web/Events) 

## Syntaksi
Tapahtumankäsitteyssä voi käyttää kolmea eri syntaksia.

### wanha (90-luku)
Inline syntaksi, jossa tapahtumankäsittelijä määritetään HTML-koodissa. Tätä tapaa tulisi välttää. Tosin joissain frameworkeissä, kuten Angular ja React, tämän kaltaista syntaksia käytetään. Mutta ne ovat erikoistapauksia.
```html
<button onclick="popup()">Klikkaa mua</button>
<script>
function popup(evt){
  alert('Elementtiä' + evt.target + 'klikattiin');
}
</script> 
```

### perinteinen (2000-luku)
[On-tapahtumankäsittelijät](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) ovat näppärä tapa tehdä tapahtumankäsittelyä. Niitä suositellaan käytettäväksi vain yksinkertaisimmissa sovelluksissa.
```html
<button>Klikkaa mua</button>
<script>
const nappi = document.querySelector('button');

function popup(evt){
  alert('Elementtiä' + evt.target + 'klikattiin');
}

nappi.onclick = popup;
</script>
```
### moderni (2010-luku)
[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)-metodia suositellaan käytettäväksi vähänkin laajemmissa sovelluksissa. Sen avulla voidaan samaan tapahtumaan liittää useampi tapahtumankäsittelijä tai tapahtuman kuuntelu voidaan perua sovelluksen eri vaiheissa tarpeen mukaan [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)-metodin avulla.
Tälläistä toimintoa voidaan tarvita esim. silloin, kun halutaan, että painikkeen ensimmäinen napsautus tekee toiminnon A ja toinen napsautus tekee toiminnon B: 
```html
<button>Klikkaa mua</button>
<script>
const nappi = document.querySelector('button');

function A(evt){
  alert('Tämä on funktio A');
  nappi.removeEventListener('click', A);
  nappi.addEventListener('click', B);
}

function B(evt){
  alert('Tämä on funktio B');
}

nappi.addEventListener('click', A);
</script>
```
## Vakiotapahtuman keskeyttäminen
Joillain elementeillä, kuten `<a>` tai `<form>` on vakiotapahtumia. Esim. `<a>` elementtiä klikkaamalla siirrytään `href`-attribuutilla määritettyyn osoitteeseen, tai `<form>`-elementti lähetettäessä avaa `action`-attribuutissa määritetyn osoitteen.
Joissain tapauksissa nätä vakiotoiminnot halutaan keskeyttää. Nykyään aika usein halutaan hoitaa lomakkeen tietojen lähettäminen JavaScriptillä selaimen normaalitoiminnon sijasta. Eli ei haluta, että selain siirtyy `action`-attribuutissa määritettyyn osoitteeseen automaattisesti.
Tällöin käytetään [preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)-metodia:
```html
<form>
  <div>
    <input name="fName" type="text" placeholder="etunimi">
  </div>
  <div>
    <input name="lName" type="text" placeholder="sukunimi">
  </div>
  <div>
    <input name="submit" type="submit" value="Näytä">
  </div>
</form>
<p></p>

<script>
// valitaan elementit
const form = document.querySelector('form');
const fname = document.querySelector('input[name=fName]');
const lname = document.querySelector('input[name=lName]');
const submit = document.querySelector('input[name=submit]');
const p = document.querySelector('p');

// Kun lomake lähetetään...
form.onsubmit = function(evt) {
  // ... estä vakiotapahtuma.
  evt.preventDefault();
  // Tässä voidaan esim. tarkastaa onko lomakkeen kentät täytetty oikein,
  // jonka jälkeen se voitaisiin lähettää esim. fetch-metodilla
  // Nyt kuitenkin tyydytään esimerkin vuoksi tulostamaan käyttäjän syöte.
  p.innerText = `Your name is ${fname.value} ${lname.value}`;
}
</script>
```

## [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
JavaScriptin uudemmissa versioissa tapahtumien sijasta käytetään yhä useammin lupauksia (promise). Lupaus on olio, joka 'lupaa' palauttaa arvon.
Lupauksen etuja ovat mm. yksinkertaisempi syntaksi ja virheenkäsittelyn helpottaminen. Esim. lomakkeen lähettäminen fetch-metodilla:
```html
<form>
  <div>
    <input name="fName" type="text" placeholder="etunimi">
  </div>
  <div>
    <input name="lName" type="text" placeholder="sukunimi">
  </div>
  <div>
    <input name="submit" type="submit" value="Näytä">
  </div>
</form>
<script>
// luodaan olio 'data', johon lisätään käyttäjän syöte lomakkeesta ja määritetään http-metodiksi POST
const data = {
  body: {
    fname: document.querySelector('input[name=fName]').value,
    lname: document.querySelector('input[name=lName]').value
    },
  method: 'POST'
}

// Kun lomake lähetetään...
form.onsubmit = function(evt) {
  // ... estä vakiotapahtuma.
  evt.preventDefault();
  // lähetetään tiedot
  fetch('osoiteJohonTiedotLahetetaan.php', data)
    .then(function(vastaus) {   // sitten kun palvelimen vastaus on saatu
    console.log(vastaus);       // tehdään vastauksella jotain
   }).catch( function(virhe) {  // virhetilanteessa otetaan virhe kiinni
     console.log(virhe);        // ja tulostetaan se
   });
}
</script>
```
