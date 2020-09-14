# Tapahtumankäsittely
Koska JavaScriptiä käytetään interaktiivisuuden lisäämiseen verkkosivuilla, tarvitaan jokin keino miten voidaan vastata käyttäjän tekemiin tai järjestelmässä tapahtuviin toimintoihin ja tapahtumiin.
Tätä keinoa kutsutaan [tapahtumankäsittelyksi, englanniksi event handling.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

Esimerkiksi, jos käyttäjä napsauttaa painiketta, siihen voidaan vastata näyttämällä tietoruutu:
```html
<button>Klikkaa mua</button>
<script>
const nappi = document.querySelector('button');
nappi.addEventListener('click', function(evt){
  alert('Elementtiä' + evt.currentTarget + 'klikattiin');
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
  alert('Elementtiä' + evt.currentTarget + 'klikattiin');
}

nappi.addEventListener('click', popup);
</script>
``` 
Huomaa että addEventListenerissä popup-funktiosta puuttuvat sulkeet Tämä siksi, että popup-funktiota käytetään tapahtumankäsittelijänä 
eikä sitä kutsuta välittömästi, vaan vasta sitten, kun 'click' tapahtuu. Jos siinä oisi sulkeet, funktio käynnistettäisiin välittömästi.

Tapahtumankäsittelijää kutsutaan myös takaisinkutsufunktioksi (callback).

Tapahtumankäsittelijä ottaa vastaan [tapahtuma-olion](https://developer.mozilla.org/en-US/docs/Web/API/Event) (evt), joka sisältää tietoa tapahtumasta, kuten tapahtuman tyypin ja sen kohteen. Esim `evt.currentTarget` palauttaa sen elementin, joka on tapahtuman kohde.
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
  alert('Elementtiä' + evt.currentTarget + 'klikattiin');
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
  alert('Elementtiä' + evt.currentTarget + 'klikattiin');
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
Joissain tapauksissa nämä vakiotoiminnot halutaan keskeyttää.

Esimerkiksi HTML lomakkeet toimivat siten, että käyttäjä täyttää lomakkeen, jonka jälkeen hän painaa lähetysnappia. Tässä vaiheessa selain lähettää tiedot action-attribuutissa määritettyyn osoitteeseen (ts. lähettää HTTP-pyynnön) ja samalla avaa kyseisen osoitteen selainikkunassa (eli vastaanottaa HTTP-vastauksen). Nykyaikaisissa web-sovelluksissa tälläinen toiminta halutaan estää, eli ei haluta siirtyä aina uudelle sivulle lomaketta lähettäessä. Esimerkkinä vaikkapa viestien lähettäminen Facebookissa. Kun elementin vakiotapahtuma halutaan pysäyttää, käytetään [preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)-metodia:
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
form.addEventListener('submit', function(evt) {
  // ... estä vakiotapahtuma.
  evt.preventDefault();
  // Tässä voidaan esim. tarkastaa onko lomakkeen kentät täytetty oikein,
  // jonka jälkeen se voitaisiin lähettää esim. fetch-metodilla
  // Nyt kuitenkin tyydytään esimerkin vuoksi tulostamaan käyttäjän syöte.
  p.innerText = `Your name is ${fname.value} ${lname.value}`;
});
</script>
```

## [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
JavaScriptin uudemmissa versioissa callback funktioiden sijasta käytetään yhä useammin lupauksia (promise). Lupaus on olio, joka 'lupaa' palauttaa arvon.
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
    .then( function(vastaus) {  // Sitten kun palvelimen vastaus on saatu
    console.log(vastaus);       // tehdään vastauksella jotain.
   }).catch( function(virhe) {  // Virhetilanteessa otetaan virhe kiinni
     console.log(virhe);        // ja tulostetaan se.
   });
}
</script>
```
## Harjoitustehtävät
Lataa aloitustiedostot [tästä reposta](https://github.com/ilkkamtk/event-tehtavat).
1. teht1.html (2p)
   * Dokumentti sisältää `<button>` elementin. Tee skripti, joka avaa ponnahdusikkunan, jossa lukee 'Nappia klikattu', kun `<button>` elementtiä klikataan
1. teht2.html (4p)
   * Dokumentti sisältää `<img>` ja `<p>` elementit. Tee CSS joka piilottaa `<p>` elementin ja skripti + CSS, joka näyttää `<p>` elementin, kun hiiri liikutetaan `<img>` elementin päälle (mouseenter) ja piilottaa `<p>` elementin, kun hiiri poistuu `<img>` elementin päältä (mouseleave).
1. teht3.html (4p)
   * Tee laskin, jossa on yhteenlasku, vähennys, kerto- ja jakolasku.
   * teht3.html sisältää kaksi tekstikenttää, joihin syötetään numerot, jotka lasketaan yhteen, vähennetään, kerrotaan tai jaetaan, riippuen siitä mitä nappia käyttäjä painaa. Vastaus tulostetaan `<p id="vastaus">` elementin sisälle.
   * Jotta luvuilla voidaan laskea, tekstikenttien arvot pitää muuttaa numeroiksi unaarisella operaattorilla tai esim.  [parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) -funktiolla, koska tekstikenttien tyyppi on merkkijono. Tekstikenttien sisällön voi lukea `value` -attribuutilla (`element.value`).
   * Jos haluat haastetta, vaihda nappien tilalle alasvetovalikko, josta valitaan laskun tyyppi. + 2p
   * Tai vielä haasteellisemmasa versiossa tee vain yksi tekstikenttä, johon kirjoitat laskun. Tässä voit käyttää apuna esim [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ja [split -metodeja](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) sekä [switch -lausetta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) + 4p
1. teht4.html (6p)
   * teht4A.js ja teht4B.js sisältävät taulukon, jossa on kolmen kuvan tiedot; pieni kuvake ja iso kuva.
   * Tulosta kuvakkeet teht4A.html ja teht4B.html sivuille HTML-listaan
   * teht4A.html (ja B) sisältää `<div>` elementin, jonka sisällä om `<img>` elementti. Tee JavaScriptillä toiminto, jossa kuvaketta klikkaamalla isompi kuva tulostetaan `<img>` elementin sisälle ja samalla `<div>` elementille vaihdetaan 'visible' CSS-luokka (ks. alla).
   * Kun isoa kuva klikataan, se piilotetaan vaihtamalla `<div>` elementille 'hidden' luokka takaisin. 
   * Tee em. toiminnot ensin teht4A.js -tiedostoon ja luo uudet elementit käyttäen innerHTML -ominaisuutta
   * Tee sitten samat toiminnot teht4B.js -tiedostoon, mutta tällä kertaa käytä DOM-metodeja uusien elementtien luomiseen (document.createElement jne.) 
   ```css
   /* tee erillinen CSS-tiedosto */
   .hidden {
    display: none;
   }
   
   .visible {
    display: block;
   }
   ```
