# Tapahtumankäsittely
Koska JavaScriptiä käytetään interaktiivisuuden lisäämiseen verkkosivuilla, tarvitaan jokin keino miten voidaan vastata käyttäjän tekemiin tai järjestelmässä tapahtuviin toimintoihin ja tapahtumiin.
Tätä keinoa kutsutaan tapahtumankäsittelyksi, englanniksi event handling.

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
Yllä olevassa koodissa [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)-metodin ensimmäinen parametri 'click' on tapahtuma eli event ja toinen parametri on funktio, jota kutsutaan, kun 'click' tapahtuu.
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

Tapahtumankäsittelijä ottaa vastaan [tapahtuma-olion](https://developer.mozilla.org/en-US/docs/Web/API/Event) (evt), joka sisältää tietoa tapahtumasta, kuten tapahtuman tyypin ja sen kohteen. Esim `evt.target` palauttaa sen elementin, joka on tapahtuman kohde.
Yllä olevassa esimerkkikoodissä tämä kohde on `<button>`-elementti; 
## perinteinen
````javascript
document.getElementById('#nappi').onclick = someFunction;
````
## moderni
```javascript
document.getElementById('#nappi').addEventListener('click', someFunction);
```
## [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)