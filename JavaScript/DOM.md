# DOM - Document Object Model
Document Object Model eli dokumenttioliomalli on puumainen kuvaus HTML dokumentistä.
![DOM](https://www.w3schools.com/js/pic_htmltree.gif) 
*w3schools.com*

HTML DOM on standardi, joka määrittelee kuinka HTML elementtejä valitaan, muokataan, lisätään ja poistetaan. Kaikkia elementtejä käsitellään olioina ja jokaista elementtiä, attribuuttia ja elementin sisältöä (esim. tekstiä) kutsutaan nimellä 'node'.
```html
<html>
    <head>
        <title>Esimerkki</title>
    </head>
    <body>
        <p>Tässä on yksi kappale</p>
        <script>
        const kappale = document.querySelector('p'); // valitsee dokumentistä ensimmäisen p-elementin
        console.log(kappale.innerText); // tulostaa p-elementin sisällä oleva tekstin konsoliin
        </script>
    </body>
</html>
```  
Yllä olevassa esimerkissä valittu p-elementti tallennetaan elementtioliona (tai elementtinodena) nimellä 'kappale'. Tämän jälkeen 'kappale'-oliota voidaan käsitellä [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)-rajapinnan ominaisuuksien ja metodien avulla.

## Parent/child
Koska DOM kuvaa dokumentin puumaisena rakenteena, käytetään sen yhteydessä termejä vanhempi (tai äiti/isä), lapsi, ja sisar. Englanniksi parent, child ja sibling. Esim. ylläolevassa kuvassa h1-elementti on body-elementin lapsi ja a-elementin sisar. Vastaavasti body-elementti on sekä h1- ja a-elementtien vanhempi.

## [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)-rajapinta
`document`-rajapinta edustaa web-sivua, sen sisällä ovat kaikki muut dokumentin objektit. Kun haluat valita dokumentista minkä tahansa HTML-elementin, sinun tulee aloittaa document-rajapinnasta. Esim. `document.getElementByID('logo')`

### Tärkeimmät metodit ja ominaisuudet
```javascript
document.querySelector('#logo')        // hakee dokumentista yhden elementin css-valitsimen avulla. Tässä tapauksessa tietyllä id:llä
document.querySelectorAll('.nappi')    // hakee dokumentista elementtejä css-valitsimen avulla.
document.getElementById('logo')        // hakee dokumentista elementin tietyllä id:llä

// komennot voidaan kohidstaa myös valittuun nodeen:
solmu.getElementsByTagName("p")     // hakee solmu-nodesta kaikki p-elementit
solmu.appendChild(lapsi)            // lisää solmu-nodeen lapsinoden
solmu.removeChild(lapsi)            // poistaa solmu-nodesta lapsinoden
```
Koska document-rajapinta perii [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)- ja [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)-rajapinnat, itse asiassa tärkeimmät ominaisuudet tulevat niistä:
```javascript
elem.innerHTML   // elem-noden sisältämä HTML-koodi
elem.innerText   // elem-noden sisältämä teksti
elem.nodeName    // elem-noden elementtityyppi
elem.nodeValue   // elem-noden arvo
elem.parentNode  // elem-noden parentnode
elem.childNodes  // elem-noden lapsinodet
elem.firstChild  // elem-noden ensimmäinen lapsinode 
elem.lastChild   // elem-noden viimeinen lapsinode
elem.attributes  // elem-noden attribuuttinodet
```
### Object collections
Dokumentista voidaan myös hakea elementtikokoelmia:
```javascript
document.forms      // hakee kaikki form-elementit
document.images     // hakee kaikki kuva-elementit
document.links      // hakee kaikki area- ja a-elementit, joilla on href-attribuutti
document.scripts    // hakee kaikki script-elementit
```

## Esimerkkejä

1. Valitse dokumentista elementti, jonka id on 'uutiset' ja tallenna elementtinode nimellä 'u'. Sen jälkeen valitse elementtinodesta 'u' kaikki p-elementit ja tallenna elementtilista nimellä 'p':
    ```javascript
    const u = document.getElementById("uutiset");
    const p = u.getElementsByTagName("p");
    
    // sama voidaan kirjoittaa myös ilman välimuuttujaa
    const p = document.getElementById("#uutiset").getElementsByTagName("p");
 
    // tai yhdellä komennolla
    const p = document.querySelectorAll('#uutiset p');
    ```
1. Elementtilista kaikista "tiedote"-luokkaan kuuluvista p-elementeistä:   
    ```javascript
    const x = document.querySelectorAll('p.tiedote');
    ```
1. Elementin sisällön muuttaminen:
   ```html
   <p id="pvm"><span class="sininen">Maanantai</span></p>
   
   <script>
   document.getElementById('pvm').innerHTML = '<span class="punainen">Tiistai</span>';
   </script>
   ```
1. Attribuutin arvon muuttaminen:
   ```html
   <img id="logo" src="metropolia.png">
   
   <script>
   document.getElementById('logo').src = "laurea.png";                 // käytetään attribuutin nimeä ominaisuutena
   document.getElementById('logo').setAttribute('src', 'laurea.png');  // tai setAttribute()-metodia
   </script>
   ```
### CSS:n käsittely
JavaScriptillä voidaan myös muokata elementtien ulkoasua. Vaihtoehtoina tällöin on joko vaihtaa style-attribuutin tai class-attribuuttien arvoja aivan kuten HTML-dokumenteissa on normaalistikin tapana.

Inline eli style attribuutin muokkaaminen:

```html
<p style="background-color: #ccc; padding: 1rem;" id="kappale">Jotain tekstiä</p>

<script>
document.querySelector('#kappale').style = "background-color: #222; padding: 3rem;";
</script>
```
Class attribuutin muokkaaminen:
```html
<style>
.punainen {
    color: #f00;
}

.sininen {
    color: #00f;
}
</style>

<p class="punainen" id="kappale">Jotain tekstiä</p>

<script>
document.querySelector('#kappale').setAttribute('class', 'sininen');
// tai
document.querySelector('#kappale').classList.toggle('sininen');
</script>
```
[classList-dokumentaatio](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

## Lomakkeen kanssa työskentely
